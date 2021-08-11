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
            activeParagraph,
            wordIndex,
            characterBoolean,
            wordBooleans,
            challengeAreaBool,
            modalIsOpen,
          }) => (
            <TypingParagraphTextArea
              modalIsOpen={modalIsOpen}
              challengeAreaBool={challengeAreaBool}
              wordBooleans={wordBooleans}
              characterBoolean={characterBoolean}
              wordIndex={wordIndex}
              activeParagraph={activeParagraph}
            />
          )}
        </paragraphContext.Consumer>
      </div>
      <div>
        <paragraphContext.Consumer>
          {({
            wordMatchHandler,
            typingWord,
            onKeyPressWordMatch,
            modalIsOpen,
          }) => (
            <TypingInputArea
              modalIsOpen={modalIsOpen}
              wordMatchHandler={wordMatchHandler}
              typingWord={typingWord}
              onKeyPressWordMatch={onKeyPressWordMatch}
            />
          )}
        </paragraphContext.Consumer>
      </div>
      <div className=" h-52 flex items-center">
        <paragraphContext.Consumer>
          {({ resultCardBool, userData }) => (
            <ResultCard userData={userData} resultCardBool={resultCardBool} />
          )}
        </paragraphContext.Consumer>
      </div>
    </div>
  );
};

export default ChallengeArea;
