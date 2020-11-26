import "./css/App.css";
import React, { useState } from "react";
import Display from "./Components/Display";
import Button from "./Components/Button";

const App = () => {
  const [time, setTime] = useState({
    microseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0
  });
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  let updateMicroseconds = time.microseconds,
    updateSeconds = time.seconds,
    updateMinutes = time.minutes,
    updateHours = time.hours;

  const startClock = () => {
    run();
    setStatus(1);
    setInter(setInterval(run, 10));
  };

  const run = () => {
    if (updateMinutes === 60) {
      updateHours++;
      updateMinutes = 0;
    }
    if (updateSeconds === 60) {
      updateMinutes++;
      updateSeconds = 0;
    }
    if (updateMicroseconds === 100) {
      updateSeconds++;
      updateMicroseconds = 0;
    }
    updateMicroseconds++;
    return setTime({
      microseconds: updateMicroseconds,
      seconds: updateSeconds,
      minutes: updateMinutes,
      hours: updateHours
    });
  };

  const pauseClock = () => {
    clearInterval(inter);
    setStatus(2);
  };

  const resetClock = () => {
    clearInterval(inter);
    setStatus(0);
    setTime({ microseconds: 0, seconds: 0, minutes: 0, hours: 0 });
  };

  const resumeClock = () => startClock();

  return (
    <div className="App">
      Stopwatch app
      <Display time={time} />
      <Button
        status={status}
        resume={resumeClock}
        reset={resetClock}
        pause={pauseClock}
        start={startClock}
      />
    </div>
  );
};

export default App;
