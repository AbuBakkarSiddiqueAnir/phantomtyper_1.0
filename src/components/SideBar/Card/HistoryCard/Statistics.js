import React from 'react';



const Statistics = ({user, userNameFromInput, chartBuilderHandler}) => {
    
    return (
        <div>
           <div className="card-statistics">
               <div className="statistics pl-2 pt-2">Poor result</div>
               <div className="user-data-area" className={user.username === userNameFromInput ? "user-data-area bg-green-500" : "user-data-area bg-white"} >
                   <div className="statistics-title">
                       <div>Typing Statistics</div>
                       <button onClick={() => chartBuilderHandler(user)} className="graph-link">stat</button>
                   </div>
                   <div>
                       <div className="name-area"> {user.username}</div>
                   </div>

                   
               </div>
           </div>
        </div>
    )
}


export default Statistics;