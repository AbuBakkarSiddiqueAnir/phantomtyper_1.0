import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({usersData, userNameFromInput, chartInfos, chartBuilderHandler}) => {
   
    return (
        <div style={{maxHeight:"37rem"}} className=" overflow-y-scroll">
           {
                usersData.map((user) =>(
                    <Statistics chartBuilderHandler={chartBuilderHandler} key={user.username} chartInfos={chartInfos} user={user} userNameFromInput={userNameFromInput}/>
                ))
           } 
      
        </div>
    )
}


export default HistoryBar