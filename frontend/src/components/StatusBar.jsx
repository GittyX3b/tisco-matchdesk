import React from "react";
import { Settings } from "lucide-react";

export const StatusBar = () => {
  return (
    <div
      id="statusbar"
      className="bg-tisco-light border-tisco-navy flex w-full items-center justify-between border-b-1 p-5 shadow"
    >
      <div id="statusbar-left" className="flex items-center">
        <img
          id="logo"
          src="./src/assets/icons/Tisco_logo_icon_transparent_xs.webp"
          alt="TiSco Logo"
          className="mr-4 h-24"
        />
      </div>
      <div
        id="statusbar-center"
        className="m-6 grow rounded bg-white p-4 font-[Doto] font-bold shadow"
      >
        state display...
      </div>
      <div id="statusbar-right">
        <Settings
          size={36}
          className="text-tisco-gray hover:text-tisco-navy cursor-pointer"
        />
      </div>
    </div>
  );
};
