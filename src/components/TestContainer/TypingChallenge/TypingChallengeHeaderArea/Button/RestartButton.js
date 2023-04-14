import React from 'react';


const RestartButton = ({ActiveParaHandler}) => {
    return (
        <div className="bor">
            <button onClick={ActiveParaHandler} className="w-60 h-12 button rounded border-cc text-2xl">
                <span className='rotation'>
                <i className="icon sync"></i>
                </span>

                Restart
            </button>
        </div>
    )
}


export default RestartButton;