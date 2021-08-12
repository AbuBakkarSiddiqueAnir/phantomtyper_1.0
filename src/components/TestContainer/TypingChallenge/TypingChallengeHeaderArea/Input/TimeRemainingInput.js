import React from "react";

const TimeRemainingInput = ({ TIME_REMAINING, timeRemainingInputHandler }) => {
  return (
    <div>
      <input
        value={TIME_REMAINING}
        onChange={(event) => timeRemainingInputHandler(event)}
        className="w-60 input-field hover:bg-gray-100 text-3xl bg-transparent font-bold px-4 h-12 outline-none text-center"
      />
    </div>
  );
};

export default TimeRemainingInput;
