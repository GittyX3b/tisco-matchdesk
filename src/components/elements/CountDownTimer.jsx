import { useEffect, useState } from 'react';

const CountDownTimer = ({ initSec, isRunning, onTimesUp, resetSign, className }) => {
  const [timerSec, setTimerSec] = useState(Number(initSec));

  // counting down the seconds until 0 or !isRunning
  useEffect(() => {
    if (!isRunning) return;
    if (timerSec === 0 && isRunning) onTimesUp();

    const interval = setInterval(() => {
      setTimerSec((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerSec, isRunning, onTimesUp]);

  // reinitialize if initSec changes
  useEffect(() => {
    setTimerSec(Number(initSec));
  }, [initSec, resetSign]);

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
