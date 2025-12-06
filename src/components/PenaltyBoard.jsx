import { Plus } from 'lucide-react';
import { useCallback, useState } from 'react';

import { useConfig, useTime } from '@context';
import { CountDownTimer } from '@elements';

const PenaltyBoard = () => {
  const { time, _toggleTime } = useTime();
  const { config } = useConfig();

  const [btnActive, setBtnActive] = useState({
    home: false,
    away: false,
    green: false,
    yellow: false,
    red: false,
    send: false,
  });

  const [card, setCard] = useState({
    team: '',
    playerNumber: 0,
    color: '',
    penaltyInSeconds: 0,
  });

  const handleTeamClick = (choice) => {
    //TODO: color buttons on click, create card object, add penalttytime
  };

  return (
    <article className='tisco-tile tex-tisco-navy grow'>
      <span className='tile-heading'>Strafzeiten</span>
      <form className='mb-5 grid grid-cols-6 gap-3 pt-5' method='dialog'>
        <button
          className={`btn font-lato-bold btn- col-span-3 col-start-1 text-lg ${btnActive.home && 'btn-blue'}`}
          onClick={handleTeamClick(config.teamHomeName || 'HEIM')}
          type='button'
        >
          {config.teamHomeName || 'HEIM'}
        </button>
        <button
          className='btn font-lato-bold col-span-3 col-start-4 text-lg'
          onClick={handleTeamClick(config.teamAwayName || 'AUSWÄRTS')}
          team='away'
          type='button'
        >
          {config.teamAwayName || 'AUSWÄRTS'}
        </button>
        <button type='button' className='btn col-span-2 col-start-1 text-lg'>
          GRÜN
        </button>
        <button type='button' className='btn col-span-2 col-start-3 text-lg'>
          GELB
        </button>
        <button type='button' className='btn col-span-2 col-start-5 text-lg'>
          ROT
        </button>

        <div className='col-span-6 flex justify-between gap-3'>
          <div className='input-group bg-tisco-light grid rounded p-4'>
            <label htmlFor='penaltyPlayerNumber'>Strafzeit:</label>
            <input
              id='penaltyPlayerNumber'
              name='penaltyPlayerNumber'
              type='number'
              min={0}
              step={1}
              placeholder='in Minuten, z.B. 2'
              className='border-tisco-navy h-15 w-52 rounded border text-center text-4xl placeholder:text-center placeholder:text-xl'
            ></input>
          </div>

          <div className='input-group bg-tisco-light grid rounded p-4'>
            <label htmlFor='penaltyPlayerNumber'>Rückennummer:</label>
            <input
              id='penaltyPlayerNumber'
              name='penaltyPlayerNumber'
              type='number'
              min={0}
              step={1}
              placeholder='z.B. 8'
              className='border-tisco-navy h-15 w-52 rounded border text-center text-4xl placeholder:text-center placeholder:text-xl'
            ></input>
          </div>
        </div>
        <button type='button' className='btn font-lato-black col-span-6 col-start-1 text-lg'>
          <Plus />
        </button>
      </form>
    </article>
  );
};

export { PenaltyBoard };
