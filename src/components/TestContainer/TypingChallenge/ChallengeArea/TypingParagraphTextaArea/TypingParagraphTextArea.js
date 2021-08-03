import React, { useState, useEffect } from "react";

const TypingParagraphTextArea = ({ activeParagraph }) => {

  return (
    <div className="mt-8">
      <textarea
        value={activeParagraph}
        className="w-full h-44 p-4 outline-none border-none text-4xl resize-none"
      />
    </div>
  );
};

export default TypingParagraphTextArea;
