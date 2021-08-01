import React,{useState, useEffect} from 'react';



const TypingParagraphTextArea = ({displayedPara}) => {
   
    return(
        <div className="mt-8">
            <textarea className="w-full h-44 p-4 outline-none border-none text-4xl resize-none">
           {console.log(copiedDisplayedPara)}
            </textarea>
        </div>
    )
}

export default TypingParagraphTextArea;