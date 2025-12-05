import { useConfig } from '@context';

export const ConfigModal = () => {
  const { config, toggleConfigModal, setConfig } = useConfig();

  const onChangeHandler = (e) => {
    if (e.target.name.endsWith('Name')) {
      setConfig((prev) => ({
        ...prev,
        [e.target.name]: e.target.value.toString(),
      }));
    } else if (e.target.name.endsWith('Numbers')) {
      setConfig((prev) => ({
        ...prev,
        [e.target.name]: [
          ...new Set(
            e.target.value
              .trim()
              .split(/[ ,.;<>]+/) // split by space, comma, dot, semicolon, <, or multiple together
              .map(Number) // convert each string to number
              .filter((n) => !isNaN(n)), // remove any NaN
          ),
        ],
      }));
    } else {
      setConfig((prev) => ({
        ...prev,
        [e.target.name]: Number(e.target.value),
      }));
    }
  };

  return (
    <aside
      className='absolute z-50 flex min-h-screen w-full flex-col items-center gap-4 overflow-auto bg-linear-to-b from-[rgba(167,177,188,0.8)] to-[rgba(0,0,0,0.7)] p-10'
      hidden={!config.settingsVisible}
    >
      <div className='tisco-maxwidth flex w-full flex-col gap-4'>
        <div className='tisco-tile flex w-full items-center justify-between'>
          <img
            src='src/assets/icons/Tisco_logo_icon_transparent_xs.webp'
            alt='TiSco-Logo'
            onClick={() => console.log('neu auf click')}
          />
          <h1>TiSco - Zeitmanagement für Sportveranstaltungen</h1>
        </div>

        <form className='grid w-full grid-cols-3 gap-4'>
          {/* ============ TEAM HOME ======================== */}
          {/* =============== Name ========================== */}
          <fieldset className='tisco-tile flex flex-col gap-5'>
            <span className='tile-heading'>HEIM</span>
            <div className='input-group'>
              <label htmlFor='teamHomeName'>Name:</label>
              <input
                type='text'
                id='teamHomeName'
                name='teamHomeName'
                placeholder='z.B. SV Leverkusen'
                className='input mt-1 w-full text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>

            {/* =============== Spielernummern ============= */}
            <div className='input-group'>
              <label htmlFor='teamHomeNumbers'>Spielernummern:</label>
              <input
                type='text'
                id='teamHomeNumbers'
                name='teamHomeNumbers'
                placeholder='z.B. 1,2,3,5,8,11,14,56'
                className='input mt-1 w-full text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>
          </fieldset>
          {/* ============= SETTINGS ========================= */}
          <fieldset className='tisco-tile p-b-10 flex flex-col gap-5'>
            <span className='tile-heading'>EINSTELLUNGEN</span>
            <div className='grid w-full grid-cols-[1fr_2fr] items-center justify-between gap-4'>
              <label htmlFor='periodsPerMatch'>Anzahl Spielzeiten:</label>
              <input
                id='periodsPerMatch'
                name='periodsPerMatch'
                type='number'
                placeholder='z.B. 2 bei Fussball'
                min={1}
                max={4}
                step={1}
                value={config.periodsPerMatch}
                className='input mt-1 w-full text-center text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>
            <div className='grid w-full grid-cols-[1fr_2fr] items-center justify-between gap-4'>
              <label htmlFor='minutesPerPeriod'>Minuten pro Spielzeit:</label>
              <input
                id='minutesPerPeriod'
                name='minutesPerPeriod'
                type='number'
                placeholder='z.B. 45 bei Fussball'
                min={1}
                step={1}
                value={config.minutesPerPeriod}
                className='input mt-1 w-full text-center text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>
          </fieldset>
          {/* ============= TEAM AWAY ======================= */}
          {/* =============== Name ========================== */}
          <fieldset className='tisco-tile p-b-10 flex flex-col gap-5'>
            <span className='tile-heading'>GAST</span>
            <div className='input-group'>
              <label htmlFor='teamAwayName'>Name:</label>
              <input
                type='text'
                id='teamAwayName'
                name='teamAwayName'
                placeholder='z.B. TSG Hamburg'
                className='input mt-1 w-full text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>
            {/* =============== Spielernummern =============== */}
            <div className='input-group'>
              <label htmlFor='teamAwayNumbers'>Spielernummern:</label>
              <input
                type='text'
                id='teamAwayNumbers'
                name='teamAwayNumbers'
                placeholder='z.B. 1,2,3,5,8,11,14,56'
                className='input mt-1 w-full text-xl placeholder:text-sm'
                onChange={onChangeHandler}
              />
            </div>
          </fieldset>
        </form>
      </div>

      <div className='tisco-tile tisco-maxwidth flex w-full justify-between gap-4'>
        <button className='button text-tisco-red hover:bg-tisco-red w-50 px-5 py-2 hover:text-white hover:shadow'>
          Löschen
        </button>
        <button className='btn btn-green w-100' onClick={() => toggleConfigModal()}>
          Schliessen
        </button>
      </div>
    </aside>
  );
};
