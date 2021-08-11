import React, { useState, useEffect } from "react";

const Statistics = ({
  user,
  userNameFromInput,
  chartBuilderHandler,
  timerStarted,
  deleteUserName
}) => {
  const [userAvgStat, setUserAvgStat] = useState({});

  useEffect(() => {
    let sumOfAccuracy = 0,
      avgAccuracy,
      sumOfWpm = 0,
      avgWpm,
      noOfChallenge = 0;

    user.userdata.map((datam) => {
      sumOfAccuracy += datam.accuracy;
      sumOfWpm += datam.wpm;
      noOfChallenge++;
    });

    avgAccuracy = Math.ceil(sumOfAccuracy / user.userdata.length);
    avgWpm = Math.ceil(sumOfWpm / user.userdata.length);

    setUserAvgStat({
      avgWpm,
      avgAccuracy,
      noOfChallenge,
    });
  }, [timerStarted]);

  return (
    <div>
      <div className="card-statistics ">
        <div className="statistics bg-gray-200  text-lg pl-2 pt-2">
          {userAvgStat.avgAccuracy > 30 && userAvgStat.avgAccuracy > 90
            ? "Good"
            : "Poor"}

          <div style={{paddingLeft:"20%"}} className=" text-lg font-semibold pt-4">
            <div>{userAvgStat.noOfChallenge} times</div>
            <div>accuracy: {userAvgStat.avgAccuracy}</div>
            <div>wpm: {userAvgStat.avgWpm}</div>
          </div>
        </div>

        <div
          className="user-data-area"
          className={
            user.username === userNameFromInput
              ? "user-data-area bg-green-500"
              : "user-data-area bg-white"
          }
        >
          <div className="statistics-title">
            <div>Statistics</div>
            <button
              onClick={() => chartBuilderHandler(user)}
              className="graph-link  bg-green-500 shadow-xl underline bg rounded-md px-1"
            >
              Stat
            </button>
          </div>
          
            <div className="user-name-area text-xl">
                <span> {user.username}</span> 
                {
                    user.username === userNameFromInput ? (
                        <button onClick={() => deleteUserName(user)} className="text-red-600 underline mt-1"><i className="delete icon text-xl"></i></button>
                    ) : null
                }
               
                
            </div>

            
          
        </div>
      </div>
    </div>
  );
};

export default Statistics;
