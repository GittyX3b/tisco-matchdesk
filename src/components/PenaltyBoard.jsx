import { Plus } from 'lucide-react';
import { useState } from 'react';

import { Penalty } from '@elements/Penalty';

import { useConfig } from '@context';

const PenaltyBoard = () => {
  const { config } = useConfig();

  const [btnActive, setBtnActive] = useState({
    home: false,
    away: false,
    green: false,
    yellow: false,
    red: false,
  });

  const [PenaltyCard, setPenaltyCard] = useState({
    team: '',
    playerNumber: '',
    color: 'green' | 'yellow' | 'red',
    penaltyMinutes: '',
  });
  const [penalties, setPenalties] = useState([]);

  const handleTeamClick = (teamname, buttonname) => {
    buttonname === 'home'
      ? setBtnActive((p) => ({ ...p, home: true, away: false }))
      : setBtnActive((p) => ({ ...p, home: false, away: true }));
    setPenaltyCard((p) => ({ ...p, team: teamname }));
  };

  const handleCardClick = (cardcolor) => {
    switch (cardcolor) {
      case 'green':
        setBtnActive((p) => ({ ...p, green: true, yellow: false, red: false }));
        setPenaltyCard((p) => ({ ...p, color: cardcolor, penaltyMinutes: 1 }));
        break;
      case 'yellow':
        setBtnActive((p) => ({ ...p, green: false, yellow: true, red: false }));
        setPenaltyCard((p) => ({ ...p, color: cardcolor, penaltyMinutes: 2 }));
        break;
      default:
        setBtnActive((p) => ({ ...p, green: false, yellow: false, red: true }));
        setPenaltyCard((p) => ({
          ...p,
          color: cardcolor,
          penaltyMinutes: 'SPIELENDE',
        }));
        break;
    }
  };

  const createPenalty = (penaltyObj) => {
    setPenalties((prev) =>
      [...prev, { ...penaltyObj, id: Date.now() }].sort((a, b) => {
        if (a.penaltyMinutes === 'SPIELENDE') return 1;
        if (b.penaltyMinutes === 'SPIELENDE') return -1;
        return a.penaltyMinutes - b.penaltyMinutes;
      }),
    );
    setBtnActive((p) => ({
      ...p,
      home: false,
      away: false,
      green: false,
      yellow: false,
      red: false,
    }));
    setPenaltyCard((p) => ({ ...p, team: '', playerNumber: '', color: '', penaltyMinutes: '' }));
  };

  return (
    <article className='tisco-tile tex-tisco-navy grow'>
      <span className='tile-heading'>Strafzeiten</span>
      <form className='mb-5 grid grid-cols-6 gap-3 pt-5' method='dialog'>
        <button
          className={`btn font-lato-bold col-span-3 col-start-1 text-lg ${btnActive.home && 'btn-white outline-tisco-navy outline-2'}`}
          onClick={() => handleTeamClick(config.teamHomeName || 'HEIM', 'home')}
          type='button'
        >
          {config.teamHomeName || 'HEIM'}
        </button>
        <button
          className={`btn font-lato-bold col-span-3 col-start-4 text-lg ${btnActive.away && 'btn-white outline-tisco-navy outline-2'}`}
          onClick={() => handleTeamClick(config.teamAwayName || 'AUSWÄRTS', 'away')}
          team='away'
          type='button'
        >
          {config.teamAwayName || 'AUSWÄRTS'}
        </button>
        <button
          type='button'
          className={`btn col-span-2 col-start-1 text-lg ${btnActive.green && 'btn-green'}`}
          onClick={() => handleCardClick('green')}
        >
          GRÜN
        </button>
        <button
          type='button'
          className={`btn col-span-2 col-start-3 text-lg ${btnActive.yellow && 'btn-yellow'}`}
          onClick={() => handleCardClick('yellow')}
        >
          GELB
        </button>
        <button
          type='button'
          className={`btn col-span-2 col-start-5 text-lg ${btnActive.red && 'btn-red'}`}
          onClick={() => handleCardClick('red')}
        >
          ROT
        </button>

        <div className='col-span-6 flex justify-between gap-3'>
          <div className='input-group bg-tisco-light grid rounded p-4'>
            <label htmlFor='penaltyPlayerNumber'>Strafzeit:</label>
            <input
              id='penaltyPlayerNumber'
              name='penaltyPlayerNumber'
              type={btnActive.red ? 'text' : 'number'}
              min={0}
              step={1}
              value={PenaltyCard.penaltyMinutes}
              onChange={(e) =>
                setPenaltyCard((p) => ({ ...p, penaltyMinutes: parseInt(e.target.value) || 0 }))
              }
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
              value={PenaltyCard.playerNumber}
              onChange={(e) =>
                setPenaltyCard((p) => ({ ...p, playerNumber: parseInt(e.target.value) || 0 }))
              }
              placeholder='z.B. 8'
              className='border-tisco-navy h-15 w-52 rounded border text-center text-4xl placeholder:text-center placeholder:text-xl'
            ></input>
          </div>
        </div>
        <button
          type='button'
          className={`btn font-lato btn-blue col-span-6 col-start-1 text-lg ${!((btnActive.home || btnActive.away) && (btnActive.green || btnActive.yellow || btnActive.red)) && 'hidden'}`}
          onClick={() => createPenalty(PenaltyCard)}
        >
          <Plus /> hinzufügen
        </button>
      </form>
      <ul id='penalties'>
        {penalties.map((penalty) => (
          <li key={penalty.id}>
            <Penalty card={penalty} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export { PenaltyBoard };
