import React from 'react';


const DetailCard = ({scoreUpdatingValue, cardDetail}) => {

    return (
        <div>
            <h3 className="text-xl text-white pl-0 text-center pt-12 font-semibold">{cardDetail}<br></br><span className=" text-xl">{scoreUpdatingValue}</span></h3>
        </div>
    )
}


export default DetailCard;