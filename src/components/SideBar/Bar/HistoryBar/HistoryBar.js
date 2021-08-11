import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({height,usersData,deleteUserName, userNameFromInput, chartInfos, chartBuilderHandler,timerStarted}) => {
   
    return (
        <div>
           { usersData.length > 0 ? ( <div style={{maxHeight:height}} className=" overflow-y-scroll">
           {
                usersData.map((user) =>(
                    <Statistics deleteUserName={deleteUserName} timerStarted={timerStarted} chartBuilderHandler={chartBuilderHandler} key={user.username} chartInfos={chartInfos} user={user} userNameFromInput={userNameFromInput}/>
                ))
           } 
      
        </div>) :(
            <div style={{maxHeight:"45rem"}} className="flex font-semibold justify-center items-center mt-32">
                <span className="text-2xl"> your typing performance statistics will be here</span> 
            </div>
        )}
        </div>
       
    )
}


export default HistoryBar