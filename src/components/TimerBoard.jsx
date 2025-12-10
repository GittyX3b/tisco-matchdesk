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
  const pna = config.periodNames[ppm];
  const pn = config.periodNow;

  const periodDescription = pn + '.' + pna;

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
      <div className='col-start-3 flex max-h-[22rem] flex-col justify-between'>
        <span className='tile-heading flex justify-center'>Spielzeit</span>

        <span className='flex justify-center text-lg lg:text-2xl'>{periodDescription}</span>
        <CountDownTimer
          initSec={config.minutesPerPeriod * 60}
          isRunning={time.on}
          className={`font-lato-black flex h-min w-full justify-evenly text-[6rem] leading-tight lg:text-[10rem] ${!time.on ? 'text-tisco-red' : ''}`}
          onTimesUp={handleTimesUp}
          resetSign={resetSignal}
        />
        {!time.over ? (
          <button
            className={`btn btn-xl w-full ${time.on ? 'btn-red' : 'btn-green'}`}
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
      </div>
    </article>
  );
};

export { TimerBoard };
