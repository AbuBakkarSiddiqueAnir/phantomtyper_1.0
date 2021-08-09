import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({usersData}) => {
    console.log(usersData)
    return (
        <div style={{maxHeight:"37rem"}} className=" overflow-y-scroll">
            <Statistics/>
            <Statistics/>
            <Statistics/>
            <Statistics/>
      
        </div>
    )
}


export default HistoryBar