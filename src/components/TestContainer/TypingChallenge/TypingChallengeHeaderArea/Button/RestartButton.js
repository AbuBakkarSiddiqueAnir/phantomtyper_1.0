import React from 'react';


const RestartButton = ({ActiveParaHandler}) => {
    return (
        <div className="">
            <button onClick={ActiveParaHandler} className="w-60 h-8 button rounded hover:bg-gray-100 text-2xl">
                <i className="icon sync"></i>
                Restart 
            </button>
        </div>
    )
}


export default RestartButton;