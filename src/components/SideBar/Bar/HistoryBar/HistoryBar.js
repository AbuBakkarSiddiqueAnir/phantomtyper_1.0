import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({usersData, userNameFromInput, chartInfos, chartBuilderHandler,timerStarted}) => {
   
    return (
        <div style={{maxHeight:"45rem"}} className=" overflow-y-scroll">
           {
                usersData.map((user) =>(
                    <Statistics timerStarted={timerStarted} chartBuilderHandler={chartBuilderHandler} key={user.username} chartInfos={chartInfos} user={user} userNameFromInput={userNameFromInput}/>
                ))
           } 
      
        </div>
    )
}


export default HistoryBar