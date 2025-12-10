import { useConfig } from '@context';

import { ScoreCounter } from './elements/ScoreCounter';

const ScoreBoard = () => {
  const { config } = useConfig();

  return (
    <article className={`tisco-tile grid grid-cols-[1fr_1fr]`}>
      <span className='tile-heading col-span-2 text-center'>Spielstand</span>
      <ScoreCounter teamName={config.teamHomeName || 'HEIM'} className='col-start-1' />
      <ScoreCounter teamName={config.teamAwayName || 'AUSWÄRTS'} className='col-start-2' />
    </article>
  );
};

export { ScoreBoard };
