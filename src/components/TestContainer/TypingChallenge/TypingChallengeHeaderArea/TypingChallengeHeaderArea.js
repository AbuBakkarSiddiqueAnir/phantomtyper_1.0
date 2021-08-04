import React from 'react';
import RestartButton from "./Button/RestartButton";
import TimeRemainingInput from "./Input/TimeRemainingInput";
import StartButton from "./Button/StartButton";
import paragraphContext from "../../../../contexts/paragraphContext"


const TypingChalengeHeaderArea = ({}) => {
    return (
        <div className="flex justify-between mx-8">
            <paragraphContext.Consumer>
                {
                    ({timeRemaining,timeRemainingInputHandler}) => (
                        <TimeRemainingInput timeRemainingInputHandler={timeRemainingInputHandler} timeRemaining={timeRemaining}/>
                    )
                }
           

            </paragraphContext.Consumer>
         
            <paragraphContext.Consumer>
                {
                    ({activeParaHandler}) => (
                        <RestartButton activeParaHandler={activeParaHandler}/>
                    )
                }
            </paragraphContext.Consumer>
            
        </div>
    )
}


export default TypingChalengeHeaderArea;