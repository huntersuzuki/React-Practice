import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress
        id="question-timer"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </div>
  );
};

export default QuestionTimer;
