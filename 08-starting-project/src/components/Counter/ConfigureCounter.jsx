import { useState } from "react";
import React from "react";
import { log } from "../../log";
const ConfigureCounter = ({ onset }) => {
  log("<ConfigureCounter/>");
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setEnteredNumber(0);
    onset(enteredNumber);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default ConfigureCounter;
