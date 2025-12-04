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
    <article className='tisco-tile'>
      <CountDownTimer initSec='4' isRunning={time.on} onTimesUp={handleTimesUp} />
      <button className={time.on ? 'btn-red' : 'btn-green'} onClick={toggleTime}>
        {time.on ? 'Stop' : 'Start'}
      </button>
    </article>
  );
};

export { TimerBoard };
