import {
  ConfigModal,
  Header,
  PenaltyBoard,
  ScoreBoard,
  TimerBoard,
} from "@components";
import { useConfig, useTime, useTimeLine } from "@data/provider";
import { useState } from "react";

const App = () => {
  const [configVisible, setConfigVisibility] = useState(false);

  // Testing Provider
  const { config } = useConfig();
  const { time } = useTime();
  const { timeline } = useTimeLine();

  console.log(config.sanity);
  console.log(time.sanity);
  console.log(timeline.sanity);

  return (
    <div
      id="wrapper"
      className={`bg-tisco-gray flex min-h-screen w-full flex-col items-center`}
    >
      <Header setConfigVisibility={setConfigVisibility} />
      <main className="pt-20"></main>

      <ConfigModal
        isVisible={configVisible}
        setVisibility={setConfigVisibility}
      />
    </div>
  );
};

export default App;
