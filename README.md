# 2026 Personal KPI Dashboard
 
A lightweight, self-hosted habit tracker that visualises monthly progress against personal goals. No frameworks, no build step — just two files.
 
## What it tracks
 
| Metric | Goal | Scoring |
|---|---|---|
| Daily Steps | 10,000 steps/day | % of target hit |
| Screen Time | ≤ 2 hrs/day | Inverted — lower is better |
| Bible Verses | Monthly target (varies) | % of target hit |
| Sand Work Hours | 8 hrs/day | % of target hit |
 
Screen time is scored in reverse: being at the cap scores 100%, being under it scores above 100%, and going over turns red.
 
## Files
 
```
index.html   — the dashboard UI (no need to edit this)
data.js      — your data (the only file you update)
README.md    — this file
```
 
## How to update your data
 
Open `data.js` and find the month you want to update in the `MONTHS` array. Fill in the values:
 
```js
{
  label: "Oct",
  status: "in_progress",      // "pending" | "in_progress" | "complete"
  steps:  7200,   goal_steps:  10000,
  screen: 95,     goal_screen: 120,   // in MINUTES (e.g. 1h35m = 95)
  verses: 60,     goal_verses: 120,
  sand:   3.5,    goal_sand:   8,
},
```
 
- Change `status` to `"in_progress"` when the month starts (it glows amber on the dashboard)
- Change `status` to `"complete"` at month end
- `screen` is in **minutes** — convert hours and minutes before entering (e.g. 1h 45m = 105)
- Set any value to `null` if you don't have data for it yet
## Publishing on GitHub Pages
 
1. Push both files (`index.html` and `data.js`) to a GitHub repository
2. Go to **Settings → Pages**
3. Under *Source*, select **Deploy from a branch**
4. Choose `main` and `/ (root)`, then click **Save**
5. Your dashboard will be live at `https://<your-username>.github.io/<repo-name>/`
Updates go live within a minute of pushing changes to `data.js`.
 
