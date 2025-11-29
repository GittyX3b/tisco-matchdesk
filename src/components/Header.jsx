import { Settings } from "lucide-react";

export const Header = ({ setConfigVisibility }) => {
  return (
    <header
      id="statusbar"
      className="bg-tisco-light border-tisco-navy fixed w-full border-b-3 p-5 shadow"
    >
      <div
        id="centering-container"
        className="m-auto flex max-w-[1600px] items-center justify-between xl:justify-around"
      >
        <div id="statusbar-left" className="flex items-center">
          <img
            id="logo"
            src="./src/assets/icons/Tisco_logo_icon_transparent_xs.webp"
            alt="TiSco Logo"
            className="mr-4 aspect-auto px-5"
          />
        </div>
        <div
          id="statusbar-center"
          className="m-6 w-full max-w-200 rounded bg-white p-4 font-[Doto] font-bold shadow"
        >
          state display...
        </div>
        <div id="statusbar-right">
          <Settings
            size={36}
            className="hover:text-tisco-gray text-tisco-navy cursor-pointer"
            onClick={() => setConfigVisibility((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};
