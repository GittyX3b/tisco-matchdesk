import { Pause, Play } from "lucide-react";

export const TimerBoard = ({ timeOn, setTime }) => {
  return (
    <article
      className={`${!timeOn && "outline-tisco-red rounded-xl outline-5"}`}
    >
      <div
        id="timer-container"
        className="flex w-full flex-col items-center justify-start p-5"
      >
        <h2>Spielzeit</h2>
        <div
          id="match-time"
          className={`flex w-4/6 justify-evenly p-5 font-[Lato-Black] text-[8rem] ${timeOn ? "text-tisco-green" : "text-tisco-red"}`}
        >
          <span>XX</span>
          <span>:</span>
          <span>XX</span>
        </div>
        <div className="grid w-full grid-cols-3">
          <div></div>
          <button
            onClick={() => setTime(!timeOn)}
            className={`flex cursor-pointer items-center justify-center rounded-xl px-20 py-3 text-2xl text-white shadow ${!timeOn ? "bg-tisco-red" : "bg-tisco-navy"}`}
          >
            {!timeOn ? <Play /> : <Pause />}
            <span className="pl-4">{!timeOn ? "START" : "STOP"}</span>
          </button>
          <div></div>
        </div>
      </div>
    </article>
  );
};
