import React, { useState, useEffect } from "react";
import LoginModal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import DetailsBar from "./components/SideBar/Bar/DetailBar/DetailBar";
import HistoryBar from "./components/SideBar/Bar/HistoryBar/HistoryBar";
import TypingChallenge from "./components/TestContainer/TypingChallenge/TypingChallenge";
import UserChart from "./components/Chart/UserChart";
import typingTestData from "./data/exampleText";
import ParagraphContext from "./contexts/paragraphContext";
import Detailscontext from "./contexts/detailscontext";
import helperMethods from "./helper/helper";
import "./App.css";

const App = () => {
  const [TIMER_STARTED_BOOLEAN, setTIMER_STARTED_BOOLEAN] = useState(false);
  const [TIMER_TRACKER_BOOLEAN, setTIMER_TRACKER_BOOLEAN] = useState(false);
  const [CHALLENGE_AREA_BOOLEAN, setCHALLENGE_AREA_BOOLEAN] = useState(true);
  const [CHARACTER_BOOLEAN, setCHARACTER_BOOLEAN] = useState(true);
  const [MODAL_IS_OPEN, setMODAL_IS_OPEN] = useState(true);
  const [RESULT_CARD_BOOLEAN, setRESULT_CARD_BOOLEAN] = useState(false);
  const [CHART_IS_OPEN, setCHART_IS_OPEN] = useState(false);

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
  const [USER_STAT, setUSER_STAT] = useState({});
  const [USER_NAME_FROM_INPUT, setUSER_NAME_FROM_INPUT] = useState("");

  const [CHAR_CODES, setCHAR_CODES] = useState([]);
  const [PREV_MOMENT, setPREV_MOMENT] = useState(0);
  const [MOMENTS_ARRAY, setMOMENTS_ARRAY] = useState([]);
  const [CHAR_CODES_ARRAY, setCHAR_CODES_ARRAY] = useState([]);


  const ChallengeRestartButtonHandler = () => {
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
    setTIMER_TRACKER_BOOLEAN(false);
    helperMethods.paragraphArraySetter(
      setPARAGRAPH_ARRAY,
      helperMethods.randomParagraphSelector,
      typingTestData
    );
  };


  const ChartDataBuilder = (user) => {
    helperMethods.dataBuilder({
      user,
      TIMER_STARTED_BOOLEAN,
      setTIMER_STARTED_BOOLEAN,
      setUSER_STAT,
      setCHAR_CODES_ARRAY,
      setMOMENTS_ARRAY,
      setCHART_IS_OPEN,
      setTIMER_TRACKER_BOOLEAN
    });
  };


  const ChartCloseHandler = () => {
    setCHART_IS_OPEN(false);
   if(TIMER_TRACKER_BOOLEAN){
    setTIMER_STARTED_BOOLEAN(true);
    setTIMER_TRACKER_BOOLEAN(false);
   } 
  };


  const DeleteUserNameHandler = (user) => {
    helperMethods.deleteUser(user, setUSERS_DATA);
  };


  const StatingParaLoader = () => {
    helperMethods.paragraphArraySetter(
      setPARAGRAPH_ARRAY,
      helperMethods.randomParagraphSelector,
      typingTestData
    );
  };


  const OnKeyPressHandler = (event) => {
    helperMethods.keyPress(helperMethods.wordMatchChecker, {
      event,
      CORRECT,
      CHAR_CODES,
      SELECTED_WORD,
      TYPING_WORD,
      WORD_BOOLEANS,
      MISSPELLED,
      PREV_MOMENT,
      WORD_INDEX,
      PARAGRAPH_ARRAY,
      setWORD_INDEX,
      ChallengeRestartButtonHandler,
      setMISSPELLED,
      setCORRECT,
      setTYPING_WORD,
      setWORD_BOOLEANS,
      setACCURACY,
      setSELECTED_WORD,
      setKEY_STROKES,
      setTIMER_STARTED_BOOLEAN,
      setCHAR_CODES,
      setPREV_MOMENT,
    });
  };


  const ActiveParaHandler = () => {
    ChallengeRestartButtonHandler();
  };


  const activeParagraphLoader = () => {
    setWORD_BOOLEANS([]);
    let [slicedParagraph, index] = helperMethods.paragraphSlicer(
      PARAGRAPH_ARRAY,
      SLICER_INDEX
    );
    setACTIVE_PARAGRAPH(slicedParagraph);
    setSLICER_INDEX(index);
  };


  const modalHandler = () => {
    if (USER_NAME_FROM_INPUT !== "") setMODAL_IS_OPEN(false);
  };


  const wordMatchHandler = (event) => {
    helperMethods.characterMatch({
      event,
      SELECTED_WORD,
      setTYPING_WORD,
      setCHARACTER_BOOLEAN,
    });
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
    helperMethods.cardMaker({
      setRESULT_CARD_BOOLEAN,
      setUSERS_DATA,
      setUSER_DATA,
      USER_NAME_FROM_INPUT,
      CORRECT,
      KEY_STROKES,
      WPM,
      ACCURACY,
      MISSPELLED,
      CHAR_CODES,
      USERS_DATA,
    });
  };




  useEffect(() => {
    setWPM(() => {
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
    StatingParaLoader();
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
    if (TIME_REMAINING < 1 && TIME_REMAINING !== "") {
      setTIMER_STARTED_BOOLEAN(false);
      userResultCardCreator();
      setRESULT_CARD_BOOLEAN(true);
      ChallengeRestartButtonHandler();
      setTIMER_TRACKER_BOOLEAN(false);
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
        className="grid grid-cols-8 gap-2 bgwhite  mx-4 p-4 mt-8 challengeArea"
      >
        <UserChart
          USER_STAT={USER_STAT}
          MOMENTS_ARRAY={MOMENTS_ARRAY}
          CHAR_CODES_ARRAY={CHAR_CODES_ARRAY}
          CHART_IS_OPEN={CHART_IS_OPEN}
          ChartCloseHandler={ChartCloseHandler}
        />

        <div className="col-span-2 lg:col-span-1 p-0 bg-transparent ">
          <Detailscontext.Provider
            value={{
              CORRECT,
              KEY_STROKES,
              MISSPELLED,
              WPM,
              ACCURACY,
              USER_DATA,
              USERS_DATA,
              DeleteUserNameHandler,
              USER_NAME_FROM_INPUT,
              ChartDataBuilder,
              TIMER_STARTED_BOOLEAN,
            }}
          >
            <DetailsBar />
          </Detailscontext.Provider>
        </div>

        <div className="col-span-6 lg:col-span-5 min-width bg-green-500  pt-8 ">
          <ParagraphContext.Provider
            value={{
              OnKeyPressHandler,
              TYPING_WORD,
              wordMatchHandler,
              ACTIVE_PARAGRAPH,
              ActiveParaHandler,
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
            ChartDataBuilder={ChartDataBuilder}
            USERS_DATA={USERS_DATA}
            USER_NAME_FROM_INPUT={USER_NAME_FROM_INPUT}
            TIMER_STARTED_BOOLEAN={TIMER_STARTED_BOOLEAN}
            DeleteUserNameHandler={DeleteUserNameHandler}
            height={"43rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
