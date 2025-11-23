export const ConfigModal = ({ isVisible, setVisibility, data, setData }) => {
  return (
    <aside
      id="config-container"
      className="absolute z-50 min-h-screen w-full bg-[rgba(0,0,0,0.4)] p-10"
      hidden={!isVisible}
    >
      <div className="m-auto w-full max-w-[1600px] rounded-xl bg-white p-10">
        <h1>TiSco - Zeitmanagement für Sportveranstaltungen</h1>
        <h2>Einstellungen</h2>
        <form className="bg-tisco-light mb-5 flex gap-5 rounded-xl p-5">
          <fieldset className="w-1/3 rounded-xl bg-white p-5">
            <summary className="list-none pb-3 font-[Lato-bold] text-lg">
              Heim-Team
            </summary>
            <label
              htmlFor="team-name-home"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Name:</span>
              <input
                type="text"
                id="team-name-home"
                name="team-name-home"
                className="border-tisco-navy rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                placeholder="Tippe den Namen des Heim-Teams ein..."
                value={data.team.home.name || null}
              />
            </label>
            <label
              htmlFor="team-home-players"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Rückennummer (optional):</span>
              <input
                type="text"
                id="team-home-players"
                name="team-home-players"
                className="border-tisco-navy rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                placeholder="Tippe die Rückennummer kommagetrennt ein, z.B. 2,4,7,12 usw. ..."
                value={data.team.home.players.join(", ") || null}
              />
            </label>
          </fieldset>
          <fieldset className="w-1/3 rounded-xl bg-white p-5">
            <summary className="list-none pb-3 font-[Lato-bold] text-lg">
              Gast-Team
            </summary>
            <label
              htmlFor="team-name-away"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Name:</span>
              <input
                type="text"
                id="team-name-away"
                name="team-name-away"
                className="border-tisco-navy rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                placeholder="Tippe den Namen des Gast-Teams ein..."
                value={data.team.home.name || null}
              />
            </label>
            <label
              htmlFor="team-away-players"
              className="flex w-full flex-col gap-1 py-5"
            >
              <span className="font-medium">Rückennummer (optional):</span>
              <input
                type="text"
                id="team-away-players"
                name="team-away-players"
                className="border-tisco-navy rounded-md border bg-white px-2 py-1 placeholder:text-sm"
                placeholder="Tippe die Rückennummer kommagetrennt ein, z.B. 2,4,7,12 usw. ..."
                value={data.team.away.players.join(", ") || null}
              />
            </label>
          </fieldset>
        </form>
        <div className="flex w-full justify-between gap-5">
          <button className="border-tisco-navy text-tisco-red hover:bg-tisco-red w-50 cursor-pointer rounded px-5 py-2 hover:text-white hover:shadow">
            Löschen
          </button>
          <button
            className="bg-tisco-green w-100 cursor-pointer rounded px-5 py-2 shadow"
            onClick={() => setVisibility(false)}
          >
            Schliessen
          </button>
        </div>
      </div>
    </aside>
  );
};
