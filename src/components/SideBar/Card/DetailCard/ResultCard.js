import React from "react";

import { useTransition, animated } from "react-spring";

const ResultCard = ({ USER_DATA, RESULT_CARD_BOOLEAN }) => {
  const transitions = useTransition(RESULT_CARD_BOOLEAN, {
    from: { opacity: 0, marginLeft: -189 },
    enter: { opacity: 1, marginLeft: 20 },
    leave: { opacity: 0, marginLeft: 789 },
    delay: 200,
  });

  return transitions((styles, RESULT_CARD_BOOLEAN) => {
    return (
      RESULT_CARD_BOOLEAN && (
        <animated.div
          style={styles}
          className="w-80 h-48 mt-8  bg-gray-100 box-shadow"
        >
          <div className="flex gap-2">
            <div className="h-48 w-40 bg-blue-400 flex justify-center flex-col items-center">
              <span className="text-6xl">{USER_DATA.wpm}</span>
              <span className="text-lg">wpm</span>
            </div>

            <div className="w-60 h-48 flex bg-green-500 flex-col font-semibold justify-around pl-8 text-gray-800 text-lg ">
              <div>
                <span>
                  {USER_DATA.keystrokes} <span>keyStrokes</span>
                </span>
              </div>

              <div>
                <span>
                  {" "}
                  {USER_DATA.correct} <span>correct</span>
                </span>
              </div>

              <div>
                <span>
                  {" "}
                  {USER_DATA.misspelled} <span>misspelled</span>
                </span>
              </div>
              <div>
                <span>
                  {" "}
                  {USER_DATA.accuracy}% <span>accuracy</span>
                </span>
              </div>
            </div>
          </div>
        </animated.div>
      )
    );
  });
};

export default ResultCard;
