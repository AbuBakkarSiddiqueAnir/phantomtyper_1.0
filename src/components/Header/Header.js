import React from 'react';


const Header = ({}) => {
    return (
        <div className="bg-green-600 flex mx-4 p-3">
            <div className="flex-1">
                <h1 className="text-6xl font-bold">Phantom Typer</h1>
            </div>
            <div className="flex">
                <i class="user icon text-3xl"></i>
                <h1 className="font-semibold text-2xl">Aniruzzaman</h1>
            </div>
        </div>
    )
}

export default Header;