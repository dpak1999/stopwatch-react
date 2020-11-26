import React from "react";

const Display = (props) => {
  return (
    <div>
      <span>
        {props.time.hours >= 10 ? props.time.hours : "0" + props.time.hours}
      </span>
      :
      <span>
        {props.time.minutes >= 10
          ? props.time.minutes
          : "0" + props.time.minutes}
      </span>
      :
      <span>
        {props.time.seconds >= 10
          ? props.time.seconds
          : "0" + props.time.seconds}
      </span>
    </div>
  );
};

export default Display;
