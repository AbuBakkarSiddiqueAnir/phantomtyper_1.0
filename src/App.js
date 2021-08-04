import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TryAgain from "./components/TestContainer/TryAgain/TryAgain";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";
import randomSelector from "./helper/randomSelector";
import typingTestData from "./data/exampleText";
import ParagraphContext from "./contexts/paragraphContext";
import Detailscontext from "./contexts/detailscontext";
import paraSlicer from "./helper/slicer";
import wordMatchChecker from "./helper/wordMatchChecker";
import "./App.css";


const App = () => {

  const [timerStarted, setTimerStarted] = useState(false);
  const [firstWordIndexChecker, setFirstWordIndexChecker] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(60);

  const [wpm, setWpm] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [misspelled, setMisspelled] = useState(0);
  const [paragraphArray, setParagraphArray] = useState([]);
  const [activeParagraph, setActiveParagraph] = useState([]);


  const [typingWord, setTypingWord] = useState("");

  const [wordIndex, setWordIndex] = useState(0);
  const [slicerIndex, setSlicerIndex] = useState(0)
  const [selectedWord, setSelectedWord] = useState("");


  const paragraphArraySetter = () => {
    setParagraphArray( randomSelector(typingTestData).split(" ").map((word,index)=>{
      return <span key={index}>{word} {""}</span>
    }));
  }

  const restartButtonHandler = () => {
    setCorrect(0);
    setActiveParagraph([]);
    setTypingWord("");
    setParagraphArray([]);
    setSlicerIndex(0);
    setSelectedWord("");
    setWordIndex(0);
    setTimerStarted(false);
    setTimeRemaining(60);
    paragraphArraySetter()
  }

  const StatingParaLaoder = () => {
    paragraphArraySetter()
  }

  const onKeyPressWordMatch = (event) => {
    if (event.charCode === 32) {
      setWordIndex((prevIndex, currnetIndex) => prevIndex + 1);

      if (timeRemaining <= 61) {
        console.log(timeRemaining)
        console.log("typing period has been finished");
      }
      console.log(wordIndex,paragraphArray, paragraphArray.length)
      setTimerStarted(true)
      setTypingWord("");
      setSelectedWord(paragraphArray[wordIndex + 1]);
      let matchingIssues = wordMatchChecker(selectedWord, typingWord);

      if (matchingIssues)
        setCorrect(
          (prevCorrect, nextCorrect) => (nextCorrect = prevCorrect + 1)
        );
    }
  };

  const activeParaHandler = () => {
    restartButtonHandler()
  }

  const activeParagraphLoader = () => {
    let [slicedParagraph, index] = paraSlicer(paragraphArray,slicerIndex);
    setActiveParagraph(slicedParagraph);
    setSlicerIndex(index);
  }


  const wordMatchHandler = (event) => {
    setTypingWord(event.target.value);
  };


  const timeRemainingInputHandler = (event) => {
    if(!isNaN(event.target.value) && event.target.value[0] !== "0") {
      setTimeRemaining(event.target.value);
    }
  }
  
  const counter = () => {
    setTimeRemaining((prevtime, nexttime) => {
      return prevtime - 1
    })
  }




  useEffect(() => {
    if(wordIndex % 15 === 0 && wordIndex > 0){
      activeParagraphLoader();
    } 
  },[wordIndex])
  

  useEffect(() => {
    StatingParaLaoder()
  },[])


  useEffect(() => {
      const interval = setInterval(() =>{
        if(timerStarted){
        counter();
        }
      },1000)

    return () => clearInterval(interval)
  },[timerStarted])


  useEffect(() => {

    if(timeRemaining < 1){
      setTimerStarted(false);
      alert(`Correct typing : ${correct}`)
      restartButtonHandler()
    }
  },[timeRemaining])


  useEffect(() => {
   setTimeout(() => {
      setSelectedWord(paragraphArray[0])
      activeParagraphLoader();
    },1000)
  },[paragraphArray])


  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-9 gap-2  mx-4 p-4 mt-4 challengeArea">
        <div className="col-span-2 p-8 border-2 ">
          <Detailscontext.Provider value={correct}>
            <DetailsBar />
          </Detailscontext.Provider>
         
        </div>
        <div className="col-span-5 min-width border-1 pt-8 ">
          <ParagraphContext.Provider
            value={{
              onKeyPressWordMatch,
              typingWord,
              wordMatchHandler,
              activeParagraph,
              activeParaHandler,
              wordIndex,
              timeRemaining,
              timeRemainingInputHandler
            }}
          >
            <TypingChallenge />
          </ParagraphContext.Provider>
        </div>
        <div className="col-span-2 p-8 border-2 ">
          <HistoryBar />
        </div>
      </div>
      <div className=" mx-4 p-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
