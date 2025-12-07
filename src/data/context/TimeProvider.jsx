import { createContext, useState } from 'react';

const TimeCtx = createContext(null);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState({
    sanity: 'time data - ok',
    on: false,
    over: false,
  });

  const toggleTime = () => setTime((prev) => ({ ...prev, on: !prev.on }));
  const stopTime = () => setTime((prev) => ({ ...prev, on: false }));
  const checkIfOver = (periodNow, periodsPerMatch) =>
    periodNow === periodsPerMatch && setTime((prev) => ({ ...prev, over: true }));

  return <TimeCtx value={{ time, stopTime, toggleTime, checkIfOver }}>{children}</TimeCtx>;
};

export { TimeCtx, TimeProvider };
