import React from 'react';

import { Spring, animated, useSpring } from "react-spring";



const ResultCard = ({userData, ResultCardBool}) => {

    const styles = useSpring({
      
        from: { opacity: 0, marginLeft: -190 },
        to: { opacity: 0.9, marginLeft: 20 },
        delay: 3000,

      });

    return (
        <animated.div style={{...styles}} className="w-2/5 h-48  bg-gray-100 flex box-shadow">
            {
                (
                    <div className=" grid grid-cols-5 justify-around gap-2">
                        <div className="h-full col-span-2 bg-blue-500 ">
                            <span className="">{userData.wpm}</span>
                            <span>wpm</span>
                        </div>
    
                        <div className="h-full col-span-3 bg-blue-500">
                            <div>
                                   <span>{userData.keystrokes}</span>
                                   <span> keyStrokes</span>    
                            </div>
                                    
                            <div>
                                    <span>{userData.correct}</span>
                                    <span>correct</span>
                            </div>
        
                            <div>
                                    <span>{userData.misspelled}</span>
                                    <span>correct</span>
                            </div>
                            <div>
                                    <span>{userData.accuracy}</span>
                                    <span>correct</span>
                            </div>
                        </div>
    
                   
                  </div>
                )
            }
         
     </animated.div>
    )
}


export default ResultCard;