import { useEffect, useState } from 'react';

const CountDownTimer = ({ initSec, isRunning, onTimesUp, className }) => {
  const [timerSec, setTimerSec] = useState(Number(initSec));

  const timesUp = timerSec === 0;

  // counting down the seconds until 0 or !isRunning
  useEffect(() => {
    if (!isRunning) return;
    if (timesUp) onTimesUp();

    const interval = setInterval(() => {
      setTimerSec((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timesUp, isRunning, onTimesUp]);

  // reinitialize if initSec changes
  useEffect(() => {
    setTimerSec(Number(initSec));
  }, [initSec]);

  return (
    <div className={className}>
      <span>
        {Math.floor(timerSec / 60).toString().length < 2
          ? '0' + Math.floor(timerSec / 60).toString()
          : Math.floor(timerSec / 60).toString()}
      </span>
      <span>:</span>
      <span>
        {(timerSec % 60).toString().length < 2
          ? '0' + (timerSec % 60).toString()
          : (timerSec % 60).toString()}
      </span>
    </div>
  );
};

export { CountDownTimer };
