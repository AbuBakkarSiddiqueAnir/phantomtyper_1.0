import React, { useState, useEffect, fragment } from "react";
import {useTransition, animated } from "react-spring";

const TypingParagraphTextArea = ({
  MODAL_IS_OPEN,
  ACTIVE_PARAGRAPH,
  WORD_INDEX,
  CHARACTER_BOOLEAN,
  WORD_BOOLEANS,
  CHALLENGE_AREA_BOOLEAN,
}) => {
  const [apOnTextArea, setApOnTextArea] = useState("");

  const transitions = useTransition(MODAL_IS_OPEN, {
    from: { opacity: 0, marginTop: -100, minHeight: "10px" },
    enter: { opacity: 1, marginTop: 0, minHeight: "145px" },
    delay: 400,
  });

  useEffect(() => {
    setApOnTextArea(
      ACTIVE_PARAGRAPH.map((word, index) => {
        if (parseInt(word.key) === WORD_INDEX) {
          return (
            <span
              key={index}
              className={
                CHARACTER_BOOLEAN
                  ? "font-normal bg-green-400 bg-opacity-50 px-1 rounded-md"
                  : "font-normal bg-red-600 bg-opacity-60 px-1 rounded-md"
              }
            >
              {word}
            </span>
          );
        }
        return (
          <span
            key={index}
            className={
              WORD_BOOLEANS[index] === false
                ? "font-normal px-1 rounded-lg opacity-90  text-red-600"
                : "px-1 bg-transparent font-normal"
            }
          >
            {word}
          </span>
        );
      })
    );
  }, [ACTIVE_PARAGRAPH, WORD_INDEX, CHARACTER_BOOLEAN, WORD_BOOLEANS]);

  return transitions((styles, MODAL_IS_OPEN) => {
    return (
      !MODAL_IS_OPEN && (
        <div className="mt-8">
          <animated.div
            style={styles}
            className="w-full p-4  text-2xl resize-none  leading-normal"
          >
            {apOnTextArea.length > 1 ? (
              apOnTextArea
            ) : (
              <div>
                <h1 className="text-5xl font-normal">Loading...</h1>
              </div>
            )}
          </animated.div>
        </div>
      )
    );
  });
};

export default TypingParagraphTextArea;
