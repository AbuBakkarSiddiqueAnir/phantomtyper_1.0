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
        {({ KEY_STROKES }) => (
          <DetailCard cardDetail={"strokes"} scoreUpdatingValue={KEY_STROKES} />
        )}
      </Detailscontext.Consumer>

      <Detailscontext.Consumer>
        {({ WPM }) => (
          <DetailCard cardDetail={"WPM"} scoreUpdatingValue={WPM} />
        )}
      </Detailscontext.Consumer>
      <Detailscontext.Consumer>
        {({ ACCURACY }) => (
          <DetailCard cardDetail={"accuracy"} scoreUpdatingValue={ACCURACY} />
        )}
      </Detailscontext.Consumer>
      <div className="mt-4">
        {isSmallerThanlaptop && (
          <Detailscontext.Consumer>
            {({
              USERS_DATA,
              DeleteUserName,
              USER_NAME_FROM_INPUT,
              ChartDataBuilder,
              TIMER_STARTED_BOOLEAN,
            }) => (
              <HistoryBar
                height={"28rem"}
                USERS_DATA={USERS_DATA}
                USER_NAME_FROM_INPUT={USER_NAME_FROM_INPUT}
                TIMER_STARTED_BOOLEAN={TIMER_STARTED_BOOLEAN}
                ChartDataBuilder={ChartDataBuilder}
                DeleteUserName={DeleteUserName}
              />
            )}
          </Detailscontext.Consumer>
        )}
      </div>
    </div>
  );
};

export default DetailsBar;
