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
    penaltyMinutes: 0,
  });
  const [penalties, setPenalties] = useState([]);

  const handleTeamClick = (teamname, buttonname) => {
    buttonname === 'home'
      ? setBtnActive((p) => ({ ...p, home: true, away: false }))
      : setBtnActive((p) => ({ ...p, home: false, away: true }));
    setPenaltyCard((p) => ({ ...p, team: teamname }));
    setPenaltyCard((prev) => ({ ...prev, playerNumber: '' }));
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

  const removePenalty = (penaltyId) => {
    console.log(penaltyId);
    setPenalties((prev) => prev.filter((penalty) => penalty.id !== penaltyId));
  };

  const createPlayerButtons = (numbersArray) => {
    return numbersArray.map((nr) => (
      <button
        className='btn'
        key={nr}
        onClick={() => setPenaltyCard((prev) => ({ ...prev, playerNumber: nr }))}
      >
        {nr}
      </button>
    ));
  };

  const createMinutesButtons = (numbersArray) => {
    return numbersArray.map((val) => (
      <button
        className='btn'
        key={val}
        onClick={() => setPenaltyCard((prev) => ({ ...prev, penaltyMinutes: val }))}
      >
        {val}
      </button>
    ));
  };

  return (
    <article className='tisco-tile tex-tisco-navy grow'>
      <span className='tile-heading flex justify-center'>Strafzeiten</span>
      <form className='mb-5 grid grid-cols-6 gap-3 pt-5' method='dialog'>
        <button
          className={`btn font-lato-bold text-md col-span-3 col-start-1 h-full p-4 lg:text-lg ${btnActive.home && 'btn-white outline-tisco-navy outline-2'}`}
          onClick={() => handleTeamClick(config.teamHomeName || 'HEIM', 'home')}
          type='button'
        >
          {config.teamHomeName || 'HEIM'}
        </button>
        <button
          className={`btn font-lato-bold text-md col-span-3 col-start-4 h-full p-4 lg:text-lg ${btnActive.away && 'btn-white outline-tisco-navy outline-2'}`}
          onClick={() => handleTeamClick(config.teamAwayName || 'AUSWÄRTS', 'away')}
          team='away'
          type='button'
        >
          {config.teamAwayName || 'AUSWÄRTS'}
        </button>
        <button
          type='button'
          className={`btn text-md col-span-2 col-start-1 lg:text-lg ${btnActive.green && 'btn-green'}`}
          onClick={() => handleCardClick('green')}
        >
          GRÜN
        </button>
        <button
          type='button'
          className={`btn text-md col-span-2 col-start-3 lg:text-lg ${btnActive.yellow && 'btn-yellow'}`}
          onClick={() => handleCardClick('yellow')}
        >
          GELB
        </button>
        <button
          type='button'
          className={`btn text-md col-span-2 col-start-5 lg:text-lg ${btnActive.red && 'btn-red'}`}
          onClick={() => handleCardClick('red')}
        >
          ROT
        </button>

        <div className='wrap col-span-6 grid grid-cols-[1fr_1fr] gap-3'>
          {(btnActive.green || btnActive.yellow || btnActive.red) && (
            <div className='input-group bg-tisco-light col-start-1 grow rounded p-4'>
              <label htmlFor='penaltyMinutes'>Strafzeit:</label>
              <input
                id='penaltyMinutes'
                name='penaltyMinutes'
                type={btnActive.red ? 'text' : 'number'}
                min={0}
                step={1}
                value={PenaltyCard.penaltyMinutes}
                onChange={(e) =>
                  setPenaltyCard((p) => ({ ...p, penaltyMinutes: parseInt(e.target.value) || 0 }))
                }
                placeholder='in Minuten, z.B. 2'
                className='border-tisco-navy w-full rounded border text-center placeholder:text-center'
              ></input>
              <div className='grid w-full grid-cols-4 gap-3 pt-3'>
                {btnActive.green && createMinutesButtons([1, 2, 3, 4])}
                {btnActive.yellow && createMinutesButtons([2, 3, 5, 10])}
              </div>
            </div>
          )}
          {(btnActive.home || btnActive.away) && (
            <div className='input-group bg-tisco-light col-start-2 grow rounded p-4'>
              <label htmlFor='penaltyPlayerNumber'>Rückennummer:</label>
              <input
                id='penaltyPlayerNumber'
                name='penaltyPlayerNumber'
                type='number'
                min={0}
                step={1}
                value={PenaltyCard.playerNumber}
                onChange={(e) =>
                  setPenaltyCard((p) => ({
                    ...p,
                    playerNumber: parseInt(e.target.value) || null,
                  }))
                }
                placeholder='z.B. 8'
                className='border-tisco-navy w-full rounded border text-center placeholder:text-center'
              ></input>
              <div className='grid w-full grid-cols-4 gap-3 pt-3'>
                {btnActive.home &&
                  config.teamHomeNumbers.length > 0 &&
                  createPlayerButtons(config.teamHomeNumbers)}
                {btnActive.away &&
                  config.teamAwayNumbers.length > 0 &&
                  createPlayerButtons(config.teamAwayNumbers)}
              </div>
            </div>
          )}
        </div>
        <button
          type='button'
          className={`btn font-lato btn-blue col-span-6 col-start-1 mb-15 text-lg ${!((btnActive.home || btnActive.away) && (btnActive.green || btnActive.yellow || btnActive.red)) && 'hidden'}`}
          onClick={() => createPenalty(PenaltyCard)}
        >
          <Plus /> hinzufügen
        </button>
      </form>
      <ul id='penalties'>
        {penalties.map((penalty) => (
          <li key={penalty.id}>
            <Penalty card={penalty} removePenalty={removePenalty} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export { PenaltyBoard };
