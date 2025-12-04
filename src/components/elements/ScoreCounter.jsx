import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const ScoreCounter = ({ teamName, className }) => {
  const team = teamName ? teamName : 'Osternienburger HC';
  const [score, setScore] = useState(0);

  const scoreUp = () => setScore((prev) => (prev += 1));
  const scoreDwn = () => setScore((prev) => (prev > 0 ? (prev -= 1) : 0));

  return (
    <div className={`score flex w-full flex-col items-center ${className}`}>
      <span className='font-lato-bold py-4 text-center text-3xl text-black'>{team}</span>
      <div className='flex w-full justify-center'>
        <button className='btn btn-ghost z-1 text-3xl' onClick={scoreDwn}>
          <Minus />
        </button>
        <button className='btn btn-ghost z-2 text-3xl' onClick={scoreUp}>
          <Plus />
        </button>
      </div>
      <div className='font-lato-black p-15 pb-20 text-[8rem] leading-0'>{score}</div>
    </div>
  );
};

export { ScoreCounter };
