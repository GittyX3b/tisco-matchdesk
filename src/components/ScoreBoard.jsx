import { useConfig } from '@context';

import { ScoreCounter } from './elements/ScoreCounter';

const ScoreBoard = () => {
  const { config } = useConfig();

  const pN = config.periodNow;
  const pNa = config.periodNames[config.periodsPerMatch];

  const periodDescription = pN + '.' + pNa;

  return (
    <article className={`tisco-tile grid grow grid-cols-[2fr_1fr_2fr]`}>
      <ScoreCounter teamName={config.teamHomeName || 'HEIM'} className='col-start-1' />
      <div className='col-start-2 flex flex-col items-center justify-center'>
        <span className='tile-heading'>Spielstand</span>
        <span className='text-2xl'>{periodDescription}</span>
      </div>
      <ScoreCounter teamName={config.teamAwayName || 'AUSWÄRTS'} className='col-start-3' />
    </article>
  );
};

export { ScoreBoard };
