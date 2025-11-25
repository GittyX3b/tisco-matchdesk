import { Play } from "lucide-react";

export const TimerBoard = () => {
  return (
    <article>
      <div
        id="timer-container"
        className="flex w-full flex-col items-center justify-start p-5"
      >
        <h2>Spielzeit</h2>
        <div
          id="match-time"
          className="flex w-4/6 justify-evenly p-5 font-[Lato-Black] text-[6rem]"
        >
          <span>XX</span>
          <span>:</span>
          <span>XX</span>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-tisco-green flex cursor-pointer items-center justify-center rounded-xl px-20 py-3 text-2xl text-white shadow">
            <Play />
            <span className="pl-4">START</span>
          </button>
        </div>
      </div>
    </article>
  );
};
