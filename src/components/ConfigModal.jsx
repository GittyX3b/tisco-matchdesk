import { initialData } from "@data/config";

export const ConfigModal = ({ isVisible, setVisibility, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

  const handleReset = () => setData(initialData);

  return (
    <aside
      id="config-container"
      className="absolute z-50 min-h-screen w-full overflow-auto bg-[rgba(0,0,0,0.4)] p-10"
      hidden={!isVisible}
    >
      <div className="m-auto w-full max-w-[1600px] rounded-xl bg-white p-10">
        <div className="flex items-end justify-between">
          <img
            src="src/assets/icons/Tisco_logo_icon_transparent_xs.webp"
            alt="TiSco-Logo"
          />
          <h1>TiSco - Zeitmanagement für Sportveranstaltungen</h1>
        </div>
        <h2>Einstellungen</h2>
        <form className="bg-tisco-light mb-5 flex flex-wrap gap-5 rounded-xl p-5">
          <fieldset className="grow rounded-xl bg-white p-5">
            <summary className="list-none pb-3 font-[Lato-bold] text-lg">
              Heim-Team
            </summary>
            <label
              htmlFor="team_home_name"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Name:</span>
              <input
                type="text"
                id="team_home_name"
                name="team_home_name"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                value={data.team_home_name || ""}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Tippe den Namen des Heim-Teams ein...
              </span>
            </label>
            <label
              htmlFor="team_home_players"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Rückennummern (optional):</span>
              <input
                type="text"
                id="team_home_players"
                name="team_home_players"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                value={data.team_home_players.join(", ") || ""}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Tippe die Rückennummer kommagetrennt ein, z.B. 2,4,7,12 usw. ...
              </span>
            </label>
          </fieldset>
          <fieldset className="grow rounded-xl bg-white p-5">
            <summary className="list-none pb-3 font-[Lato-bold] text-lg">
              Gast-Team
            </summary>
            <label
              htmlFor="team-away-name"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Name:</span>
              <input
                type="text"
                id="team_away_name"
                name="team_away_name"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                value={data.team_away_name || ""}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Tippe den Namen des Gast-Teams ein...
              </span>
            </label>
            <label
              htmlFor="team_away_players"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Rückennummern (optional):</span>
              <input
                type="text"
                id="team_away_players"
                name="team_away_players"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                value={data.team_away_players.join(", ") || ""}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Tippe die Rückennummer kommagetrennt ein, z.B. 2,4,7,12 usw. ...
              </span>
            </label>
          </fieldset>
          <fieldset className="grow rounded-xl bg-white p-5">
            <summary className="list-none pb-3 font-[Lato-bold] text-lg">
              Spielregeln
            </summary>
            <label
              htmlFor="match_period_number"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Abschnitte:</span>
              <input
                type="number"
                id="match_period_number"
                name="match_period_number"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                value={data.match_period_number}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Aus wievielen Abschnitten besteht ein komplettes Match? (z.B. 2
                Halbzeiten, 3 Drittel usw. ...)
              </span>
            </label>
            <label
              htmlFor="match_period_duration"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Dauer eines Abschnitts:</span>
              <input
                type="text"
                id="match_period_duration"
                name="match_period_duration"
                className="border-tisco-gray rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                placeholder="Tippe die Rückennummer kommagetrennt ein, z.B. 2,4,7,12 usw. ..."
                value={data.match_period_duration}
                onChange={handleChange}
              />
              <span className="text-tisco-gray text-xs">
                Wieviele Minuten dauert 1 Spielabschnitt?
              </span>
            </label>
          </fieldset>
        </form>
        <div className="flex w-full justify-between gap-5">
          <button
            onClick={handleReset}
            className="button text-tisco-red hover:bg-tisco-red w-50 px-5 py-2 hover:text-white hover:shadow"
          >
            Löschen
          </button>
          <button
            className="button bg-tisco-green w-100 cursor-pointer rounded px-5 py-2 shadow"
            onClick={() => setVisibility(false)}
          >
            Schliessen
          </button>
        </div>
      </div>
    </aside>
  );
};
