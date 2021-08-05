import React from 'react';
import DetailCard from "../../Card/DetailCard/DetailCard";
import Detailscontext from "../../../../contexts/detailscontext"


const DetailsBar = ({}) => {
    return (
        <div>
            <Detailscontext.Consumer>
            {
                ({keystrokes}) => (
                    <DetailCard cardDetail={"strokes"} scoreUpdatingValue={keystrokes}/>
                )
            }
          </Detailscontext.Consumer>
            {/* <Detailscontext.Consumer>
            {
                ({correct}) => (
                    <DetailCard cardDetail={"Correct"} scoreUpdatingValue={correct}/>
                )
            }
          </Detailscontext.Consumer> */}
          
          {/* <Detailscontext.Consumer>
            {
                ({misspelled}) => (
                    <DetailCard cardDetail={"Wrong"} scoreUpdatingValue={misspelled}/>
                )
            }
          </Detailscontext.Consumer> */}
          <Detailscontext.Consumer>
            {
                ({wpm}) => (
                    <DetailCard cardDetail={"wpm"} scoreUpdatingValue={wpm}/>
                )
            }
          </Detailscontext.Consumer>
          <Detailscontext.Consumer>
            {
                ({accuracy}) => (
                    <DetailCard cardDetail={"accuracy"} scoreUpdatingValue={accuracy}/>
                )
            }
          </Detailscontext.Consumer>
           
        </div>
    )
}


export default DetailsBar