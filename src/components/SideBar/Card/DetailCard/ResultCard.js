import React,{useState} from "react";

import { Spring,useTransition, animated, useSpring } from "react-spring";

const ResultCard = ({ userData, resultCardBool }) => {
    


  const transitions = useTransition(resultCardBool, {
    from: { opacity: 0 ,marginLeft:-189},
    enter: { opacity: 1 ,marginLeft:0},
    leave: { opacity: 0 ,marginLeft:789},
    delay: 300,
  })

return transitions((styles, resultCardBool) => {
    return resultCardBool && (
        <animated.div
        style={styles}
        className="w-80 h-48 mt-8  bg-gray-100 box-shadow"
      >
        
          <div className="flex gap-2">
            <div className="h-48 w-40 bg-blue-400 flex justify-center flex-col items-center">
              <span className="text-6xl">{userData.wpm}</span>
              <span>wpm</span>
            </div>

            <div className="w-60 h-48 flex bg-blue-200 flex-col justify-around pl-8 ">
              <div>
                <span>
                  {userData.keystrokes} <span>keyStrokes</span>
                </span>
              </div>

              <div>
                <span>
                  {" "}
                  {userData.correct} <span>correct</span>
                </span>
              </div>

              <div>
                <span>
                  {" "}
                  {userData.misspelled} <span>misspelled</span>
                </span>
              </div>
              <div>
                <span>
                  {" "}
                  {userData.accuracy}% <span>accuracy</span>
                </span>
              </div>
            </div>
          </div>
        
      </animated.div> 
    )
})

};

export default ResultCard;
