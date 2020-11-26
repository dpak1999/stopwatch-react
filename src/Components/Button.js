import React from "react";

function BtnComponent(props) {
  return (
    // Not started = 0
    // started = 1
    // stopped = 2
    <div>
      {props.status === 0 ? <button onClick={props.start}>Start</button> : ""}

      {props.status === 1 ? (
        <div>
          <button onClick={props.pause}>Stop</button>
          <button onClick={props.reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button onClick={props.resume}>Resume</button>
          <button onClick={props.reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
