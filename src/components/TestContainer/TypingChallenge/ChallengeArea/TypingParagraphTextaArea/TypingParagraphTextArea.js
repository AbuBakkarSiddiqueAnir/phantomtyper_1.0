import React, { useState, useEffect, fragment } from "react";

const TypingParagraphTextArea = ({ activeParagraph, wordIndex }) => {
  const [apOnTextArea, setApOnTextArea] = useState("");

  useEffect(() => {
    setApOnTextArea(
      activeParagraph.map((word, index) => {
        if (parseInt(word.key) === wordIndex) {
  
          return (
            <span
              key={index}
              className="bg-gray-400 bg-opacity-50 px-1 rounded-md"
            >
              {word}
            </span>
          );
        }
        return (
          <span key={index} className="px-1">
            {word}
          </span>
        );
      })
    );
    
  }, [activeParagraph, wordIndex]);

  return (
    <div className="mt-8">
      <div className="w-full h-auto p-4 text-3xl resize-none bg-gray-100 leading-normal">
        {apOnTextArea}
      </div>
    </div>
  );
};

export default TypingParagraphTextArea;
