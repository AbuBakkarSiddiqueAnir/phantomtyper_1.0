import React from "react";
import { Spring, animated, useSpring } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  typingWord,
  onKeyPressWordMatch,
  inputTypingRestricted,
  characterBoolean

}) => {
  const styles = useSpring({
    from: { opacity: 0, marginTop: 190 },
    to: { opacity: 0.9, marginTop: 0 },
    delay: 1300,
  });
  return (
    <animated.div>
      <div className="flex justify-center mt-12">
        <animated.input
          
          style={{ ...styles }}
          value={typingWord}
          onKeyPress={(e) =>onKeyPressWordMatch(e)}
          onChange={wordMatchHandler}
          className="shadow-2xl w-3/4 h-12 outline-none p-4 text-center text-3xl font-semibold"
        />
      </div>
    </animated.div>
  );
};

export default TypingInputArea;
