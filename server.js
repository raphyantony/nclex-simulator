require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ─── Claude Analytics Endpoint ────────────────────────────────────────────────
app.post("/api/analyze", async (req, res) => {
  const { questionNumber, totalCorrect, totalAnswered, weakCategories, questionLog } = req.body;

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY is not configured on the server." });
  }

  // Build a rich prompt from the performance data
  const weakList = weakCategories && weakCategories.length > 0
    ? weakCategories.map(c => `• ${c.category}: ${c.correct}/${c.total} correct (${Math.round((c.correct/c.total)*100)}%)`).join("\n")
    : "• Not enough category data yet";

  const recentMistakes = questionLog
    ? questionLog.filter(q => !q.correct).slice(-10).map(q =>
        `Q${q.id} (${q.category}, ${q.type}): answered wrong`
      ).join("\n") || "None recorded"
    : "No detailed log available";

  const prompt = `You are an expert NCLEX exam coach and psychometrician analyzing a nursing candidate's performance at the ${questionNumber}-question checkpoint.

PERFORMANCE SNAPSHOT:
- Questions answered: ${totalAnswered}
- Score: ${totalCorrect}/${totalAnswered} (${Math.round((totalCorrect/totalAnswered)*100)}%)
- Checkpoint: Question ${questionNumber}

WEAK CATEGORIES (by accuracy):
${weakList}

RECENT INCORRECT QUESTIONS:
${recentMistakes}

Provide a focused, actionable coaching analysis with these EXACT sections:

1. **OVERALL PERFORMANCE VERDICT** (2-3 sentences — be direct and honest)

2. **TOP 3 WEAK AREAS** — For each: name the area, explain the likely knowledge gap, and give one high-yield study tip.

3. **TEST-TAKING TRAPS YOU'RE FALLING INTO** — Identify 2-3 behavioral patterns based on the data (e.g., overthinking, missing priority keywords like "first" or "most important", confusing similar medications, etc.)

4. **PSYCHOLOGICAL STATE CHECK** — A brief, honest assessment of how this candidate is likely feeling right now and one mindset reframe.

5. **NEXT 25 QUESTIONS STRATEGY** — Three specific, tactical adjustments to make immediately.

Keep the tone like a tough-love coach: direct, evidence-based, motivating. No fluff. Use bold headers. Total response: 350–450 words.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Claude API error:", errText);
      return res.status(502).json({ error: "Claude API request failed.", detail: errText });
    }

    const data = await response.json();
    const analysisText = data.content?.[0]?.text || "No analysis returned.";
    res.json({ analysis: analysisText });

  } catch (err) {
    console.error("Server error calling Claude:", err);
    res.status(500).json({ error: "Internal server error.", detail: err.message });
  }
});

// ─── Fallback: serve index.html for any unmatched route ──────────────────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ NCLEX Simulator running on port ${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn("⚠️  WARNING: ANTHROPIC_API_KEY is not set. Analytics will not work.");
  }
});
