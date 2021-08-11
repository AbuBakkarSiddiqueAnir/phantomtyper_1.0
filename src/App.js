import React, { useState, useEffect } from "react";
import Spring, { useSpring, animated } from "react-spring";
import InitialModal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TryAgain from "./components/TestContainer/TryAgain/TryAgain";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";
import UserChart from "./components/Chart/UserChart"
import randomSelector from "./helper/randomSelector";
import typingTestData from "./data/exampleText";
import ParagraphContext from "./contexts/paragraphContext";
import Detailscontext from "./contexts/detailscontext";
import paraSlicer from "./helper/slicer";
import wordMatchChecker from "./helper/wordMatchChecker";
import "./App.css";

const App = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [challengeAreaBool, setChallengeAreaBool] = useState(true);
  const [inputTypingRestricted, setInputTypingRestricted] = useState(false);
  const [flameAnimationBoolean, setFlameAnimationBoolean] = useState(false);
  const [characterBoolean, setCharacterBoolean] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [resultCardBool, setResultCardBool] = useState(false);
  const [chartBool,setChartBool] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(60);
  const [increasingTimeRecording, setIncreasingTimeRecording] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [misspelled, setMisspelled] = useState(0);
  const [paragraphArray, setParagraphArray] = useState([]);
  const [activeParagraph, setActiveParagraph] = useState([]);
  const [wordBooleans, setWordBooleans] = useState([]);
  const [typingWord, setTypingWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [slicerIndex, setSlicerIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState({});
  const [userStat, setUserStat] = useState({})
  const [userNameFromInput, setUserNameFromInput] = useState("");

  const [charCodes, setcharCodes] = useState([]);
  const [prevMoment, setPrevMoment] = useState(0);
  const [chartInfos, setChartInfos] = useState({});
  const [momentsArray, setMomentsArray] = useState([]);
  const [charCodesArray, setCharCodesArray] = useState([]);

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
    setAccuracy(0);
    setFlameAnimationBoolean(false);
    setcharCodes([]);

    setIncreasingTimeRecording(0);
    setChallengeAreaBool(true);
    setInputTypingRestricted(false);
    setPrevMoment(0);

    paragraphArraySetter();
  };

  const chartBuilderHandler = (user) => {
    setTimerStarted(false)
 
    let sumOfAccuracy = 0,
      avgAccuracy,
      sumOfCorrect = 0,
      avgCorrect,
      sumOfKeyStrokes = 0,
      avgKeystrokes,
      sumOfWpm = 0,
      avgWpm,
      sumOfMisspelled = 0,
      avgMisspelled,
      arrayOfCharCodes = [],
      arrayOfAllCharCodes = [],
      avgMomentsArrayOfAllCharCodes = [],
      uniqueCharCodeArray = [],
      momentsArr = [],
      charCodesArr = [];

    user.userdata.map((datam) => {
      sumOfAccuracy += datam.accuracy;
      sumOfCorrect += datam.correct;
      sumOfKeyStrokes += datam.keystrokes;
      sumOfWpm += datam.wpm;
      sumOfMisspelled += datam.misspelled;
      arrayOfCharCodes = [...arrayOfCharCodes, datam.charCodes];
    });

    avgAccuracy = sumOfAccuracy / user.userdata.length;
    avgCorrect = sumOfCorrect / user.userdata.length;
    avgMisspelled = sumOfMisspelled / user.userdata.length;
    avgKeystrokes = sumOfKeyStrokes / user.userdata.length;
    avgWpm = sumOfWpm / user.userdata.length;

    setUserStat({
      avgKeystrokes,avgCorrect,avgWpm,avgMisspelled,avgAccuracy
    })

    arrayOfCharCodes.map((arr) => {
      arr.map((momentObj) => {
        arrayOfAllCharCodes.push(momentObj);
      });
    });

    arrayOfAllCharCodes.map((momentObj) => {
      uniqueCharCodeArray.push(momentObj.charCode);
    });

    uniqueCharCodeArray = [...new Set(uniqueCharCodeArray)];

    uniqueCharCodeArray.map((charCode) => {
      let sumOfMoments = 0,
        charCounts = 0;

      arrayOfAllCharCodes.map((momentObj) => {
        if (charCode === momentObj.charCode) {
          charCounts++;
          sumOfMoments += momentObj.moment;
        }
      });

      avgMomentsArrayOfAllCharCodes.push({
        charCode: charCode,
        avgMoment: Math.ceil(sumOfMoments / charCounts),
      });
    });

    avgMomentsArrayOfAllCharCodes.sort((a, b) => {
      return a.charCode - b.charCode;
    });

    avgMomentsArrayOfAllCharCodes.map((momentObj) => {
      momentsArr.push(momentObj.avgMoment);
      if(momentObj.charCode === 32) {
        charCodesArr.push("space")
      }else{
        charCodesArr.push(String.fromCharCode(momentObj.charCode));
      }
      
    });
    setMomentsArray(momentsArr);
    setCharCodesArray(charCodesArr);
    setChartBool(true);

    console.log(momentsArr, charCodesArr);
  };

  const chartCloseHandler = () => {
    setChartBool(false);
    setTimerStarted(true)
  }


  // deleting logged in user

  const deleteUserName = (user) => {
    let prevUsersData = [...JSON.parse(localStorage.getItem("usersData"))];
    let newUsersData = []
    prevUsersData.map((userObj,index) => {
      if(user.username === userObj.username){
        return 
      }
      newUsersData.push(userObj)
    })
    setUsersData(newUsersData);
    localStorage.setItem("usersData", JSON.stringify(newUsersData)); 
  }


  const StatingParaLaoder = () => {
    paragraphArraySetter();
  };

  const onKeyPressWordMatch = (event) => {
    setKeystrokes((prevStroke, currStroke) => {
      return prevStroke + 1;
    });

    setTimerStarted(true);
    if (event.charCode === 8) setInputTypingRestricted(false);

    if (prevMoment > 1) {
      setcharCodes([
        ...charCodes,
        {
          moment: new Date().getTime() - prevMoment,
          charCode: event.charCode,
        },
      ]);
      setPrevMoment(0);
    }

    setPrevMoment(new Date().getTime());

    if (event.charCode === 32) {
      setWordIndex((prevIndex, currnetIndex) => prevIndex + 1);

      setTimerStarted(true);
      setTypingWord("");
      setSelectedWord(paragraphArray[wordIndex + 1]);

      setAccuracy((prevAcc, nextAcc) => {
        if (correct > 0) {
          let total = parseInt(misspelled) + parseInt(correct);

          return Math.ceil((parseInt(correct) / total) * 100);
        } else return 0;
      });

      let matchingIssues = wordMatchChecker(selectedWord, typingWord);

      setWordBooleans([...wordBooleans, matchingIssues]);

      if (matchingIssues)
        setCorrect(
          (prevCorrect, nextCorrect) => (nextCorrect = prevCorrect + 1)
        );
      else
        setMisspelled((prevMisspelled, nextMisspelled) => {
          return prevMisspelled + 1;
        });

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

  const modalHandler = () => {
    if (userNameFromInput !== "") setModalIsOpen(false);
  };

  const wordMatchHandler = (event) => {
    setTypingWord(event.target.value);

    if (selectedWord) {
      let aa = selectedWord.props.children[0];
      let aaa = event.target.value.replace(/\s+/g, "");
      if (aaa !== aa.substring(0, aaa.length)) {
        setCharacterBoolean(false);
        setInputTypingRestricted(false);
      } else {
        setCharacterBoolean(true);
        setInputTypingRestricted(true);
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
    });
    setTimeRemaining((prevtime, nexttime) => {
      return prevtime - 1;
    });
  };

  const userResultCardCreator = () => {
    setResultCardBool(true);

    let newUserBool = true;
    let currentUsersData;
    let usersDataCopied = [...usersData];

    if (usersDataCopied.length > 0) {
      currentUsersData = usersDataCopied.map((user, index) => {
        if (user.username === userNameFromInput) {
          newUserBool = false;
          user.userdata.push({
            correct,
            keystrokes,
            wpm,
            accuracy,
            misspelled,
            charCodes,
          });
          return user;
        }
        return user;
      });
      setUsersData(currentUsersData);
    }

    if (newUserBool) {
      currentUsersData = [
        ...usersDataCopied,
        {
          username: userNameFromInput,
          userdata: [
            {
              correct,
              keystrokes,
              wpm,
              accuracy,
              misspelled,
              charCodes,
            },
          ],
        },
      ];

      setUsersData(currentUsersData);
    }

    localStorage.setItem("usersData", JSON.stringify(currentUsersData));

    console.log(charCodes);

    return setUserData({
      correct,
      keystrokes,
      wpm,
      accuracy,
      misspelled,
    });
  };

  useEffect(() => {
    setWpm((prev, next) => {
      if (increasingTimeRecording > 1) {
        let timeRemainingMinFraction = parseInt(increasingTimeRecording) / 60;

        if (accuracy > 94 && wpm > 40) setFlameAnimationBoolean(true);
        else setFlameAnimationBoolean(false);

        return parseInt(correct ? correct / timeRemainingMinFraction : 0);
      }
      return 0;
    });
  }, [increasingTimeRecording]);

  useEffect(() => {
    if (wordIndex % 27 === 0 && wordIndex > 0) {
      activeParagraphLoader();
    }
  }, [wordIndex]);

  useEffect(() => {
    StatingParaLaoder();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarted) {
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
      userResultCardCreator();
      setResultCardBool(true);
      restartButtonHandler();
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (resultCardBool) {
      const timeout = setTimeout(() => {
        setResultCardBool(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [paragraphArray]);

  useEffect(() => {
    setTimeout(() => {
      setChallengeAreaBool(false);
      setSelectedWord(paragraphArray[0]);
      activeParagraphLoader();
      if (localStorage.getItem("usersData"))
        setUsersData(JSON.parse(localStorage.getItem("usersData")));
      else localStorage.setItem("usersData", JSON.stringify(usersData));
    }, 700);
  }, [paragraphArray]);

  return (
    <div className="h-screen">
      <InitialModal
        modalIsOpen={modalIsOpen}
        setUserNameFromInput={setUserNameFromInput}
        modalHandler={modalHandler}
      />

      <div>
        <Header userName={userNameFromInput} />
      </div>
      <div
        style={{ backGround: "#F3F2EF" }}
        className="grid grid-cols-8 gap-2 bgwhite  mx-4 p-4 mt-12 challengeArea"
      >
        
        <UserChart userStat={userStat} momentsArray={momentsArray} charCodesArray={charCodesArray} chartBool={chartBool} chartCloseHandler={chartCloseHandler}/>

        <div className="col-span-2 lg:col-span-1 p-0 bg-transparent ">
          <Detailscontext.Provider
            value={{ correct, keystrokes, misspelled, wpm, accuracy, userData }}
          >
            <DetailsBar />
          </Detailscontext.Provider>
        </div>
        <div className="col-span-6 lg:col-span-5 min-width bg-green-500  pt-8 ">
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
              challengeAreaBool,
              inputTypingRestricted,
              accuracy,
              flameAnimationBoolean,
              modalIsOpen,
              userData,
              resultCardBool,
            }}
          >
            <TypingChallenge />
          </ParagraphContext.Provider>
        </div>
        <div className="hidden lg:block lg:col-span-2 p-8 bg-transparent">
          <HistoryBar
            chartBuilderHandler={chartBuilderHandler}
            chartInfos={chartInfos}
            setChartInfos={setChartInfos}
            usersData={usersData}
            userNameFromInput={userNameFromInput}
            timerStarted={timerStarted}
            deleteUserName={deleteUserName}
          />
        </div>
      </div>
      <div className=" mx-4 p-4">
        <Footer>{}</Footer>
      </div>
    </div>
  );
};

export default App;
