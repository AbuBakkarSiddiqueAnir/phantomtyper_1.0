import React, { useState, useEffect } from "react";
import LoginModal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
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
  const [TIMER_STARTED_BOOLEAN, setTIMER_STARTED_BOOLEAN] = useState(false);
  const [CHALLENGE_AREA_BOOLEAN, setCHALLENGE_AREA_BOOLEAN] = useState(true);
  const [CHARACTER_BOOLEAN, setCHARACTER_BOOLEAN] = useState(true);
  const [MODAL_IS_OPEN, setMODAL_IS_OPEN] = useState(true);
  const [RESULT_CARD_BOOLEAN, setRESULT_CARD_BOOLEAN] = useState(false);
  const [CHART_IS_OPEN,setCHART_IS_OPEN] = useState(false);

  const [TIME_REMAINING, setTIME_REMAINING] = useState(60);
  const [RECORD_INCREASE, setRECORD_INCREASE] = useState(0);
  const [WPM, setWPM] = useState(0);

  const [KEY_STROKES, setKEY_STROKES] = useState(0);
  const [ACCURACY, setACCURACY] = useState(0);
  const [CORRECT, setCORRECT] = useState(0);
  const [MISSPELLED, setMISSPELLED] = useState(0);
  const [PARAGRAPH_ARRAY, setPARAGRAPH_ARRAY] = useState([]);
  const [ACTIVE_PARAGRAPH, setACTIVE_PARAGRAPH] = useState([]);
  const [WORD_BOOLEANS, setWORD_BOOLEANS] = useState([]);
  const [TYPING_WORD, setTYPING_WORD] = useState("");
  const [WORD_INDEX, setWORD_INDEX] = useState(0);
  const [SLICER_INDEX, setSLICER_INDEX] = useState(0);
  const [SELECTED_WORD, setSELECTED_WORD] = useState("");
  const [USERS_DATA, setUSERS_DATA] = useState([]);
  const [USER_DATA, setUSER_DATA] = useState({});
  const [USER_STAT, setUSER_STAT] = useState({})
  const [USER_NAME_FROM_INPUT, setUSER_NAME_FROM_INPUT] = useState("");

  const [CHAR_CODES, setCHAR_CODES] = useState([]);
  const [PREV_MOMENT, setPREV_MOMENT] = useState(0);
  const [MOMENTS_ARRAY, setMOMENTS_ARRAY] = useState([]);
  const [CHAR_CODES_ARRAY, setCHAR_CODES_ARRAY] = useState([]);

  const paragraphArraySetter = () => {
    setPARAGRAPH_ARRAY(
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
    setCORRECT(0);
    setACTIVE_PARAGRAPH([]);
    setTYPING_WORD("");
    setPARAGRAPH_ARRAY([]);
    setSLICER_INDEX(0);
    setSELECTED_WORD("");
    setWORD_INDEX(0);
    setTIMER_STARTED_BOOLEAN(false);
    setTIME_REMAINING(60);
    setWORD_BOOLEANS([]);
    setKEY_STROKES(0);
    setMISSPELLED(0);
    setWPM(0);
    setACCURACY(0);
    setCHAR_CODES([]);
    setRECORD_INCREASE(0);
    setCHALLENGE_AREA_BOOLEAN(true);

    setPREV_MOMENT(0);
    paragraphArraySetter();
  };


  const chartBuilderHandler = (user) => {
    setTIMER_STARTED_BOOLEAN(false)
 
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

    setUSER_STAT({
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
    setMOMENTS_ARRAY(momentsArr);
    setCHAR_CODES_ARRAY(charCodesArr);
    setCHART_IS_OPEN(true);
  };


  const chartCloseHandler = () => {
    setCHART_IS_OPEN(false);
    setTIMER_STARTED_BOOLEAN(true)
  }


  // deleting logged in user

  const deleteUserName = (user) => {
    let userPermission = prompt("To delete your statistics, type 'yes'.")
    if(userPermission === "yes"){
      let prevUsersData = [...JSON.parse(localStorage.getItem("usersData"))];
      let newUsersData = []
      prevUsersData.map((userObj,index) => {
        if(user.username === userObj.username){
          return 
        }
        newUsersData.push(userObj)
      })
      setUSERS_DATA(newUsersData);
      localStorage.setItem("usersData", JSON.stringify(newUsersData)); 
    }
    
  }


  const StatingParaLaoder = () => {
    paragraphArraySetter();
  };


  const onKeyPressWordMatch = (event) => {
    setKEY_STROKES((prevStroke, currStroke) => {
      return prevStroke + 1;
    });

    setTIMER_STARTED_BOOLEAN(true);
   

    if (PREV_MOMENT > 1) {
      setCHAR_CODES([
        ...CHAR_CODES,
        {
          moment: new Date().getTime() - PREV_MOMENT,
          charCode: event.charCode,
        },
      ]);
      setPREV_MOMENT(0);
    }

    setPREV_MOMENT(new Date().getTime());

    if (event.charCode === 32) {
      setWORD_INDEX((prevIndex, currnetIndex) => prevIndex + 1);

      setTIMER_STARTED_BOOLEAN(true);
      setTYPING_WORD("");
      setSELECTED_WORD(PARAGRAPH_ARRAY[WORD_INDEX + 1]);

      setACCURACY((prevAcc, nextAcc) => {
        if (CORRECT > 0) {
          let total = parseInt(MISSPELLED) + parseInt(CORRECT);

          return Math.ceil((parseInt(CORRECT) / total) * 100);
        } else return 0;
      });

      let matchingIssues = wordMatchChecker(SELECTED_WORD, TYPING_WORD);

      setWORD_BOOLEANS([...WORD_BOOLEANS, matchingIssues]);

      if (matchingIssues)
        setCORRECT(
          (prevCorrect, nextCorrect) => (nextCorrect = prevCorrect + 1)
        );
      else
        setMISSPELLED((prevMisspelled, nextMisspelled) => {
          return prevMisspelled + 1;
        });

      if (PARAGRAPH_ARRAY.length - 2 < WORD_INDEX) 
        restartButtonHandler();
      
    }
  };


  const activeParaHandler = () => {
    restartButtonHandler();
  };


  const activeParagraphLoader = () => {
    setWORD_BOOLEANS([]);
    let [slicedParagraph, index] = paraSlicer(PARAGRAPH_ARRAY, SLICER_INDEX);
    setACTIVE_PARAGRAPH(slicedParagraph);
    setSLICER_INDEX(index);
  };


  const modalHandler = () => {
    if (USER_NAME_FROM_INPUT !== "") setMODAL_IS_OPEN(false);
  };


  const wordMatchHandler = (event) => {
    setTYPING_WORD(event.target.value);

    if (SELECTED_WORD) {
      let aa = SELECTED_WORD.props.children[0];
      let aaa = event.target.value.replace(/\s+/g, "");
      if (aaa !== aa.substring(0, aaa.length)) {
        setCHARACTER_BOOLEAN(false);
      } else {
        setCHARACTER_BOOLEAN(true);
      }
    }
  };


  const timeRemainingInputHandler = (event) => {
    if (!isNaN(event.target.value) && event.target.value[0] !== "0") {
      setTIME_REMAINING(event.target.value);
    }
  };


  const counter = () => {
    setRECORD_INCREASE((prevTime, nextTime) => {
      return prevTime + 1;
    });
    setTIME_REMAINING((prevtime, nexttime) => {
      return prevtime - 1;
    });
  };


  const userResultCardCreator = () => {
    setRESULT_CARD_BOOLEAN(true);

    let newUserBool = true;
    let currentUsersData;
    let usersDataCopied = [...USERS_DATA];

    if (usersDataCopied.length > 0) {
      currentUsersData = usersDataCopied.map((user, index) => {
        if (user.username === USER_NAME_FROM_INPUT) {
          newUserBool = false;
          user.userdata.push({
            CORRECT,
            KEY_STROKES,
            WPM,
            ACCURACY,
            MISSPELLED,
            CHAR_CODES,
          });
          return user;
        }
        return user;
      });
      setUSERS_DATA(currentUsersData);
    }

    if (newUserBool) {
      currentUsersData = [
        ...usersDataCopied,
        {
          username: USER_NAME_FROM_INPUT,
          userdata: [
            {
              CORRECT,
              KEY_STROKES,
              WPM,
              ACCURACY,
              MISSPELLED,
              CHAR_CODES,
            },
          ],
        },
      ];

      setUSERS_DATA(currentUsersData);
    }

    localStorage.setItem("usersData", JSON.stringify(currentUsersData));

    console.log(CHAR_CODES);

    return setUSER_DATA({
      CORRECT,
      KEY_STROKES,
      WPM,
      ACCURACY,
      MISSPELLED,
    });
  };


  useEffect(() => {
    setWPM((prev, next) => {
      if (RECORD_INCREASE > 1) {
        let timeRemainingMinFraction = parseInt(RECORD_INCREASE) / 60;

        return parseInt(CORRECT ? CORRECT / timeRemainingMinFraction : 0);
      }
      return 0;
    });
  }, [RECORD_INCREASE]);


  useEffect(() => {
    if (WORD_INDEX % 46 === 0 && WORD_INDEX > 0) {
      activeParagraphLoader();
    }
  }, [WORD_INDEX]);


  useEffect(() => {
    StatingParaLaoder();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      if (TIMER_STARTED_BOOLEAN) {
        counter();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [TIMER_STARTED_BOOLEAN]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (TIMER_STARTED_BOOLEAN) {
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [TIMER_STARTED_BOOLEAN, TIME_REMAINING]);


  useEffect(() => {
    if (TIME_REMAINING < 1 && TIME_REMAINING !== "") {
      setTIMER_STARTED_BOOLEAN(false);
      userResultCardCreator();
      setRESULT_CARD_BOOLEAN(true);
      restartButtonHandler();
    }
  }, [TIME_REMAINING]);


  useEffect(() => {
    if (RESULT_CARD_BOOLEAN) {
      const timeout = setTimeout(() => {
        setRESULT_CARD_BOOLEAN(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [PARAGRAPH_ARRAY]);


  useEffect(() => {
    setTimeout(() => {
      setCHALLENGE_AREA_BOOLEAN(false);
      setSELECTED_WORD(PARAGRAPH_ARRAY[0]);
      activeParagraphLoader();
      if (localStorage.getItem("usersData"))
        setUSERS_DATA(JSON.parse(localStorage.getItem("usersData")));
      else localStorage.setItem("usersData", JSON.stringify(USERS_DATA));
    }, 700);
  }, [PARAGRAPH_ARRAY]);

  
  return (
    <div className="h-screen font-serif">
      <LoginModal
        MODAL_IS_OPEN={MODAL_IS_OPEN}
        setUSER_NAME_FROM_INPUT={setUSER_NAME_FROM_INPUT}
        modalHandler={modalHandler}
      />

      <div>
        <Header userName={USER_NAME_FROM_INPUT} />
      </div>

      <div
        style={{ backGround: "#F3F2EF" }}
        className="grid grid-cols-8 gap-2 bgwhite  mx-4 p-4 mt-12 challengeArea"
      >
        
        <UserChart USER_STAT={USER_STAT} MOMENTS_ARRAY={MOMENTS_ARRAY} CHAR_CODES_ARRAY={CHAR_CODES_ARRAY} CHART_IS_OPEN={CHART_IS_OPEN} chartCloseHandler={chartCloseHandler}/>

        <div className="col-span-2 lg:col-span-1 p-0 bg-transparent ">
          <Detailscontext.Provider
            value={{ CORRECT, KEY_STROKES, MISSPELLED, WPM, ACCURACY, USER_DATA,USERS_DATA,deleteUserName, USER_NAME_FROM_INPUT, chartBuilderHandler,TIMER_STARTED_BOOLEAN }}
          >
            <DetailsBar />
          </Detailscontext.Provider>
        </div>

        <div className="col-span-6 lg:col-span-5 min-width bg-green-500  pt-8 ">
          <ParagraphContext.Provider
            value={{
              onKeyPressWordMatch,
              TYPING_WORD,
              wordMatchHandler,
              ACTIVE_PARAGRAPH,
              activeParaHandler,
              WORD_INDEX,
              TIME_REMAINING,
              timeRemainingInputHandler,
              CHARACTER_BOOLEAN,
              WORD_BOOLEANS,
              SELECTED_WORD,
              CHALLENGE_AREA_BOOLEAN,
              ACCURACY,
              MODAL_IS_OPEN,
              USER_DATA,
              RESULT_CARD_BOOLEAN,
            }}
          >
            <TypingChallenge />
          </ParagraphContext.Provider>
        </div>

        <div className="hidden lg:block lg:col-span-2 p-8 bg-transparent">
          <HistoryBar
            chartBuilderHandler={chartBuilderHandler}
            USERS_DATA={USERS_DATA}
            USER_NAME_FROM_INPUT={USER_NAME_FROM_INPUT}
            TIMER_STARTED_BOOLEAN={TIMER_STARTED_BOOLEAN}
            deleteUserName={deleteUserName}
            height={"45rem"}
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
