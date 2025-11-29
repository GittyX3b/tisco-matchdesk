import { createContext, useState } from "react";

const TimeLineCtx = createContext(null);

const TimeLineProvider = ({ children }) => {
  const [timeline, setTimeLine] = useState({
    sanity: "timeline data - ok",
  });

  const setEins = (eins) => setTimeLine((c) => ({ ...c, eins }));

  const setDrei = (drei) =>
    setTimeLine((c) => ({
      ...c,
      zwei: { ...c.zwei, drei },
    }));

  return (
    <TimeLineCtx value={{ timeline, setEins, setDrei }}>{children}</TimeLineCtx>
  );
};

export { TimeLineCtx, TimeLineProvider };
