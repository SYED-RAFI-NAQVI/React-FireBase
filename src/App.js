import React, { useState } from "react";
import './App.css';
// import Person from './Person'


function App () {
  const [state, setState] = useState({
    name : '',
    isToggleOn : false,
  });
  

  const inputHandler = (e) => {
    setState(
      {
        name:e.target.value,
        isToggleOn : false,
      }
    )
  }
  let show = null

if(state.isToggleOn === false) {
  show = (
  <p>{state.name}</p>
  )
}
  
// Toggling button 
const buttonHandler = (e) => {
  e.preventDefault();
  setState(state => ({
    name: state.name,
    isToggleOn: !state.isToggleOn
  }));
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>FireBase</h1>
        <input className = "int" onChange = {inputHandler}/>
        <button className = "btn" onClick = {buttonHandler}>submit</button>
        {show}
      </header>
    </div>
  );
}




export default App;
