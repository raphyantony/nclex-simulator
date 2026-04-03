const questions = [
  {
    "id": 1,
    "type": "multiple-choice",
    ...
    \
    "type": "multiple-choice",
    ...
    {

    "id": 1,

    "type": "multiple-choice",

    "category": "Pharmacology",

    "difficulty": "medium",

    "stem": "A nurse is preparing to administer digoxin 0.125 mg PO to an adult client. Before administering this medication, which assessment is the priority?",

    "options": [

      "Measure the client's blood pressure",

      "Assess the client's apical pulse for one full minute",

      "Check the client's most recent serum potassium level",

      "Review the client's last digoxin level"

    ],

    "correctAnswer": 1,

    "rationale": "Digoxin is a cardiac glycoside that slows and strengthens the heartbeat. The priority assessment before administration is the apical pulse — if it is below 60 bpm in an adult, the nurse must hold the dose and notify the provider. While potassium levels and serum digoxin levels are also important monitoring parameters (hypokalemia increases digoxin toxicity risk), the immediate bedside safety check is always the apical pulse. Blood pressure is not a primary pre-administration check for digoxin."

  },

  {

    "id": 2,

    "type": "sata",

    "category": "Med-Surg: Respiratory",

    "difficulty": "medium",

    "stem": "A nurse is caring for a client diagnosed with chronic obstructive pulmonary disease (COPD). Which of the following findings should the nurse expect? SELECT ALL THAT APPLY.",

    "options": [

      "Barrel chest appearance",

      "Pursed-lip breathing",

      "Bradycardia at rest",

      "Prolonged expiratory phase",

      "Decreased fremitus on palpation",

      "SpO2 of 98% on room air"

    ],

    "correctAnswers": [0, 1, 3, 4],

    "rationale": "COPD causes air trapping and hyperinflation, leading to a barrel chest (increased AP diameter). Clients instinctively use pursed-lip breathing to create back-pressure that keeps airways open longer during exhalation. Exhalation is prolonged because of airflow obstruction. Tactile fremitus is decreased because the hyperinflated lungs transmit vibrations poorly. Bradycardia is NOT expected — tachycardia is more common due to hypoxemia and sympathetic stimulation. An SpO2 of 98% is NOT typical; COPD clients commonly have chronically lower saturations (often 88–92% is their baseline target)."

  },

  {

    "id": 3,

    "type": "multiple-choice",

    "category": "Maternal-Newborn",

    "difficulty": "hard",

    "stem": "A nurse is caring for a client who is 39 weeks pregnant and reports decreased fetal movement over the past 24 hours. The fetal heart rate baseline is 175 bpm with minimal variability and no accelerations noted over 40 minutes of monitoring. Which action should the nurse take FIRST?",

    "options": [

      "Reposition the client to the left lateral position and offer oral fluids",

      "Notify the provider immediately of the findings",

      "Prepare the client for an emergency cesarean birth",

      "Apply vibroacoustic stimulation to elicit a fetal response"

    ],

    "correctAnswer": 1,

    "rationale": "A baseline FHR of 175 bpm (tachycardia) with minimal variability and absent accelerations over 40 minutes is a Category II (indeterminate) to potentially Category III (abnormal) strip — this is a non-reassuring pattern. The FIRST action must be to notify the provider immediately, as this requires physician/CNM evaluation and possible intervention. Repositioning and fluids are appropriate for variable decelerations or suspected cord compression, not for this pattern. Vibroacoustic stimulation might be used to evaluate variability but is not the priority first action when tachycardia is present. Emergency C-section is a provider decision, not a nursing-initiated first action."

  },

  {

    "id": 4,

    "type": "bowtie",

    "category": "Med-Surg: Cardiac",

    "difficulty": "hard",

    "stem": "A nurse is caring for a 68-year-old client who was admitted 2 hours ago for chest pain. Vital signs: BP 88/56 mmHg, HR 118 bpm, RR 26/min, SpO2 88% on 2L NC, skin is cool and clammy, urine output 15 mL over the past hour. The client is restless and confused.\n\nComplete the Bow-Tie by selecting the client's condition, 2 nursing actions to take, and 2 parameters to monitor.",

    "centerOptions": [

      "Hypovolemic shock",

      "Cardiogenic shock",

      "Pulmonary embolism",

      "Hypertensive emergency",

      "Septic shock"

    ],

    "actionOptions": [

      "Administer IV fluid bolus 1L NS wide open",

      "Elevate the head of bed 30–45° and apply high-flow oxygen",

      "Place the client in Trendelenburg position",

      "Notify the provider immediately and prepare for urgent intervention",

      "Restrict all oral and IV fluids",

      "Administer oral antihypertensive medication"

    ],

    "parameterOptions": [

      "Hourly urine output",

      "Blood glucose levels every 4 hours",

      "Continuous cardiac monitoring and repeat 12-lead ECG",

      "Daily weights only",

      "Pupillary response every 2 hours",

      "SpO2 and respiratory rate continuously"

    ],

    "correctCenter": 1,

    "correctActions": [1, 3],

    "correctParameters": [0, 2],

    "rationale": "This client is in CARDIOGENIC SHOCK — the combination of hypotension, tachycardia, hypoxia, cool/clammy skin, oliguria (<0.5 mL/kg/hr), and altered mental status following chest pain indicates the heart is failing to pump adequately. Hypovolemic shock lacks the respiratory/cardiac context; septic shock would include fever and known infection. ACTIONS: High-flow O2 and HOB elevation address hypoxemia and reduce cardiac workload. Immediate provider notification is critical for emergent intervention (possible PCI, vasopressors, inotropes). A large fluid bolus is CONTRAINDICATED in cardiogenic shock — it worsens pulmonary congestion. PARAMETERS: Hourly urine output reflects end-organ perfusion and is a key hemodynamic indicator. Continuous cardiac monitoring and serial ECGs are essential to detect evolving MI or arrhythmias. Blood glucose and pupils are not priority parameters in this scenario."

  },

  {

    "id": 5,

    "type": "sata",

    "category": "Mental Health",

    "difficulty": "medium",

    "stem": "A nurse is assessing a client who was admitted for a major depressive episode. The client states, 'I've been thinking that everyone would be better off without me.' Which of the following nursing interventions are appropriate at this time? SELECT ALL THAT APPLY.",

    "options": [

      "Ask the client directly: 'Are you thinking about suicide?'",

      "Implement one-to-one continuous observation",

      "Remove or secure all potentially harmful items from the environment",

      "Offer reassurance that these feelings will pass soon",

      "Document the client's exact words and your assessment findings",

      "Encourage the client to participate in group therapy immediately"

    ],

    "correctAnswers": [0, 1, 2, 4],

    "rationale": "The client's statement is a veiled suicidal ideation cue requiring immediate safety action. Directly asking about suicide does NOT plant the idea — it opens communication and is standard of care. One-to-one observation is required when a client expresses passive or active suicidal ideation. Environmental safety (removing sharps, cords, etc.) is a fundamental suicide precaution. Accurate documentation of the client's exact words is both legally and clinically essential. Offering hollow reassurance ('it will pass') invalidates feelings and does not address safety. Rushing the client to group therapy is inappropriate and potentially unsafe — stabilization and safety come first."

  }

]
