import React from "react";
import Modal from "react-modal";

const InitialModal = ({ modalHandler, modalIsOpen,setUserNameFromInput }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      className=" justify-center items-center  flex bg-transparent w-full h-full"
    >
      <div className="w-3/4 h-3/4 bg-green-800 flex justify-center items-center shadow-2xl flex-col">
        <h1 className="text-6xl font-bold text-gray-200 mb-16">
          Phantom Typer
        </h1>

        <input
          onChange={(e) => setUserNameFromInput(e.target.value)}
          placeholder="Enter your name..."
          className="shadow-2xl bg-gray-200 w-3/4 h-12 outline-none p-4 text-center text-3xl font-semibold"
        ></input>
        <div className="pt-4">
          <button
            onClick={(e) => modalHandler(e)}
            className="w-80 text-gray-200 rounded-sm  bg-green-800 h-12 text-3xl font-bold shadow-2xl border-2 hover:border-gray-800"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InitialModal;
