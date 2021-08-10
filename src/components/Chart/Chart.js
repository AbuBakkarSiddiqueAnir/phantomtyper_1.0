import React from 'react';
import Modal from 'react-modal';
import {Bar} from "react-chartjs-2";



const Chart = ({charBool, momentsArray, charCodesArray}) => {
    console.log()
   return (
        <Modal
            isOpen={charBool}
                className=" justify-center items-center  flex bg-transparent w-full h-full"
            >
         
            <div className="w-3/4 h-3/4 bg-green-800 flex justify-center items-center shadow-2xl flex-col">
       

     
    
      </div>
            
 
      </Modal>
   )
}



export default Chart;