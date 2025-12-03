import { createContext, useState } from 'react';

const TimeCtx = createContext(null);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState({
    sanity: 'time data - ok',
    on: false,
  });

  const toggleTime = () => setTime((prev) => ({ ...prev, on: !prev.on }));

  // const setEins = (eins) => setTime((c) => ({ ...c, eins }));

  // const setDrei = (drei) =>
  //   setTime((c) => ({
  //     ...c,
  //     zwei: { ...c.zwei, drei },
  //   }));

  return <TimeCtx value={{ time, toggleTime }}>{children}</TimeCtx>;
};

export { TimeCtx, TimeProvider };
