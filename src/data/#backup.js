/**
 * initial data set for app data
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

// timer function
let initialSec = data.match_period_duration * 60;
const [matchTime, setMatchTime] = useState({
  isOn: false,
  secLeft: initialSec,
  minutes: Math.floor(initialSec / 60),
  seconds: initialSec % 60,
});

useEffect(() => {
  if (!matchTime.isOn) return;

  const interval = setInterval(() => {
    setMatchTime((prev) => {
      if (prev.secLeft <= 1) {
        clearInterval(interval);
        return { ...prev, secLeft: 0, minutes: 0, seconds: 0, isOn: false };
      }
      const newSecLeft = prev.secLeft - 1;
      return {
        ...prev,
        secLeft: newSecLeft,
        minutes: Math.floor(newSecLeft / 60),
        seconds: newSecLeft % 60,
      };
    });
  }, 1000);

  return () => clearInterval(interval);
}, [matchTime.isOn, data]);

const timerOn = (x) => {
  x === true
    ? setMatchTime((prev) => ({ ...prev, isOn: true }))
    : setMatchTime((prev) => ({ ...prev, isOn: false }));
};
