// NCLEX-RN Clinical Judgment Simulator

A full-stack NCLEX exam simulator with Claude AI-powered performance analytics.

## Features

- ✅ Multiple Choice, SATA, and NGN Bow-Tie question types
- ✅ Immediate rationale after every question
- ✅ 5-hour countdown timer (hideable)
- ✅ Psychological intervention screen at question 85
- ✅ Claude AI coaching at questions 50, 100, and 150
- ✅ Detailed results screen with category breakdown

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 3. Run the server

```bash
npm start
```

Open your browser to `http://localhost:3000`.

---

## Adding Your 150 Questions

Edit `public/questions.json`. Each question follows one of these formats:

### Multiple Choice
```json
{
  "id": 6,
  "type": "multiple-choice",
  "category": "Pharmacology",
  "difficulty": "medium",
  "stem": "Your question stem here...",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": 0,
  "rationale": "Explanation of the correct answer..."
}
```

### SATA (Select All That Apply)
```json
{
  "id": 7,
  "type": "sata",
  "category": "Med-Surg: Cardiac",
  "difficulty": "hard",
  "stem": "Your SATA question stem... SELECT ALL THAT APPLY.",
  "options": ["Option A", "Option B", "Option C", "Option D", "Option E"],
  "correctAnswers": [0, 2, 4],
  "rationale": "Explanation..."
}
```

### NGN Bow-Tie
```json
{
  "id": 8,
  "type": "bowtie",
  "category": "Med-Surg: Respiratory",
  "difficulty": "hard",
  "stem": "Clinical scenario...\n\nComplete the Bow-Tie by selecting the client's condition, 2 actions, and 2 parameters.",
  "centerOptions": ["Condition A", "Condition B", "Condition C", "Condition D", "Condition E"],
  "actionOptions": ["Action 1", "Action 2", "Action 3", "Action 4", "Action 5", "Action 6"],
  "parameterOptions": ["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5", "Parameter 6"],
  "correctCenter": 0,
  "correctActions": [1, 3],
  "correctParameters": [0, 4],
  "rationale": "Explanation..."
}
```

---

## Deploying to Render (Free Tier)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: NCLEX Simulator"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/nclex-simulator.git
git branch -M main
git push -u origin main
```

### Step 2: Create a Render Web Service

1. Go to [render.com](https://render.com) and sign in (or create a free account).
2. Click **"New +"** → **"Web Service"**.
3. Connect your GitHub account and select your `nclex-simulator` repository.
4. Configure the service:
   - **Name:** `nclex-simulator` (or whatever you like)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

### Step 3: Add Environment Variables on Render

1. In your Render service dashboard, go to **"Environment"**.
2. Click **"Add Environment Variable"**.
3. Add:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-your-actual-key-here`
4. Click **Save**. Render will redeploy automatically.

### Step 4: Access Your App

Your app will be live at: `https://nclex-simulator.onrender.com` (or similar URL shown in your Render dashboard).

> **Note:** On Render's free tier, the server will spin down after 15 minutes of inactivity and take ~30 seconds to restart on the next request. This is normal behavior for the free tier.

---

## Project Structure

```
nclex-simulator/
├── server.js           # Express backend + Claude API proxy
├── package.json
├── .env.example        # Template for environment variables
├── .gitignore
├── README.md
└── public/
    ├── index.html      # Full exam simulator frontend
    └── questions.json  # Your question bank (edit this!)
```
