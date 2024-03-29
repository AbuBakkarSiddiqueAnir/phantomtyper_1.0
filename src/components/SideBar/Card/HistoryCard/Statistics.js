import React, { useState, useEffect } from "react";

const Statistics = ({
  user,
  USER_NAME_FROM_INPUT,
  ChartDataBuilder,
  TIMER_STARTED_BOOLEAN,
  DeleteUserNameHandler
}) => {
  const [userAvgStat, setUserAvgStat] = useState({});

  useEffect(() => {
    let sumOfAccuracy = 0,
      avgAccuracy,
      sumOfWpm = 0,
      avgWpm,
      noOfChallenge = 0;

    user.userdata.map((datam) => {
      sumOfAccuracy += datam.ACCURACY;
      sumOfWpm += datam.WPM;
      noOfChallenge++;
    });

    avgAccuracy = Math.ceil(sumOfAccuracy / user.userdata.length);
    avgWpm = Math.ceil(sumOfWpm / user.userdata.length);

    setUserAvgStat({
      avgWpm,
      avgAccuracy,
      noOfChallenge,
    });
  }, [TIMER_STARTED_BOOLEAN]);

  return (
    <div>
      <div className="card-statistics ">
        <div className="statistics bg-gray-200  text-sm pl-2 pt-2">
          {userAvgStat.avgAccuracy > 30 && userAvgStat.avgAccuracy > 90
            ? "You are good"
            : "You will do great"}

          <div
            style={{ paddingLeft: "20%" }}
            className=" text-lg font-semibold pt-4"
          >
            <div>{userAvgStat.noOfChallenge} times</div>
            <div>accuracy: {userAvgStat.avgAccuracy}</div>
            <div>wpm: {userAvgStat.avgWpm}</div>
          </div>
        </div>

        <div
        style={{background:'#B9EDDD'}}

          className={
            user.username === USER_NAME_FROM_INPUT
              ? "user-data-area bg-green-500"
              : "user-data-area bg-white"
          }
        >
          <div className="statistics-title">
            <div>Statistics</div>
            <button
              onClick={() => ChartDataBuilder(user)}
              className="graph-link underline bg rounded-md px-1"
            >
              Stat
            </button>
          </div>

          <div className="user-name-area text-lg">
            <span> {user.username}</span>
            {user.username === USER_NAME_FROM_INPUT ? (
              <button
                onClick={() => DeleteUserNameHandler(user)}
                className="text-red-600 underline mt-1"
              >
                <i className="delete icon text-xl"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
