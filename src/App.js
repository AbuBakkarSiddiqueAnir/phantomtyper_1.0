import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TryAgain from "./components/TestContainer/TryAgain/TryAgain";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";
import  randomSelector  from "./helper/randomSelector";
import  typingTestData  from "./data/exampleText";
import ParagraphContext from "./contexts/paragraphContext";
import "./App.css";

const App = () => {
  const defaultDetails = {
    wpm: 0,
    keystrokes: 0,
    accuracy: 0,
    correct: 0,
    misspelled: 0,
  };

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [detailsData, setDetailsData] = useState(defaultDetails);
  const [selectedPara, setSelectedPara] = useState("intial paragraph huin mein");

  

  useEffect(() => {
    setSelectedPara(randomSelector(typingTestData));
  }, []);


  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-9 gap-2  mx-4 p-4 mt-4 challengeArea">
        <div className="col-span-2 p-8 border-4 ">
          <DetailsBar />
        </div>
        <div className="col-span-5 min-width border-4 pt-8 ">
          <ParagraphContext.Provider value={{selectedPara}}>

            <TypingChallenge />
            
          </ParagraphContext.Provider>
        </div>
        <div className="col-span-2 p-8 border-4 ">
          <HistoryBar />
        </div>
      </div>
      <div className=" mx-4 p-4">
        <Footer />
      </div>
    </div>
  );
};

export default App;
