import React from "react";
import "./components.css";

function BtnComponent(props) {
  return (
    // Not started = 0
    // started = 1
    // stopped = 2
    <div>
      {props.status === 0 ? (
        <button className="btn" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="btn" onClick={props.pause}>
            Pause
          </button>
          <button className="btn" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button className="btn" onClick={props.resume}>
            Resume
          </button>
          <button className="btn" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
