const helperMethods = {
  randomParagraphSelector: (list) => {
    return list[Math.floor(Math.random() * list.length)];
  },

  paragraphSlicer: (paragraph, SLICER_INDEX) => {
    return [
      paragraph.slice(SLICER_INDEX, SLICER_INDEX + 46),
      SLICER_INDEX + 46,
    ];
  },

  wordMatchChecker: (firstWord, secondWord) => {
    if (firstWord)
      return (
        firstWord.props.children[0].replace(/\s+/g, "") ===
        secondWord.replace(/\s+/g, "")
      );

    return false;
  },

  paragraphArraySetter: (cb_setter, cb_selector, texts) => {
    cb_setter(
      cb_selector(texts)
        .split(" ")
        .map((word, index) => {
          return (
            <span key={index}>
              {word} {""}
            </span>
          );
        })
    );
  },

  dataBuilder: ({
    user,
    TIMER_STARTED_BOOLEAN,
    setTIMER_STARTED_BOOLEAN,
    setUSER_STAT,
    setCHAR_CODES_ARRAY,
    setMOMENTS_ARRAY,
    setCHART_IS_OPEN,
    setTIMER_TRACKER_BOOLEAN
  }) => {

    if(TIMER_STARTED_BOOLEAN) setTIMER_TRACKER_BOOLEAN(true);
    setTIMER_STARTED_BOOLEAN(false);

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
      sumOfAccuracy += datam.ACCURACY;
      sumOfCorrect += datam.CORRECT;
      sumOfKeyStrokes += datam.KEY_STROKES;
      sumOfWpm += datam.WPM;
      sumOfMisspelled += datam.MISSPELLED;
      arrayOfCharCodes = [...arrayOfCharCodes, datam.CHAR_CODES];
    });

    avgAccuracy = sumOfAccuracy / user.userdata.length;
    avgCorrect = sumOfCorrect / user.userdata.length;
    avgMisspelled = sumOfMisspelled / user.userdata.length;
    avgKeystrokes = sumOfKeyStrokes / user.userdata.length;
    avgWpm = sumOfWpm / user.userdata.length;

    setUSER_STAT({
      avgKeystrokes,
      avgCorrect,
      avgWpm,
      avgMisspelled,
      avgAccuracy,
    });

    console.log(arrayOfCharCodes);

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
      if (momentObj.charCode === 32) {
        charCodesArr.push("space");
      } else {
        charCodesArr.push(String.fromCharCode(momentObj.charCode));
      }
    });
    setMOMENTS_ARRAY(momentsArr);
    setCHAR_CODES_ARRAY(charCodesArr);
    setCHART_IS_OPEN(true);
  },

  deleteUser: (user, cb_users) => {
    let userPermission = prompt("To delete your statistics, type 'yes'.");
    if (userPermission === "yes") {
      let prevUsersData = [...JSON.parse(localStorage.getItem("usersData"))];
      let newUsersData = [];
      prevUsersData.map((userObj, index) => {
        if (user.username === userObj.username) {
          return;
        }
        newUsersData.push(userObj);
      });
      cb_users(newUsersData);
      localStorage.setItem("usersData", JSON.stringify(newUsersData));
    }
  },

  keyPress: (
    match_checker,
    {
      event,
      CORRECT,
      MISSPELLED,
      CHAR_CODES,
      SELECTED_WORD,
      TYPING_WORD,
      WORD_BOOLEANS,
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
    }
  ) => {
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

      let matchingIssues = match_checker(SELECTED_WORD, TYPING_WORD);

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
        ChallengeRestartButtonHandler();
    }
  },

  characterMatch : ({event,SELECTED_WORD,setTYPING_WORD,setCHARACTER_BOOLEAN}) => {

    setTYPING_WORD(event.target.value);
    if (SELECTED_WORD) {
      let char1 = SELECTED_WORD.props.children[0];
      let char2 = event.target.value.replace(/\s+/g, "");
      if (char2 !== char1.substring(0, char2.length)) {
        setCHARACTER_BOOLEAN(false);
      } else {
        setCHARACTER_BOOLEAN(true);
      }
    }
  }, 
  

  cardMaker : ({
    setRESULT_CARD_BOOLEAN,
    setUSERS_DATA,
    CORRECT,
    KEY_STROKES,
    WPM,
    ACCURACY,
    MISSPELLED,
    USER_NAME_FROM_INPUT,
    setUSER_DATA,
    CHAR_CODES,
    USERS_DATA}) => {   
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

    setUSER_DATA({
      CORRECT,
      KEY_STROKES,
      WPM,
      ACCURACY,
      MISSPELLED,
    });
  }
};

export default helperMethods;


