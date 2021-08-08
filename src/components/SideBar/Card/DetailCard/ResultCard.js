import React from 'react';

import { Spring, animated, useSpring } from "react-spring";



const ResultCard = ({userData, resultCardBool}) => {

    const styles = useSpring({
      
        from: { opacity: 0, marginLeft: -190 },
        to: { opacity: 0.9, marginLeft: 20 },
        delay: 3000,

      });

    return (
            <div>
                {
                    resultCardBool ? (
                        <animated.div style={resultCardBool ? {...styles}: null } className="w-80 h-48 mt-8  bg-gray-100 box-shadow">
                        {
                            (
                                <div className="flex gap-2">
                                    <div className="h-48 w-40 bg-blue-400 flex justify-center flex-col items-center">
                                        <span className="text-6xl">{userData.wpm}</span>
                                        <span>wpm</span>
                                    </div>
                
                                    <div className="w-60 h-48 flex bg-blue-200 flex-col justify-around pl-8 ">
                                        <div>                                   
                                               <span>{userData.keystrokes}  <span>keyStrokes</span></span>    
                                        </div>
                                                
                                        <div>                               
                                                <span> {userData.correct} <span>correct</span></span>
                                        </div>
                    
                                        <div>                                 
                                                <span>  {userData.misspelled} <span>misspelled</span></span>
                                        </div>
                                        <div>                                  
                                                <span> {userData.accuracy}% <span>accuracy</span></span>
                                        </div>
                                    </div>
                
                               
                              </div>
                            )
                        }
                     
                 </animated.div>
                    ) : (
                         null
                    )
                }
            </div>
       
    )
}


export default ResultCard;