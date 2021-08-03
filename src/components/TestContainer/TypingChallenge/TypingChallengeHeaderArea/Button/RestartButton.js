import React from 'react';


const RestartButton = ({activeParaHandler}) => {
    return (

        <div className="">
            <button onClick={activeParaHandler} className="w-60 h-12 button rounded hover:bg-gray-100 text-2xl">
                <i className="icon sync"></i>
                Restart 
            </button>
        </div>
    )
}


export default RestartButton;