import React, { useState, useEffect } from 'react';

export default function Tiempo() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1;
        const minutes = prevTime.minutes + Math.floor(seconds / 60);
        const hours = prevTime.hours + Math.floor(minutes / 60);
        return {
          hours: hours % 24,
          minutes: minutes % 60,
          seconds: seconds % 60,
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h2>
    </div>
  );
}
