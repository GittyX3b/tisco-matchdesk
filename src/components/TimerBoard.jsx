import { Pause, Play } from 'lucide-react';
import { useCallback } from 'react';

import { useConfig } from '@context';
import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const TimerBoard = () => {
  const { config, setGamePending } = useConfig();
  const { time, stopTime, toggleTime } = useTime();

  const ppm = config.periodsPerMatch;
  const pn = config.periodNow;

  const handleTimesUp = useCallback(() => {
    stopTime();
    setGamePending(() => (ppm !== pn ? true : false));
    console.log('MatchTime is up');
  }, [stopTime, setGamePending, ppm, pn]);

  return (
    <article className={`tisco-tile grid grow grid-cols-[1fr_1fr_4fr_1fr_1fr]`}>
      <span className='tile-heading col-start-3 m-auto'>Spielzeit</span>
      <CountDownTimer
        initSec={config.minutesPerPeriod * 60} //TODO: if pending prepare next period
        isRunning={time.on}
        className={`font-lato-black col-start-3 m-auto flex h-min w-full justify-evenly text-[10rem] leading-tight ${!time.on ? 'text-tisco-red' : ''}`}
        onTimesUp={handleTimesUp}
      />
      <button
        className={`btn btn-xl col-start-3 ${time.on ? 'btn-red' : 'btn-green'}`}
        onClick={toggleTime}
      >
        {time.on ? (
          <div className='flex w-full items-center justify-center'>
            <Pause />
            <span className='p-2'>Stop</span>
          </div>
        ) : (
          <span className='flex w-full items-center justify-center'>
            <Play />
            <span className='p-2'>Start</span>
          </span>
        )}
      </button>
    </article>
  );
};

export { TimerBoard };
