import { useEffect, useState } from 'react';

const CountDownTimer = ({ initSec, isRunning }) => {
  const [timerSec, setTimerSec] = useState(Number(initSec));
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    if (!isRunning || timesUp) return;

    const interval = setInterval(() => {
      setTimerSec((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>CountDownTimer: {timerSec}</div>;
};

export { CountDownTimer };
