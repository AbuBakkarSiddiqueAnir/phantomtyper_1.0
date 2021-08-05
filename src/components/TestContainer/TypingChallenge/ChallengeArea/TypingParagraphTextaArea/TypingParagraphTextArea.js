import React, { useState, useEffect, fragment } from "react";

const TypingParagraphTextArea = ({ activeParagraph, wordIndex, characterBoolean, wordBooleans }) => {
  const [apOnTextArea, setApOnTextArea] = useState("");
  console.log(wordIndex, wordBooleans)

  useEffect(() => {
    setApOnTextArea(
      activeParagraph.map((word, index) => {
        if (parseInt(word.key) === wordIndex) {
  
          return (
            <span key={index} className={characterBoolean ? "font-semibold bg-gray-400 bg-opacity-50 px-1 rounded-md" : "font-semibold bg-red-500 bg-opacity-50 px-1 rounded-md"}>
              {word}
            </span>
          );
        }
        return (
          <span key={index} className={wordBooleans[index] === false ? "font-semibold px-1 rounded-lg opacity-90  text-red-500" : "px-1 bg-transparent font-semibold"}>
            {word}
          </span>
        );
      })
    );
    
  }, [activeParagraph, wordIndex, characterBoolean, wordBooleans]);

  return (
    <div className="mt-8">
      <div className="w-full h-auto p-4 text-3xl resize-none bg-gray-100 leading-normal">
        {apOnTextArea}
      </div>
    </div>
  );
};

export default TypingParagraphTextArea;
