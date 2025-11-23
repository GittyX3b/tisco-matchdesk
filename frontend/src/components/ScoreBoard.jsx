const ScoreCounter = ({ name, score }) => {
  return (
    <div className="flex w-min flex-col items-center justify-center text-black">
      <span className="w-min text-center font-[Lato-Black] text-2xl font-bold uppercase">
        {name}
      </span>
      <span className="font-[Lato-Black] text-[6rem]">{score}</span>
    </div>
  );
};

export const ScoreBoard = ({ data }) => {
  return (
    <article id="score-container" className="flex justify-around p-20">
      <ScoreCounter
        name={data.team.home.name || "Heim"}
        score={data.team.home.score}
      />
      <div
        id="center-container"
        className="flex flex-col items-center justify-evenly"
      >
        <h2>Spielstand</h2>
        <div>
          <span>{data.game.period.active}</span>
          <span>.{data.game.period.names[data.game.period.number]}</span>
        </div>
      </div>
      <ScoreCounter
        name={data.team.away.name || "Gast"}
        score={data.team.away.score}
      />
    </article>
  );
};
