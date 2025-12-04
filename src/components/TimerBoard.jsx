import { Pause, Play } from 'lucide-react';
import { useCallback } from 'react';

import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const TimerBoard = () => {
  const { time, stopTime, toggleTime } = useTime();

  const handleTimesUp = useCallback(() => {
    stopTime();
    console.log('MatchTime is up');
  }, [stopTime]);

  return (
    <article className={`tisco-tile grid grow grid-cols-[1fr_1fr_4fr_1fr_1fr]`}>
      <span className='tile-heading col-start-3 m-auto'>Spielzeit</span>
      <CountDownTimer
        initSec='4'
        isRunning={time.on}
        onTimesUp={handleTimesUp}
        className={`font-lato-black col-start-3 m-auto flex h-min w-full justify-evenly text-[10rem] leading-tight ${!time.on ? 'text-tisco-red' : ''}`}
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
