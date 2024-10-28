import React from "react";
import { useState, useEffect } from "react";
const ProgressBar = ({TIMER}) => {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
};

export default ProgressBar;
