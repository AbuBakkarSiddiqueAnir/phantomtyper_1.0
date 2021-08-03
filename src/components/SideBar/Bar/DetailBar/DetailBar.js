import React from 'react';
import DetailCard from "../../Card/DetailCard/DetailCard";
import Detailscontext from "../../../../contexts/detailscontext"


const DetailsBar = ({}) => {
    return (
        <div>
            <Detailscontext.Consumer>
            {
                (correct) => (
                    <DetailCard correct={correct}/>
                )
            }
          </Detailscontext.Consumer>
           
        </div>
    )
}


export default DetailsBar