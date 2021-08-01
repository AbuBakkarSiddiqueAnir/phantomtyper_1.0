import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TryAgain from "./components/TestContainer/TryAgain/TryAgain";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";

const App = () => {



  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="">
        <div>
          <DetailsBar />
        </div>
        <div>
          <TypingChallenge />
        </div>
        <div>
          <HistoryBar />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
