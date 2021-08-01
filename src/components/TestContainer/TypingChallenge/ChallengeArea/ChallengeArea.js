import React from 'react';
import TypingInputArea from './TypingInputArea/TypingInputArea';
import TypingParagraphTextArea from './TypingParagraphTextaArea/TypingParagraphTextArea';


const ChallengeArea = () => {
    return (
        <div >
            
            <div>
                <TypingParagraphTextArea/>
            </div>
            <div>
               <TypingInputArea/>
            </div>
            
        </div>
    )
}


export default ChallengeArea;