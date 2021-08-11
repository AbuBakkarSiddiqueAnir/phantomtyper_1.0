import React from "react";
import { animated, useTransition } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  typingWord,
  onKeyPressWordMatch,
  modalIsOpen,
}) => {
  const transitions = useTransition(modalIsOpen, {
    from: { opacity: 0, marginTop: 190 },
    enter: { opacity: 1, marginTop: 0 },
    delay: 700,
  });

  return transitions((styles, modalIsOpen) => {
    return (
      !modalIsOpen && (
        <div>
          <animated.div>
            <div className="flex justify-center mt-12">
              <animated.input
                placeHolder=".....start....typing"
                autoFocus
                style={styles}
                value={typingWord}
                onKeyPress={(e) => onKeyPressWordMatch(e)}
                onChange={wordMatchHandler}
                className="shadow-3xl w-3/5 h-12 outline-none p-4 text-center text-3xl font-normal"
              />
            </div>
          </animated.div>
        </div>
      )
    );
  });
};

export default TypingInputArea;
