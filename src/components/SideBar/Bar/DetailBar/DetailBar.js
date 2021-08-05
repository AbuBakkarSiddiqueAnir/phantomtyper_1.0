import React from 'react';
import DetailCard from "../../Card/DetailCard/DetailCard";
import Detailscontext from "../../../../contexts/detailscontext"


const DetailsBar = ({}) => {
    return (
        <div>
            <Detailscontext.Consumer>
            {
                ({correct,keystrokes}) => (
                    <DetailCard scoreUpdatingValue={correct}/>
                )
            }
          </Detailscontext.Consumer>
          <Detailscontext.Consumer>
            {
                ({correct,keystrokes}) => (
                    <DetailCard scoreUpdatingValue={keystrokes}/>
                )
            }
          </Detailscontext.Consumer>
           
        </div>
    )
}


export default DetailsBar