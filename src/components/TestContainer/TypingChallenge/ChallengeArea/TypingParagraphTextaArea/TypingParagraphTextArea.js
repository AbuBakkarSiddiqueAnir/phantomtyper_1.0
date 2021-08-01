import React from 'react';



const TypingParagraphTextArea = ({selectedPara}) => {
    return(
        <div className="mt-8">
            <textarea className="w-full h-44 p-4 outline-none border-none text-3xl resize-none">
           {selectedPara}
            </textarea>
        </div>
    )
}

export default TypingParagraphTextArea;