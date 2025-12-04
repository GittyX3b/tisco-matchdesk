import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const TimerBoard = () => {
  const { time, toggleTime } = useTime();

  return (
    <article className='tisco-tile'>
      <CountDownTimer initSec='10' isRunning={time.on} />
      <button className={time.on ? 'btn-red' : 'btn-green'} onClick={toggleTime}>
        {time.on ? 'Stop' : 'Start'}
      </button>
    </article>
  );
};

export { TimerBoard };
