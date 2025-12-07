import { X } from 'lucide-react';

import { useTime } from '@context';
import { CountDownTimer } from '@elements';

const Penalty = ({ card }) => {
  const { time } = useTime();

  const deletePenalty = (e) => {
    e.target.remove();
  };

  return (
    <div
      id={card.id}
      className={`btn-${card.color} my-1 flex w-full items-center justify-between rounded p-2 shadow-md`}
    >
      {card.penaltyMinutes !== 'SPIELENDE' ? (
        <CountDownTimer
          initSec={card.penaltyMinutes * 60}
          isRunning={time.on}
          className='text-2xl'
        />
      ) : (
        <div>SPIELENDE</div>
      )}

      <div>
        <span className='font-lato-bold pr-2 text-xl'>{card.playerNumber}</span>
        <span className='text-md'>{card.team}</span>
      </div>
      <button
        className='bg-tisco-light text-tisco-navy cursor-pointer rounded-4xl p-1'
        conClick={() => deletePenalty(card.id)}
      >
        <X />
      </button>
    </div>
  );
};

export { Penalty };
