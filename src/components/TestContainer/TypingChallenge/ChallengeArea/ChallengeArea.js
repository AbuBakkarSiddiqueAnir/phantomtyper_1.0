import React from "react";
import TypingInputArea from "./TypingInputArea/TypingInputArea";
import TypingParagraphTextArea from "./TypingParagraphTextaArea/TypingParagraphTextArea";
import paragraphContext from "../../../../contexts/paragraphContext";

const ChallengeArea = () => {
  return (
    <div>
      <div>
        <paragraphContext.Consumer>
          {({ displayedPara }) => (
            <TypingParagraphTextArea displayedPara={displayedPara} />
           )}
        </paragraphContext.Consumer>
      </div>
      <div>
        <TypingInputArea />
      </div>
    </div>
  );
};

export default ChallengeArea;
