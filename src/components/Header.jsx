import { Settings } from 'lucide-react';

import { useConfig } from '@context';

import tisco_logo from '@assets/icons/Tisco_logo_icon_transparent_xs.webp';

export const Header = () => {
  const { toggleConfigModal } = useConfig();

  return (
    <header className='bg-tisco-gray border-tisco-navy fixed w-full border-b-3 p-5 shadow-lg'>
      <div
        id='centering-container'
        className='tisco-maxwidth m-auto flex items-center justify-between xl:justify-around'
      >
        <div id='statusbar-left' className='flex items-center'>
          <img id='logo' src={`${tisco_logo}`} alt='TiSco Logo' className='mr-4 aspect-auto px-5' />
        </div>
        <div
          id='statusbar-center'
          className='font-doto m-6 w-full max-w-200 rounded bg-white p-4 font-bold shadow'
        >
          state display...
        </div>
        <div id='statusbar-right'>
          <button className='cursor-pointer rounded-[50%] bg-white p-2 text-zinc-400 hover:text-zinc-400 active:text-zinc-500'>
            <Settings
              size={36}
              className='transition-transform duration-300 ease-in-out hover:animate-spin'
              onClick={() => toggleConfigModal()}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
