import React from "react";
import { animated, useTransition } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  TYPING_WORD,
  OnKeyPressHandler,
  MODAL_IS_OPEN,
}) => {
  const transitions = useTransition(MODAL_IS_OPEN, {
    from: { opacity: 0, marginTop: 110 },
    enter: { opacity: 1, marginTop: 0 },
    delay: 200,
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
                style={{...styles,background:'#B9EDDD'}}
                value={TYPING_WORD}
                onKeyPress={(e) => OnKeyPressHandler(e)}
                onChange={wordMatchHandler}
                className=" w-3/5 h-12 outline-none p-4 border-cc text-center text-2xl font-normal"
              />
            </div>
          </animated.div>
        </div>
      )
    );
  });
};

export default TypingInputArea;
