import React from "react";
import TypingInputArea from "./TypingInputArea/TypingInputArea";
import TypingParagraphTextArea from "./TypingParagraphTextaArea/TypingParagraphTextArea";
import paragraphContext from "../../../../contexts/paragraphContext";
import ResultCard from "../../../SideBar/Card/DetailCard/ResultCard";

const ChallengeArea = () => {
  return (
    <div>
      <div>
        <paragraphContext.Consumer>
          {({
            ACTIVE_PARAGRAPH,
            WORD_INDEX,
            CHARACTER_BOOLEAN,
            WORD_BOOLEANS,
            CHALLENGE_AREA_BOOLEAN,
            MODAL_IS_OPEN,
          }) => (
            <TypingParagraphTextArea
              MODAL_IS_OPEN={MODAL_IS_OPEN}
              CHALLENGE_AREA_BOOLEAN={CHALLENGE_AREA_BOOLEAN}
              WORD_BOOLEANS={WORD_BOOLEANS}
              CHARACTER_BOOLEAN={CHARACTER_BOOLEAN}
              WORD_INDEX={WORD_INDEX}
              ACTIVE_PARAGRAPH={ACTIVE_PARAGRAPH}
            />
          )}
        </paragraphContext.Consumer>
      </div>
      <div>
        <paragraphContext.Consumer>
          {({
            wordMatchHandler,
            TYPING_WORD,
            OnKeyPressHandler,
            MODAL_IS_OPEN,
          }) => (
            <TypingInputArea
              MODAL_IS_OPEN={MODAL_IS_OPEN}
              wordMatchHandler={wordMatchHandler}
              TYPING_WORD={TYPING_WORD}
              OnKeyPressHandler={OnKeyPressHandler}
            />
          )}
        </paragraphContext.Consumer>
      </div>
      <div className="h-48 flex items-center">
        <paragraphContext.Consumer>
          {({ RESULT_CARD_BOOLEAN, USER_DATA }) => (
            <ResultCard USER_DATA={USER_DATA} RESULT_CARD_BOOLEAN={RESULT_CARD_BOOLEAN} />
          )}
        </paragraphContext.Consumer>
      </div>
    </div>
  );
};

export default ChallengeArea;
