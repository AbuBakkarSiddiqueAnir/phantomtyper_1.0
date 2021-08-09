import React from 'react';


const Header = ({userName}) => {
    return (
        <div className="bg-green-500 flex mx-4 p-3">
            <div className="flex-1 flex">
                <span className="text-4xl"><i className="keyboard icon"></i></span>
               
                <h1 className="text-4xl font-bold"> {" "} Phantom Typer</h1>
            </div>
            <div className="flex">
                <i class="user icon text-3xl"></i>
                <h1 className="font-semibold text-2xl">{userName}</h1>
            </div>
        </div>
    )
}

export default Header;