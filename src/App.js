import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TryAgain from "./components/TestContainer/TryAgain/TryAgain";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";
import "./App.css"

const App = () => {


  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-9 gap-2 bg-green-600 mx-4 p-4 mt-4 challengeArea">
        <div className="col-span-2 p-8 bg-green-700">
          <DetailsBar />
        </div>
        <div className="col-span-5 min-width  p-8 bg-green-700">
          <TypingChallenge />
        </div>
        <div className="col-span-2 p-8 bg-green-700">
          <HistoryBar />
        </div>
      </div>
      <div className="bg-green-600 mx-4 p-4 mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default App;
