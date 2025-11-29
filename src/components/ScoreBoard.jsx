const ScoreCounter = ({ name, score }) => {
  return (
    <div className="flex w-min flex-col items-center justify-center">
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
        name={data.team_home_name || "Heim"}
        score={data.team_home_score}
      />
      <div
        id="center-container"
        className="flex flex-col items-center justify-evenly"
      >
        <h2>Spielstand</h2>
        <div>
          <span>{data.match_period_active}</span>
          <span>.{data.match_period_names[data.match_period_number]}</span>
        </div>
      </div>
      <ScoreCounter
        name={data.team_away_name || "Gast"}
        score={data.team_away_score}
      />
    </article>
  );
};
