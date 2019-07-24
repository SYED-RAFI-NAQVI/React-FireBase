import React, { useState } from "react";
import './App.css';
// import Person from './Person'


function App () {
  const [state, setState] = useState({
    name : '',
  });
  

  const inputHandler = (e) => {
    setState(
      {
        name:e.target.value,
        aw: 'Is Awsome',
      }
    )
  }
  

const buttonHandler = () => {
  console.log('haii')
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 onChange = {inputHandler}>FireBase {state.aw}</h1>
        <input className = "int" onChange = {inputHandler}/>
        <button className = "btn" onClick = {buttonHandler} >submit</button>
        <p>{state.name}</p>
      </header>
    </div>
  );
}




export default App;
