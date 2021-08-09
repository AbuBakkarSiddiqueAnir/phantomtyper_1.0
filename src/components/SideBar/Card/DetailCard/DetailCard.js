import React from 'react';


const DetailCard = ({scoreUpdatingValue, cardDetail}) => {

    return (
        <div className="mt-4">
            <h3 className="text-xl box-shadow bg-green-500  text-gray-800 pl-0 text-center py-4 font-semibold">{cardDetail}<br></br><span className=" text-xl">{scoreUpdatingValue}</span></h3>
        </div>
    )
}


export default DetailCard;