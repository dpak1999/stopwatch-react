import React from "react";
import "./components.css";

const Button = ({ status, start, pause, resume, reset }) => {
  return (
    // Not started = 0
    // started = 1
    // stopped = 2
    <div>
      {status === 0 ? (
        <button className="btn" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div>
          <button className="btn" onClick={pause}>
            Pause
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button className="btn" onClick={resume}>
            Resume
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
