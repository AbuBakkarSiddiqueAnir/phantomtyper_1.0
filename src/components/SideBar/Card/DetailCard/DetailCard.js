import React from 'react';


const DetailCard = ({scoreUpdatingValue, cardDetail}) => {

    return (
        <div>
            <h3 className="text-xl pl-0 pt-12 font-semibold">{cardDetail}<br></br><span className="pl-20 text-4xl">{scoreUpdatingValue}</span></h3>
        </div>
    )
}


export default DetailCard;