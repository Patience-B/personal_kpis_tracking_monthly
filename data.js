// ============================================================
//  PERSONAL KPI DATA — update this file to refresh the dashboard
//
//  GOALS (update these if your targets change):
//    steps:   daily step target
//    screen:  max screen time in minutes (lower is better)
//    verses:  monthly Bible verse target
//    sand:    daily Sand work hours target
//
//  For each month:
//    steps:   average daily steps
//    screen:  average daily screen time in minutes (e.g. 8h43m = 523)
//    verses:  total Bible verses read that month
//    sand:    average daily Sand hours (null if not yet tracked)
//    goal_*:  the monthly target for that metric (can vary per month)
//    status:  "complete" | "in_progress" | "pending"
// ============================================================

const GOALS = {
  steps:  10000,   // daily steps
  screen: 120,     // minutes (2 hrs) — lower is better
  sand:   8,       // daily hours
};

const MONTHS = [
  {
    label: "Jan",
    status: "complete",
    steps:  6693,   goal_steps:  10000,
    screen: 523,    goal_screen: 180,   // 8h43m = 523 min; target at time was 3h = 180
    verses: 42,     goal_verses: 90,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Feb",
    status: "complete",
    steps:  6698,   goal_steps:  10000,
    screen: 504,    goal_screen: 180,   // 8h24m = 504 min
    verses: 76,     goal_verses: 90,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Mar",
    status: "complete",
    steps:  8102,   goal_steps:  10000,
    screen: 474,    goal_screen: 180,   // 7h54m = 474 min
    verses: 75.8,   goal_verses: 190,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Apr",
    status: "complete",
    steps:  7580,   goal_steps:  10000,
    screen: 530,    goal_screen: 180,   // 8h50m = 530 min
    verses: 68.4,   goal_verses: 90,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "May",
    status: "complete",
    steps:  7349,   goal_steps:  10000,
    screen: 511,    goal_screen: 180,   // 8h31m = 511 min
    verses: 16.7,   goal_verses: 120,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Jun",
    status: "complete",
    steps:  7935,   goal_steps:  10000,
    screen: 593,    goal_screen: 180,   // 9h53m = 593 min
    verses: 47,     goal_verses: 120,
    sand:   2.2,    goal_sand:   8,
  },
  {
    label: "Jul",
    status: "complete",
    steps:  6076,   goal_steps:  10000,
    screen: 333,    goal_screen: 120,   // 5h33m = 333 min; target dropped to 2h
    verses: 28,     goal_verses: 130,
    sand:   2.8,    goal_sand:   8,
  },
  {
    label: "Aug",
    status: "complete",
    steps:  5529,   goal_steps:  10000,
    screen: 393,    goal_screen: 120,   // 6h33m = 393 min
    verses: 149,    goal_verses: 150,
    sand:   2.4,    goal_sand:   8,
  },
  {
    label: "Sep",
    status: "in_progress",
    steps:  3879,   goal_steps:  10000,
    screen: 275,    goal_screen: 120,   // 4h35m = 275 min
    verses: 153,    goal_verses: 150,
    sand:   2.0,    goal_sand:   8,
  },
  {
    label: "Oct",
    status: "pending",
    steps:  null,   goal_steps:  10000,
    screen: null,   goal_screen: 120,
    verses: null,   goal_verses: null,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Nov",
    status: "pending",
    steps:  null,   goal_steps:  10000,
    screen: null,   goal_screen: 120,
    verses: null,   goal_verses: null,
    sand:   null,   goal_sand:   8,
  },
  {
    label: "Dec",
    status: "pending",
    steps:  null,   goal_steps:  10000,
    screen: null,   goal_screen: 120,
    verses: null,   goal_verses: null,
    sand:   null,   goal_sand:   8,
  },
];
