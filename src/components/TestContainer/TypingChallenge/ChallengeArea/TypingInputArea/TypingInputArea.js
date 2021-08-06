import React from "react";
import { Spring, animated, useSpring } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  typingWord,
  onKeyPressWordMatch,
  inputTypingRestricted,
  characterBoolean,
  flameAnimationBoolean

}) => {
  const styles = useSpring({
    from: { opacity: 0, marginTop: 190 },
    to: { opacity: 0.9, marginTop: 0 },
    delay: 1300,
  });

  const fireAnimation = <span className="p-8 animation-container bg-green-500"> <span className="flame"> </span></span> ;
  return (
    <animated.div>
      <div className="flex justify-center mt-12">
    {
      flameAnimationBoolean ? fireAnimation : null
    } 
        <animated.input
          
          style={{ ...styles }}
          value={typingWord}
          onKeyPress={(e) =>onKeyPressWordMatch(e)}
          onChange={wordMatchHandler}
          className="shadow-2xl w-3/4 h-12 outline-none p-4 text-center text-3xl font-semibold"
        />
    {
       flameAnimationBoolean ? fireAnimation : null
    }
      </div>
     
    </animated.div>
  );
};

export default TypingInputArea;
