import { useState } from "react";

import { ConfigModal } from "./components/ConfigModal";
import { Header } from "./components/Header";
import { PenaltyBoard } from "./components/PenaltyBoard";
import { ScoreBoard } from "./components/ScoreBoard";
import { TimerBoard } from "./components/TimerBoard";

const App = () => {
  const [configVisible, setConfigVisibility] = useState(false);
  const [data, setData] = useState({
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
  });

  return (
    <div
      id="wrapper"
      className="bg-tisco-gray flex min-h-screen w-full flex-col items-center"
    >
      <Header setConfigVisibility={setConfigVisibility} />
      <main
        id="main-layout"
        className="flex w-full max-w-[1600px] grow justify-center gap-5 p-10 pt-50"
      >
        <section id="main-left" className="flex w-[70%] flex-col gap-5">
          <ScoreBoard data={data} />
          <TimerBoard />
        </section>
        <section id="main-right" className="flex h-min grow">
          <PenaltyBoard />
        </section>
      </main>
      <ConfigModal
        data={data}
        setData={setData}
        isVisible={configVisible}
        setVisibility={setConfigVisibility}
      />
    </div>
  );
};

export default App;
