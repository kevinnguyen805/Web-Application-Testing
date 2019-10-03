import React from 'react'


const Display = (props) => {

     return(
          <div>
               <h3>Balls</h3>
               <p data-testid="ball-counter">{props.balls}</p>

               <h3>Strikes</h3>
               <p>{props.strikes}</p>
          </div>
     )
}
export default Display