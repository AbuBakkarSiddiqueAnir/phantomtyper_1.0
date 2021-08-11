import React from "react";
import { animated, useTransition } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  TYPING_WORD,
  onKeyPressWordMatch,
  MODAL_IS_OPEN,
}) => {
  const transitions = useTransition(MODAL_IS_OPEN, {
    from: { opacity: 0, marginTop: 190 },
    enter: { opacity: 1, marginTop: 0 },
    delay: 700,
  });

  return transitions((styles, MODAL_IS_OPEN) => {
    return (
      !MODAL_IS_OPEN && (
        <div>
          <animated.div>
            <div className="flex justify-center mt-12">
              <animated.input
                placeHolder=".....start....typing"
                autoFocus
                style={styles}
                value={TYPING_WORD}
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
