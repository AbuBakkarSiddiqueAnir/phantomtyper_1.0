import React from "react";
import { Spring, animated, useSpring,useTransition } from "react-spring";

const TypingInputArea = ({
  wordMatchHandler,
  typingWord,
  onKeyPressWordMatch,
  inputTypingRestricted,
  characterBoolean,
  flameAnimationBoolean,
  modalIsOpen
}) => {
  const transitions = useTransition(modalIsOpen, {
    from: { opacity: 0, marginTop: 190},
    enter: { opacity: 1, marginTop: 0},
   
    delay: 700,
  })

  // const flameAnimation = (
  //   <span className="p-8 animation-container bg-green-500">
  //     {" "}
  //     <span className="flame"> </span>
  //   </span>
  // );
  return transitions((styles, modalIsOpen) => {
    return !modalIsOpen && (
      <div>
   

      <animated.div>
        <div className="flex justify-center mt-12">

 

          <animated.input
            style={styles}
            value={typingWord}
            onKeyPress={(e) => onKeyPressWordMatch(e)}
            onChange={wordMatchHandler}
            className="shadow-3xl w-3/5 h-12 outline-none p-4 text-center text-3xl font-semibold"
          />

         

        </div>
    </animated.div>
   
    
  
 </div>
    )
  })
};

export default TypingInputArea;
