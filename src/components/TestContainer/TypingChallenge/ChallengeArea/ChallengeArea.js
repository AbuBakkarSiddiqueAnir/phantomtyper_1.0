import React from "react";
import TypingInputArea from "./TypingInputArea/TypingInputArea";
import TypingParagraphTextArea from "./TypingParagraphTextaArea/TypingParagraphTextArea";
import paragraphContext from "../../../../contexts/paragraphContext";

const ChallengeArea = () => {
  return (
    <div>
     
      <div>
       <paragraphContext.Consumer>
          {({ activeParagraph, wordIndex, characterBoolean, wordBooleans, challengeAreaBool }) => (
            <TypingParagraphTextArea challengeAreaBool={challengeAreaBool} wordBooleans={wordBooleans} characterBoolean={characterBoolean} wordIndex={wordIndex} activeParagraph={activeParagraph} />
           )}
       </paragraphContext.Consumer>
      </div>
      <div>
      <paragraphContext.Consumer>
        {
          ({wordMatchHandler,typingWord,onKeyPressWordMatch, inputTypingRestricted, characterBoolean}) => (
            <TypingInputArea inputTypingRestricted={inputTypingRestricted}  wordMatchHandler={wordMatchHandler} typingWord={typingWord} onKeyPressWordMatch={onKeyPressWordMatch}/>
          )

          
        }
           </paragraphContext.Consumer>
      </div>
     
    </div>
  );
};

export default ChallengeArea;
