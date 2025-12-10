import { useEffect, useRef, useState } from 'react';

const CountDownTimer = ({ initSec, isRunning, onTimesUp, resetSign, className }) => {
  const [timerSec, setTimerSec] = useState(Number(initSec));

  const endTimeRef = useRef(null);
  const rafRef = useRef(null);
  const finishedRef = useRef(false);

  // Reset / reinitialize
  useEffect(() => {
    setTimerSec(Number(initSec));
    endTimeRef.current = null;
    finishedRef.current = false;
  }, [initSec, resetSign]);

  // Handle run / pause
  useEffect(() => {
    // PAUSE
    if (!isRunning) {
      cancelAnimationFrame(rafRef.current);

      if (endTimeRef.current) {
        const remainingMs = endTimeRef.current - Date.now();
        setTimerSec(Math.max(0, Math.ceil(remainingMs / 1000)));
        endTimeRef.current = null; // clear anchor
      }
      return;
    }

    // START / RESUME
    if (!endTimeRef.current && !finishedRef.current) {
      endTimeRef.current = Date.now() + timerSec * 1000;
    }

    const tick = () => {
      const remainingMs = endTimeRef.current - Date.now();
      const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));

      setTimerSec(remainingSec);

      if (remainingSec === 0) {
        if (!finishedRef.current) {
          finishedRef.current = true;
          onTimesUp?.();
        }
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [isRunning, onTimesUp, timerSec]);

  const minutes = String(Math.floor(timerSec / 60)).padStart(2, '0');
  const seconds = String(timerSec % 60).padStart(2, '0');

  return (
    <div className={className}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export { CountDownTimer };
