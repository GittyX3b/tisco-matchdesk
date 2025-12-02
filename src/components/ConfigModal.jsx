import { useConfig } from '@context';

export const ConfigModal = () => {
  const { config, toggleConfigModal } = useConfig();

  return (
    <aside
      id='config-container'
      className='font-lato absolute z-50 min-h-screen w-full overflow-auto bg-[rgba(0,0,0,0.4)] p-10'
      hidden={!config.settingsVisible}
    >
      <div className='tisco-tile'>
        <div className='flex items-end justify-between'>
          <img
            src='src/assets/icons/Tisco_logo_icon_transparent_xs.webp'
            alt='TiSco-Logo'
            onClick={() => console.log('neu auf click')}
          />
          <h1>TiSco - Zeitmanagement für Sportveranstaltungen</h1>
        </div>
        <div className='flex w-full justify-between gap-5'>
          <button className='button text-tisco-red hover:bg-tisco-red w-50 px-5 py-2 hover:text-white hover:shadow'>
            Löschen
          </button>
          <button
            className='button bg-tisco-green w-100 cursor-pointer rounded px-5 py-2 shadow'
            onClick={() => toggleConfigModal()}
          >
            Schliessen
          </button>
        </div>
      </div>
    </aside>
  );
};
