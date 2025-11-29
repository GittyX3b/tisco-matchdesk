/**
 * initial set for app data
 */
export const initialData = {
  team_home_name: "",
  team_home_score: 0,
  team_home_players: [],
  team_away_score: 0,
  team_away_players: [],
  team_away_name: "",
  match_period_number: 2, // number of periods per match
  match_period_names: ["", "", "Halbzeit", "Drittel", "Viertel"], // name of 1 period
  match_period_duration: 15, // duration in minutes of 1 period
  match_period_active: 1, // counter for current match
};

/**
 * initial set for matchtime
 */

export const initialMatchTime = {
  isRunning: false,
};
