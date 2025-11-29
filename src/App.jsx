import { useEffect, useState } from "react";

import { ConfigModal } from "./components/ConfigModal";
import { Header } from "./components/Header";
import { PenaltyBoard } from "./components/PenaltyBoard";
import { ScoreBoard } from "./components/ScoreBoard";
import { TimerBoard } from "./components/TimerBoard";
import { initialData } from "./js/data";

const App = () => {
  const [configVisible, setConfigVisibility] = useState(false);
  const [data, setData] = useState(initialData);

  const [matchTimeOn, setMatchTime] = useState(false);
  useEffect(() => {
    const matchtimer = setInterval(() => {
      if (matchTimeOn) console.log("matchtime");
    }, 1000);

    return () => {
      clearInterval(matchtimer);
    };
  }, [matchTimeOn]);

  return (
    <div
      id="wrapper"
      className={`flex min-h-screen w-full flex-col items-center ${
        matchTimeOn ? "bg-tisco-gray" : "bg-tisco-red"
      }`}
    >
      <Header setConfigVisibility={setConfigVisibility} />
      <main
        id="main-layout"
        className="flex w-full max-w-[1600px] grow justify-center gap-5 p-10 pt-50"
      >
        <section id="main-left" className="flex w-[70%] flex-col gap-5">
          <ScoreBoard data={data} />
          <TimerBoard matchTimeOn={matchTimeOn} setMatchTime={setMatchTime} />
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
