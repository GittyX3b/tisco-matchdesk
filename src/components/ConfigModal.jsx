import { useConfig } from '@context';

export const ConfigModal = () => {
  const { config, toggleConfigModal } = useConfig();

  return (
    <aside
      className='absolute z-50 flex min-h-screen w-full flex-col items-center gap-4 overflow-auto bg-linear-to-b from-[rgba(167,177,188,0.8)] to-[rgba(0,0,0,0.7)] p-10'
      hidden={!config.settingsVisible}
    >
      <div className='tisco-maxwidth flex w-full grow flex-col gap-5'>
        <div className='tisco-tile flex w-full items-center justify-between'>
          <img
            src='src/assets/icons/Tisco_logo_icon_transparent_xs.webp'
            alt='TiSco-Logo'
            onClick={() => console.log('neu auf click')}
          />
          <h1>TiSco - Zeitmanagement für Sportveranstaltungen</h1>
        </div>

        <form className='grid w-full grow grid-cols-3 gap-4'>
          {/* TEAM HOME */}
          <fieldset className='tisco-tile flex flex-col gap-5'>
            <span className='tile-heading'>HEIM</span>
            <div className='input-group'>
              <label htmlFor='team-home-name'>Name:</label>
              <input
                type='text'
                id='team-home-name'
                name='team-home-name'
                className='input mt-1 w-full text-xl'
              />
            </div>
          </fieldset>
          {/* SETTINGS */}
          <fieldset className='tisco-tile p-b-10 flex flex-col gap-5'>
            <span className='tile-heading'>EINSTELLUNGEN</span>
          </fieldset>
          {/* TEAM AWAY */}
          <fieldset className='tisco-tile p-b-10 flex flex-col gap-5'>
            <span className='tile-heading'>GAST</span>
            <div className='input-group'>
              <label htmlFor='team-away-name'>Name:</label>
              <input
                type='text'
                id='team-away-name'
                name='team-away-name'
                className='input mt-1 w-full text-xl'
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
