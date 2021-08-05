import React from 'react';
import DetailCard from "../../Card/DetailCard/DetailCard";
import Detailscontext from "../../../../contexts/detailscontext"


const DetailsBar = ({}) => {
    return (
        <div>
            <Detailscontext.Consumer>
            {
                ({correct}) => (
                    <DetailCard scoreUpdatingValue={correct}/>
                )
            }
          </Detailscontext.Consumer>
          <Detailscontext.Consumer>
            {
                ({keystrokes}) => (
                    <DetailCard scoreUpdatingValue={keystrokes}/>
                )
            }
          </Detailscontext.Consumer>
          <Detailscontext.Consumer>
            {
                ({misspelled}) => (
                    <DetailCard scoreUpdatingValue={misspelled}/>
                )
            }
          </Detailscontext.Consumer>
          <Detailscontext.Consumer>
            {
                ({wpm}) => (
                    <DetailCard scoreUpdatingValue={wpm}/>
                )
            }
          </Detailscontext.Consumer>
           
        </div>
    )
}


export default DetailsBar