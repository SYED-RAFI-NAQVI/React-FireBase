import React from 'react';
import inputHandler from './App'
const Person = (props) => {
   return(
       <div>
          <p> I am a {props.name} { props.age } </p>
          <p>{props.children}</p>
          <input onChange = {inputHandler} />
       </div>
   )
};

export default Person;