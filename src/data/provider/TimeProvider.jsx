import { createContext, useState } from "react";

const TimeCtx = createContext(null);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState({
    sanity: "time data - ok",
  });

  const setEins = (eins) => setTime((c) => ({ ...c, eins }));

  const setDrei = (drei) =>
    setTime((c) => ({
      ...c,
      zwei: { ...c.zwei, drei },
    }));

  return <TimeCtx value={{ time, setEins, setDrei }}>{children}</TimeCtx>;
};

export { TimeCtx, TimeProvider };
