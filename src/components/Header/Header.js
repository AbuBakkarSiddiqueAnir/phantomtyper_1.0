import React from "react";

const Header = ({ userName }) => {
  return (
    <div className="bg-green-500 flex mx-4 p-3 box-shadow">
      <div className="flex-1 flex">
        <span className="text-5xl text-gray-800">
          <i className="keyboard icon"></i>
        </span>

        <h1 className="text-5xl text-gray-800 font-bold">
          {" "}
          Phantom Typer{" "}
          <sup>
            {" "}
            <a
              className=""
              href="https://github.com/Aniruzzaman-anir/Phantom-Typer"
            >
              <span className="text-2xl">
                <i className="github icon"></i>
              </span>
            </a>
          </sup>
        </h1>
      </div>

      <div className="flex">
        <i className="user icon text-3xl"></i>
        <h1 className="font-semibold pr-3 text-2xl">{userName}</h1>
      </div>
    </div>
  );
};

export default Header;
