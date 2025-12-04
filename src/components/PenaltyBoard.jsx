import { useCallback } from 'react';

import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const PenaltyBoard = () => {
  const { time, _toggleTime } = useTime();

  const handleTimesUp = useCallback(() => {
    console.log('PenaltyTime is up');
  }, []);

  return (
    <article className='tisco-tile'>
      PenaltyBoard
      <CountDownTimer initSec='20' isRunning={time.on} onTimesUp={handleTimesUp} />
    </article>
  );
};

export { PenaltyBoard };
