import React from "react";

import DetailCard from "../../Card/DetailCard/DetailCard";
import Detailscontext from "../../../../contexts/detailscontext";
import HistoryBar from "../../Bar/HistoryBar/HistoryBar";
import { useMediaQuery } from "react-responsive";

const DetailsBar = () => {
  const isSmallerThanlaptop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div>
      <Detailscontext.Consumer>
        {({ keystrokes }) => (
          <DetailCard cardDetail={"strokes"} scoreUpdatingValue={keystrokes} />
        )}
      </Detailscontext.Consumer>

      <Detailscontext.Consumer>
        {({ wpm }) => (
          <DetailCard cardDetail={"wpm"} scoreUpdatingValue={wpm} />
        )}
      </Detailscontext.Consumer>
      <Detailscontext.Consumer>
        {({ accuracy }) => (
          <DetailCard cardDetail={"accuracy"} scoreUpdatingValue={accuracy} />
        )}
      </Detailscontext.Consumer>
      <div className="mt-4">
        {isSmallerThanlaptop && (
          <Detailscontext.Consumer>
            {({
              usersData,
              deleteUserName,
              userNameFromInput,
              chartBuilderHandler,
              timerStarted,
            }) => (
              <HistoryBar
                height={"28rem"}
                usersData={usersData}
                userNameFromInput={userNameFromInput}
                timerStarted={timerStarted}
                chartBuilderHandler={chartBuilderHandler}
                deleteUserName={deleteUserName}
              />
            )}
          </Detailscontext.Consumer>
        )}
      </div>
    </div>
  );
};

export default DetailsBar;
