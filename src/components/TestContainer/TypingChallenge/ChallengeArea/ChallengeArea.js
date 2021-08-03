import React from "react";
import TypingInputArea from "./TypingInputArea/TypingInputArea";
import TypingParagraphTextArea from "./TypingParagraphTextaArea/TypingParagraphTextArea";
import paragraphContext from "../../../../contexts/paragraphContext";

const ChallengeArea = () => {
  return (
    <div>
     
      <div>
       <paragraphContext.Consumer>
          {({ activeParagraph }) => (
            <TypingParagraphTextArea activeParagraph={activeParagraph} />
           )}
       </paragraphContext.Consumer>
      </div>
      <div>
      <paragraphContext.Consumer>
        {
          ({wordMatchHandler,typingWord,onKeyPressWordMatch}) => (
            <TypingInputArea wordMatchHandler={wordMatchHandler} typingWord={typingWord} onKeyPressWordMatch={onKeyPressWordMatch}/>
          )

          
        }
           </paragraphContext.Consumer>
      </div>
     
    </div>
  );
};

export default ChallengeArea;
