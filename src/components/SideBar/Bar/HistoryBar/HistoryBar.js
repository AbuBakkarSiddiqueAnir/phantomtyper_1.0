import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({}) => {
    return (
        <div style={{maxHeight:"33rem"}} className=" overflow-y-scroll">
            <Statistics/>
            <Statistics/>
            <Statistics/>
            <Statistics/>
      
        </div>
    )
}


export default HistoryBar