import React, { useState } from "react";
import './App.css';
// import Person from './Person'


function App () {
  const [state, setState] = useState({
    name : '',
    isToggleOn : true,
  });
  

  const inputHandler = (e) => {
    setState(
      {
        name:e.target.value,
        isToggleOn : true,
      }
    )
  }
  
// Toggling button 
const buttonHandler = (e) => {
  e.preventDefault();
  setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>FireBase</h1>
        <input className = "int" onChange = {inputHandler}/>
        <button className = "btn" onClick = {buttonHandler}>submit</button>
        { 
         state.isToggleOn === true ? <p>{state.name}</p> : null
        }
      </header>
    </div>
  );
}




export default App;
