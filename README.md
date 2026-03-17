<div align="center">

```
███████╗██╗   ██╗██╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗
██╔════╝██║   ██║██║██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝
█████╗  ██║   ██║██║██║  ██║█████╗  ██╔██╗ ██║██║     █████╗
██╔══╝  ╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║╚██╗██║██║     ██╔══╝
███████╗ ╚████╔╝ ██║██████╔╝███████╗██║ ╚████║╚██████╗███████╗
╚══════╝  ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
```

### Build your case. Get what you're owed.

*AI-powered legal evidence builder — no lawyer, no account, no cost*

---

![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square&labelColor=07070A)
![HTML](https://img.shields.io/badge/HTML-vanilla-E34F26?style=flat-square&logo=html5&logoColor=white&labelColor=07070A)
![JS](https://img.shields.io/badge/JS-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=07070A)
![AI](https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white&labelColor=07070A)
![No Backend](https://img.shields.io/badge/backend-none-C41E1E?style=flat-square&labelColor=07070A)
![No NPM](https://img.shields.io/badge/npm_install-nothing-white?style=flat-square&labelColor=07070A)

<br>

[**→ Live Demo**](https://evidencelocker.vercel.app) &nbsp;|&nbsp; [**→ Video Walkthrough**](#) &nbsp;|&nbsp; [**→ Try It Now**](https://evidencelocker.vercel.app)

</div>

---

## The Problem

**$50,000,000,000** is stolen from workers, tenants, and consumers in the United States every year.

Most of it is never recovered — not because the cases aren't there. Because people don't know they have one.

| Barrier | What it costs |
|---|---|
| Legal complexity | 50,000+ federal and state statutes. Nobody knows which apply to them. |
| Attorney cost | $300–500/hr for work that takes a machine 90 seconds. |
| System intimidation | Court filings, agency complaints, demand letters — all designed assuming legal training. |
| Deadlines | Statutes of limitations expire while people are still figuring out what to do. |

**4 in 10 people who are wronged never take any action.** They absorb the loss. The other party gets away with it again.

EvidenceLocker exists to make that strategy fail.

---

## What It Does

Type what happened. Get a complete legal case file in under 2 minutes.

```
INPUT  ────────────────────────────────────────────────────────────────
"My landlord kept my $2,400 deposit and won't respond to my messages."

OUTPUT ────────────────────────────────────────────────────────────────

  ┌─ VIOLATIONS REPORT ───────────────────────────────────────────────┐
  │  1. Cal. Civ. Code § 1950.5(g) — Return within 21 days required   │
  │  2. Cal. Civ. Code § 1950.5(l) — Bad faith = 2x penalty           │
  │  3. URLTA § 4.104 — Itemized deduction statement required          │
  │  → CASE STRENGTH: 90/100     EST. RECOVERY: $2,400 – $7,200       │
  └───────────────────────────────────────────────────────────────────┘

  ┌─ EVIDENCE CHECKLIST (8 items, 3 CRITICAL) ────────────────────────┐
  │  [CRITICAL] Screenshot every text thread, timestamps visible        │
  │  [CRITICAL] Bank records showing exact deposit payment date         │
  │  [CRITICAL] Move-out photos with EXIF metadata intact               │
  │  ... 5 more items with exact preservation instructions              │
  └───────────────────────────────────────────────────────────────────┘

  ┌─ DEMAND LETTER ───────────────────────────────────────────────────┐
  │  Professional letter. Today's date. Statute citations.             │
  │  Exact dollar amount. 14-day deadline. Consequences listed.        │
  │  Print it. Send it. Today.                                         │
  └───────────────────────────────────────────────────────────────────┘

  ┌─ FILING ROADMAP ──────────────────────────────────────────────────┐
  │  California-specific. Small claims court. Exact steps and fees.    │
  │  What to bring. What to say. What NOT to say.                      │
  └───────────────────────────────────────────────────────────────────┘

  ┌─ CASE STRATEGY ───────────────────────────────────────────────────┐
  │  90% chance of success in small claims.                            │
  │  Demand letter first → file in 14 days if no response.            │
  │  Leverage: Statutory 2x damages available for bad faith.           │
  └───────────────────────────────────────────────────────────────────┘
```

No legal knowledge. No lawyer. No account. No credit card. **Free.**

---

## Live Demo

**[→ evidencelocker.vercel.app](https://evidencelocker.vercel.app)**

Try these scenarios:

```
"My landlord refused to return my $2,400 security deposit after I moved out"
"My employer hasn't paid my overtime for the last 6 months"
"A contractor took $7,000, did half the job, and disappeared"
"I was fired two days after reporting a safety violation to HR"
"An online seller sent a defective product and refuses to refund me"
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER'S BROWSER                              │
│                                                                     │
│  index.html → intake.html → loading.html → results.html            │
│  Landing       3-Step Wizard   Vault Open    Dashboard + AI Output  │
│                     │                              │                │
│               localStorage                  Single Gemini call      │
│               { category,                   returns all 7 sections  │
│                 description,                parsed + streamed into   │
│                 state, amount,              5 cards simultaneously  │
│                 evidence[] }                                         │
└──────────────────────────────────────┬──────────────────────────────┘
                                       │ HTTPS POST
                                       ▼
                          ┌────────────────────────┐
                          │  Google Gemini 2.5 Flash │
                          │                         │
                          │  [VIOLATIONS]           │
                          │  [EVIDENCE]             │
                          │  [LETTER]               │
                          │  [ROADMAP]              │
                          │  [STRATEGY]             │
                          │  [ACTIONS]              │
                          │  [TIMELINE]             │
                          └────────────────────────┘

Zero servers. Zero databases. Zero auth.
4 static HTML files. Opens in 1 second. Deploys anywhere for free.
```

### Why No Backend

- **Zero infrastructure cost** — GitHub Pages, Vercel, Netlify. Scales free.
- **Zero latency overhead** — Calls go straight from browser to Google.
- **Zero data liability** — Case data never touches a server. localStorage only.
- **Zero setup friction** — No npm install. No .env. Just open the file.

---

## Features

| Feature | Details |
|---|---|
| **5 AI documents** | Violations, evidence checklist, demand letter, filing roadmap, case strategy — all from one combined prompt |
| **1 API call** | Everything in a single Gemini request. No rate limit issues on free tier. |
| **Streaming output** | Text streams character-by-character into cards as it generates |
| **Severity ring** | Animated SVG circle fills to case strength score (0–100). Green/amber/red by score. |
| **Interactive checklist** | Click to check off evidence items. Progress bar. State persists via localStorage. |
| **Case timeline** | Auto-generated horizontal milestone timeline from intake to resolution |
| **PDF export** | Full formatted package via jsPDF. Dark cover page, section headers, page numbers, case ID. |
| **AI chat** | Ask follow-up questions. The assistant knows your full case — all 5 documents. |
| **Urgency banner** | Parses roadmap for critical deadlines. Surfaces them in a red banner automatically. |
| **Keyboard shortcuts** | `D` download, `C` copy all, `S` share, `A` chat, `N` new case, `?` help |
| **Custom cursor** | 8px red dot with lerp lag. Expands to ring on hover. |
| **Zero dependencies** | 1 CDN script (jsPDF). Everything else is vanilla. |

---

## Tech Stack

```
Language      Vanilla HTML · CSS · JavaScript — no frameworks, no build tools
AI            Google Gemini 2.5 Flash — single combined REST API call
PDF           jsPDF 2.5.1 — CDN only, runs entirely client-side
Fonts         DM Serif Display · Inter · JetBrains Mono — Google Fonts
Storage       localStorage — case data and evidence checklist state
Deploy        Any static host — open the file and it works
Dependencies  1
Build step    None
```

---

## Setup

```bash
# 1. Clone
git clone https://github.com/yourusername/evidencelocker
cd evidencelocker

# 2. Add your Gemini API key
# Open results.html, find line ~9:
#   const GEMINI_API_KEY = 'YOUR_KEY_HERE';
# Replace with your key from https://aistudio.google.com
# Free tier. No credit card.

# 3. Open
open index.html
```

That's it.

---

## User Flow

```
① LANDING (index.html)
  Scroll-snap sections. $50B stat counter animates in.
  "They're counting on you to do nothing."
  One CTA: "Open Your Case File"
        ↓
② INTAKE WIZARD (intake.html)
  Step 1 — Pick category: Landlord / Employer / Contractor / Scam / Retailer / Other
  Step 2 — Describe situation. Live preview card updates as you type.
  Step 3 — Check existing evidence from 8-tile grid.
  Saves to localStorage as structured JSON.
        ↓
③ LOADING (loading.html)
  Reads localStorage. Shows case ID and category.
  Padlock animates open at 1.5s.
  5-node pipeline lights up sequentially.
  4.7 seconds of earned anticipation.
        ↓
④ RESULTS (results.html)
  Single Gemini call on load. Sections parsed and streamed into 5 cards.
  Severity ring animates. Checklist activates. Timeline renders.
  Confetti fires on completion. PDF ready. Chat available.
```

---

## Who It Helps

| Situation | What they get |
|---|---|
| Landlord kept $2,400 deposit | Cal. Civ. Code § 1950.5 cited · 2x penalty explained · small claims roadmap · ready-to-send letter |
| Unpaid overtime for 6 months | FLSA 29 U.S.C. § 207 · back pay calculated · NLRB filing steps · liquidated damages |
| Contractor took $7k, disappeared | Breach of contract · license board complaint · civil suit guide |
| Fired after reporting safety violation | OSHA § 11(c) retaliation · EEOC charge · reinstatement demand |
| Online seller won't refund | FTC complaint · chargeback instructions · Consumer Protection Act demand |

---

## The Impact

Legal representation isn't equally distributed. It goes to whoever can pay for it.

EvidenceLocker gives everyone else the same starting position money already buys: clarity on which laws apply, what evidence matters, and where to file first.

When renters win deposit cases, landlords stop treating deposits as free money. When workers file documented FLSA complaints, employers calculate that overtime is cheaper than the penalty. When contractors get attorney-grade demand letters, they finish jobs.

The individual outcome matters. The behavioral shift matters more.

---

## Design

Legal tools are designed to feel safe — blues, whites, rounded corners, friendly illustrations. That aesthetic is lying. It makes an adversarial process feel comfortable.

EvidenceLocker was designed to feel like what it actually is: a weapon.

- `#07070A` — Not quite black. More deliberate.
- One accent color — `#C41E1E` red, used exactly once per section. The constraint is the design.
- DM Serif Display — legal language with actual weight
- JetBrains Mono — every label and status. This is a machine.
- No rounded corners over 4px — soft corners communicate forgiveness. This product doesn't.

---

## Roadmap

**Near term**
- Edge function proxy — removes API key from client
- Custom domain
- 50-state statute database

**Month 3**
- Real attorney review add-on ($49 flat, 24hr turnaround)
- Case outcome tracking

**Month 6**
- Attorney referral marketplace (contingency only)
- State small claims e-filing API integrations

**Revenue**
- Free: 1 case/month
- Pro: $9/month unlimited
- Per-case: $19 with attorney review

40M+ Americans experience wage theft, deposit theft, contractor fraud, or consumer fraud annually. 0.1% at $9/month = $432M ARR.

---

## File Structure

```
evidencelocker/
├── index.html       Landing page — 7 sections, $50B counter, CTA
├── intake.html      3-step wizard — category, description, evidence
├── loading.html     Processing animation — padlock, pipeline, progress
├── results.html     Dashboard — 5 AI cards, PDF, chat, timeline
├── README.md
└── screenshots/
    ├── 01-landing.png
    ├── 02-intake.png
    ├── 03-loading.png
    └── 04-results.png
```

---

## Built By

Solo. 2 days. Quantum Sprint 2026.

---

## License

MIT. Fork it, deploy it, improve it.

If you're a legal aid organization: deploy this for your clients. That's the point.

---

<div align="center">

---

**$50 billion stolen annually.**
**4 in 10 people never fight back.**
**EvidenceLocker changes the math.**

---

[**→ Try it**](https://evidencelocker.vercel.app) &nbsp;·&nbsp; [**→ Watch the demo**](#) &nbsp;·&nbsp; [**→ Read the code**](#)

*Built with precision and anger.*

</div>
