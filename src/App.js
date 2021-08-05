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
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [countingTime, setCountingTime] = useState(0);
  const [increasingTimeRecording, setIncreasingTimeRecording] = useState(0)
  const [wpm, setWpm] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [misspelled, setMisspelled] = useState(0);
  const [paragraphArray, setParagraphArray] = useState([]);
  const [activeParagraph, setActiveParagraph] = useState([]);
  const [wordBooleans, setWordBooleans] = useState([]);
  const [characterBoolean, setCharacterBoolean] = useState(true);

  const [typingWord, setTypingWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [slicerIndex, setSlicerIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");

  const paragraphArraySetter = () => {
    setParagraphArray(
      randomSelector(typingTestData)
        .split(" ")
        .map((word, index) => {
          return (
            <span key={index}>
              {word} {""}
            </span>
          );
        })
    );
  };

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
    setWordBooleans([]);
    setKeystrokes(0);
    setMisspelled(0);
    setWpm(0);
    setCountingTime(0);
    setIncreasingTimeRecording(0)

    paragraphArraySetter();
  };

  const StatingParaLaoder = () => {
    paragraphArraySetter();
  };

  const onKeyPressWordMatch = (event) => {
  

    setKeystrokes((prevStroke, currStroke) => {
      return prevStroke + 1;
    });

    setTimerStarted(true);
    

    if (event.charCode === 32) {
      setWordIndex((prevIndex, currnetIndex) => prevIndex + 1);

      if (timeRemaining <= 61) {
      }

      setTimerStarted(true);
      setTypingWord("");
      setSelectedWord(paragraphArray[wordIndex + 1]);

      let matchingIssues = wordMatchChecker(selectedWord, typingWord);

      setWordBooleans([...wordBooleans, matchingIssues]);

      if (matchingIssues)
        setCorrect(
          (prevCorrect, nextCorrect) => (nextCorrect = prevCorrect + 1)
        );
          
      else
          setMisspelled((prevMisspelled, nextMisspelled) => {
            return prevMisspelled + 1;
          })
      
     

      if (paragraphArray.length - 2 < wordIndex) {
        restartButtonHandler();
      }
    }
  };

  const activeParaHandler = () => {
    restartButtonHandler();
  };



  const activeParagraphLoader = () => {
    setWordBooleans([]);
    let [slicedParagraph, index] = paraSlicer(paragraphArray, slicerIndex);
    setActiveParagraph(slicedParagraph);
    setSlicerIndex(index);
  };

  const wordMatchHandler = (event) => {

    setTypingWord(event.target.value);
    
    if(selectedWord){
      let aa = selectedWord.props.children[0];
      let aaa = event.target.value.replace(/\s+/g, "");
      if (aaa !== aa.substring(0, aaa.length)) {
        setCharacterBoolean(false);
        console.log(aa, aaa, aaa.length);
      } else {
        setCharacterBoolean(true);
      }
    }
  
   

  };

  const timeRemainingInputHandler = (event) => {
    if (!isNaN(event.target.value) && event.target.value[0] !== "0") {
      setTimeRemaining(event.target.value);
    }
  };

  const counter = () => {
    setIncreasingTimeRecording((prevTime, nextTime) => {
      return prevTime + 1;
    })
    setTimeRemaining((prevtime, nexttime) => {
      return prevtime - 1;
    });


  
  };

  useEffect(() => {
    setWpm((prev, next) => {
      console.log(increasingTimeRecording,countingTime)
      if(countingTime > 1 || increasingTimeRecording > 1){
        let timeRemainingMinFraction = parseInt(increasingTimeRecording) / parseInt(countingTime);
        console.log(parseInt(correct ? correct / timeRemainingMinFraction : 0), correct, timeRemainingMinFraction)
        return parseInt(correct ? correct / timeRemainingMinFraction : 0)
      }
      return 0
    })
  },[increasingTimeRecording])

  useEffect(() => {
    if (wordIndex % 20 === 0 && wordIndex > 0) {
      activeParagraphLoader();
    }
  }, [wordIndex]);

  useEffect(() => {
    StatingParaLaoder();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarted) {
        setCountingTime(timeRemaining)
        counter();
        
        
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted]);
  

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarted) {
        
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted, timeRemaining]);


  useEffect(() => {
    if (timeRemaining < 1 && timeRemaining !== "") {
      setTimerStarted(false);
      restartButtonHandler();
    }
  }, [timeRemaining]);

  useEffect(() => {
    setTimeout(() => {
      setSelectedWord(paragraphArray[0]);
      activeParagraphLoader();
    }, 500);
  }, [paragraphArray]);

  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-12 gap-2  mx-4 p-4 mt-4 challengeArea">
        <div className="col-span-2 p-8 bg-green-400 opacity-80 ">
          <Detailscontext.Provider value={{ correct, keystrokes, misspelled , wpm}}>
            <DetailsBar />
          </Detailscontext.Provider>
        </div>
        <div className="col-span-8 min-width bg-green-500  pt-8 shadow-2xl">
          <ParagraphContext.Provider
            value={{
              onKeyPressWordMatch,
              typingWord,
              wordMatchHandler,
              activeParagraph,
              activeParaHandler,
              wordIndex,
              timeRemaining,
              timeRemainingInputHandler,
              characterBoolean,
              wordBooleans,
              selectedWord,
            }}
          >
            <TypingChallenge />
          </ParagraphContext.Provider>
        </div>
        <div className="col-span-2 p-8  bg-green-400 opacity-80">
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
