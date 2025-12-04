import { ScoreCounter } from './elements/ScoreCounter';

const ScoreBoard = () => {
  return (
    <article className={`tisco-tile grid grow grid-cols-[2fr_1fr_2fr]`}>
      <ScoreCounter className='col-start-1' />
      <span className='tile-heading col-start-2 m-auto'>Spielstand</span>
      <ScoreCounter className='col-start-3' />
    </article>
  );
};

export { ScoreBoard };
