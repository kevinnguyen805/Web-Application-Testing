import React from 'react'


const Dashboard = (props) => {

     return (
          <div>
               <button data-testid="strike-counter" onClick={props.strikeCount}>Strike Counter</button>
               <button onClick={props.ballCount}>Ball Counter</button>
               <button onClick={props.foul}>Foul</button>
               <button onClick={props.hit}>Hit </button>
          </div>
     )
}
export default Dashboard