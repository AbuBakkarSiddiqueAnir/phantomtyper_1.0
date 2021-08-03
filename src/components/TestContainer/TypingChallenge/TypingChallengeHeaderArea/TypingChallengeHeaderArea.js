import React from 'react';
import RestartButton from "./Button/RestartButton";
import TimeRemainingInput from "./Input/TimeRemainingInput";
import StartButton from "./Button/StartButton";
import paragraphContext from "../../../../contexts/paragraphContext"


const TypingChalengeHeaderArea = ({}) => {
    return (
        <div className="flex justify-between mx-8">
            <TimeRemainingInput/>
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