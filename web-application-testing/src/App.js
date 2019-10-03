import React, {useState} from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  
  const strikeCount = () => {
    if (strikes >= 2){
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes+1)
    }
  }

  const ballCount = () => {
    if (balls >= 3){
      setBalls(0)
      setStrikes(0)
    } else{
      setBalls(balls+1)
    }
  }

  const foul = () => {
    setStrikes(2)
  }

  const hit = () => {
    setBalls(0)
    setStrikes(0)
  }



  return (
    <div className="App">

    <div className="display">
      <Display balls={balls} strikes={strikes}/>
    </div> 


    <div className="dashboard">
      <Dashboard strikeCount={strikeCount} ballCount={ballCount} foul={foul} hit={hit} />
    </div>

    </div>
  );
}

export default App;

/*
Objective: display how many balls and strikes are for the current batter

Rules: 
- on the third strike, then both balls + strikes will reset to 0
- on the 4th ball - balls + strikes will reset to 0
- if a hit is recorded - balls + strikes will reset to 0
- if a foul is recorded - strikes TO 2 
  - 0 strikes = 2 strikes
  1 strikes = 2 strikes
  2 strikes = 2 strikes 

Tests:
- test all these functions 
- test to make sure that we have the correct buttons 

*/
