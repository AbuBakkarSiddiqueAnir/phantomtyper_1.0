import React from 'react';
import Statistics from "../../Card/HistoryCard/Statistics"


const HistoryBar = ({usersData, userNameFromInput}) => {
   
    return (
        <div style={{maxHeight:"37rem"}} className=" overflow-y-scroll">
           {
                usersData.map((user) =>(
                    <Statistics key={user.username} user={user} userNameFromInput={userNameFromInput}/>
                ))
           } 
      
        </div>
    )
}


export default HistoryBar