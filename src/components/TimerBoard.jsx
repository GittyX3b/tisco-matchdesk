import { useTime } from '@context';

const TimerBoard = () => {
  const { time, toggleTime } = useTime();

  return (
    <article className='tisco-tile'>
      <button className={time.on ? 'btn-red' : 'btn-green'} onClick={toggleTime}>
        {time.on ? 'Stop' : 'Start'}
      </button>
    </article>
  );
};

export { TimerBoard };
