import React from 'react';
import RestartButton from "./Button/RestartButton";
import TimeRemainingInput from "./Input/TimeRemainingInput";
import StartButton from "./Button/StartButton";

const TypingChalengeHeaderArea = ({}) => {
    return (
        <div className="flex justify-between mx-8">
            <TimeRemainingInput/>
         
            <RestartButton/>
        </div>
    )
}


export default TypingChalengeHeaderArea;