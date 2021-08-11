import React from 'react';
import RestartButton from "./Button/RestartButton";
import TimeRemainingInput from "./Input/TimeRemainingInput";
import paragraphContext from "../../../../contexts/paragraphContext"


const TypingChalengeHeaderArea = () => {
  return (
    <div className="flex justify-between mx-8">
      <paragraphContext.Consumer>
        {({ TIME_REMAINING, timeRemainingInputHandler }) => (
          <TimeRemainingInput
            timeRemainingInputHandler={timeRemainingInputHandler}
            TIME_REMAINING={TIME_REMAINING}
          />
        )}
      </paragraphContext.Consumer>

      <paragraphContext.Consumer>
        {({ ActiveParaHandler }) => (
          <RestartButton ActiveParaHandler={ActiveParaHandler} />
        )}
      </paragraphContext.Consumer>
    </div>
  );
};


export default TypingChalengeHeaderArea;