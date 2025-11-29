import { Pause, Play } from "lucide-react";

export const TimerBoard = ({ matchTimeOn, setMatchTime }) => {
  return (
    <article>
      <div
        id="timer-container"
        className="flex w-full flex-col items-center justify-start p-5"
      >
        <h2>Spielzeit</h2>
        <div
          id="match-time"
          className={`flex w-4/6 justify-evenly p-5 font-[Lato-Black] text-[8rem] ${matchTimeOn ? "text-tisco-green" : "text-tisco-red"}`}
        >
          <span>XX</span>
          <span>:</span>
          <span>XX</span>
        </div>
        <div className="grid w-full grid-cols-3">
          <div></div>
          <button
            onClick={() => setMatchTime(!matchTimeOn)}
            className="button button-matchtime"
          >
            {!matchTimeOn ? <Play /> : <Pause />}
            <span className="pl-4">{!matchTimeOn ? "START" : "STOP"}</span>
          </button>
          <div></div>
        </div>
      </div>
    </article>
  );
};
