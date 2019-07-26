import React, { useState } from "react";
import './App.css';
// import Person from './Person'


function App () {
  const [state, setState] = useState({
    names : [{name: 'rafi', age: 20}, {name: 'vikranth', age: 21 }],
  });
  

  const inputHandler = (e) => {
    setState(
      {
        names:e.target.value,
      }
    )
  }

  
// clickToCreateElements
const buttonHandler = (e) => {
  e.preventDefault();
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>FireBase</h1>
        <input className = "int" onChange = {inputHandler}/>
        <button className = "btn" onClick = {buttonHandler}>submit</button>
        <p>{state.names}</p>
        {/* {
          state.names.map((name, index) => ({
          }))
        } */}
      </header>
    </div>
  );
}




export default App;
