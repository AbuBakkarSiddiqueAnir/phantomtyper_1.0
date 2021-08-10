import React from 'react';
import Modal from 'react-modal';
import { Bar } from "react-chartjs-2";



const UserChart = ({chartBool, momentsArray, charCodesArray,chartCloseHandler}) => {
    console.log()
   return (
        <Modal
            isOpen={chartBool}
                className="relative justify-center items-center  flex bg-transparent w-full h-full"
            >
            <button className="absolute top-3.5  text-3xl font-semibold"  onClick={chartCloseHandler}>close</button>
            <div className="w-5/6 h-5/6 bg-gray-700 flex justify-center items-center shadow-2xl flex-col">
                
       <Bar
         data={ {
            labels: charCodesArray,
            datasets : [
                {
                    label : "Time expense",
                    data : momentsArray,
                    backgroundColor : [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, .8)',
                        'rgba(255, 206, 86, 0.9)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.9)',
                        'rgba(255, 159, 64, 0.8)'
                    ]
                }
            ]
           
            }}
            height = {400}
            width = {600}
            options = {
                {
                    maintainAspectRatio : false,
                    scales: {
                        yAxes: [
                            {
                                ticks : {
                                    beginAtZero : true
                                }
                            }
                        ]
                    }
                }

            }

        
       />

    
    
      </div>
            
 
      </Modal>
   )
}



export default UserChart;