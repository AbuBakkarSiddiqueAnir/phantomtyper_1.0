import React from "react";
import { Spring, animated, useSpring } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  typingWord,
  onKeyPressWordMatch,
  inputTypingRestricted,
  characterBoolean,
  flameAnimationBoolean,
  modalIsOpen
}) => {
  const styles = useSpring({
    
      from: { opacity: 0, marginTop: 190 },
      to: { opacity: 0.9, marginTop: 0 },
      delay: 1300,
    });

  const flameAnimation = (
    <span className="p-8 animation-container bg-green-500">
      {" "}
      <span className="flame"> </span>
    </span>
  );
  return (
    <div>
   

        <animated.div>
          <div className="flex justify-center mt-12">

            {flameAnimationBoolean ? flameAnimation : null}

            <animated.input
              style={{ ...styles }}
              value={typingWord}
              onKeyPress={(e) => onKeyPressWordMatch(e)}
              onChange={wordMatchHandler}
              className="shadow-3xl w-3/4 h-12 outline-none p-4 text-center text-3xl font-semibold"
            />

            {flameAnimationBoolean ? flameAnimation : null}

          </div>
      </animated.div>
     
      
    
   </div>
  );
};

export default TypingInputArea;
