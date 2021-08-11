import React, { useState, useEffect, fragment } from "react";
import {useTransition, animated } from "react-spring";

const TypingParagraphTextArea = ({
  modalIsOpen,
  activeParagraph,
  wordIndex,
  characterBoolean,
  wordBooleans,
  challengeAreaBool,
}) => {
  const [apOnTextArea, setApOnTextArea] = useState("");

  const transitions = useTransition(modalIsOpen, {
    from: { opacity: 0, marginTop: 190, minHeight: "5px" },
    enter: { opacity: 1, marginTop: 0, minHeight: "145px" },
    delay: 500,
  });

  useEffect(() => {
    setApOnTextArea(
      activeParagraph.map((word, index) => {
        if (parseInt(word.key) === wordIndex) {
          return (
            <span
              key={index}
              className={
                characterBoolean
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
              wordBooleans[index] === false
                ? "font-normal px-1 rounded-lg opacity-90  text-red-600"
                : "px-1 bg-transparent font-normal"
            }
          >
            {word}
          </span>
        );
      })
    );
  }, [activeParagraph, wordIndex, characterBoolean, wordBooleans]);

  return transitions((styles, modalIsOpen) => {
    return (
      !modalIsOpen && (
        <div className="mt-8">
          <animated.div
            style={styles}
            className="w-full p-4 box-shadow text-3xl resize-none bg-gray-100 leading-normal"
          >
            {apOnTextArea.length > 1 ? (
              apOnTextArea
            ) : (
              <div>
                <h1 className="text-6xl font-normal">Loading...</h1>
              </div>
            )}
          </animated.div>
        </div>
      )
    );
  });
};

export default TypingParagraphTextArea;
