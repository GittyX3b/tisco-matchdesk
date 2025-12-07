import { ArrowUpFromDot, Pause, Play } from 'lucide-react';
import { useCallback, useState } from 'react';

import { useConfig } from '@context';
import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const TimerBoard = () => {
  const { config, setConfig, gamePending, setGamePending } = useConfig();
  const { time, stopTime, toggleTime, checkIfOver } = useTime();
  const [resetSignal, setResetSignal] = useState(0);

  const ppm = config.periodsPerMatch;
  const pn = config.periodNow;

  const handleTimesUp = useCallback(() => {
    stopTime();
    setGamePending(() => (ppm !== pn ? true : false));
    checkIfOver(ppm, pn);
  }, [stopTime, setGamePending, ppm, pn, checkIfOver]);

  const startNextPeriod = () => {
    if (config.periodNow < config.periodsPerMatch) {
      setResetSignal((c) => c + 1); // trigger timer reset
      setGamePending(false);
      setTimeout(() => {
        setConfig((prev) => ({ ...prev, periodNow: prev.periodNow + 1 }));
        toggleTime();
      }, 0);
    }
  };

  return (
    <article className={`tisco-tile grid grow grid-cols-[1fr_1fr_4fr_1fr_1fr]`}>
      <span className='tile-heading col-start-3 m-auto'>Spielzeit</span>
      <CountDownTimer
        initSec={config.minutesPerPeriod * 60}
        isRunning={time.on}
        className={`font-lato-black col-start-3 m-auto flex h-min w-full justify-evenly text-[10rem] leading-tight ${!time.on ? 'text-tisco-red' : ''}`}
        onTimesUp={handleTimesUp}
        resetSign={resetSignal}
      />
      {!time.over ? (
        <button
          className={`btn btn-xl col-start-3 ${time.on ? 'btn-red' : 'btn-green'}`}
          onClick={!gamePending ? toggleTime : startNextPeriod}
        >
          {time.on ? (
            <div className='flex w-full items-center justify-center'>
              <Pause />
              <span className='p-2'>Stop</span>
            </div>
          ) : (
            <span className='flex w-full items-center justify-center'>
              {gamePending ? <ArrowUpFromDot /> : <Play />}
              <span className='p-2'>Start</span>
            </span>
          )}
        </button>
      ) : (
        <div className='font-lato-black col-start-3 m-auto pb-3 text-4xl'>SPIELENDE</div>
      )}
    </article>
  );
};

export { TimerBoard };
