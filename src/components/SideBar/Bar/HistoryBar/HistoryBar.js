import React, { useState, useEffect } from "react";
import Statistics from "../../Card/HistoryCard/Statistics";

const HistoryBar = ({
  height,
  USERS_DATA,
  deleteUserName,
  USER_NAME_FROM_INPUT,
  chartInfos,
  chartBuilderHandler,
  TIMER_STARTED_BOOLEAN,
}) => {
  return (
    <div>
      {USERS_DATA.length > 0 ? (
        <div style={{ maxHeight: height }} className=" overflow-y-scroll">
          {USERS_DATA?.map((user) => (
            <Statistics
              key={user.username}
              deleteUserName={deleteUserName}
              TIMER_STARTED_BOOLEAN={TIMER_STARTED_BOOLEAN}
              chartBuilderHandler={chartBuilderHandler}
              key={user.username}
              chartInfos={chartInfos}
              user={user}
              USER_NAME_FROM_INPUT={USER_NAME_FROM_INPUT}
            />
          ))}
        </div>
      ) : (
        <div
          style={{ maxHeight: "45rem" }}
          className="flex font-semibold justify-center items-center mt-32"
        >
          <span className="text-2xl">
            {" "}
            your typing performance statistics will be here
          </span>
        </div>
      )}
    </div>
  );
};

export default HistoryBar;
