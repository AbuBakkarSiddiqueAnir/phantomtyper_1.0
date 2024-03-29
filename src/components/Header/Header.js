import React from "react";

const Header = ({ userName }) => {
  return (
    <div className="bg-[#F6F1F1] flex mx-4 p-3 ">
      <div className="flex-1 flex">
        <span className="text-4xl text-gray-800">
          <i className="keyboard icon"></i>
        </span>

        <h1 className="text-4xl text-gray-800 font-bold">
          {" "}
          Phantom Typer{" "}
          <sup>
            {" "}
            <a
              className=""
              target="blank"
              href="https://github.com/Aniruzzaman-anir/Phantom-Typer"
            >
              <span className="text-xl">
                <i className="github icon"></i>
              </span>
            </a>
          </sup>
        </h1>
      </div>

      <div className="flex">
        <i className="user icon text-2xl"></i>
        <h1 className="font-semibold pr-3 text-2xl">{userName}</h1>
      </div>
    </div>
  );
};

export default Header;
