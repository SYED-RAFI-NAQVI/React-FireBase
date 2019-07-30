import React, {Component} from 'react';
import './App.css';

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term:'',
            names : [],
          }
          this.buttonHandler = this.buttonHandler.bind(this)
        }    
        
        inputHandler = (e) => {
            e.preventDefault();
            this.setState({
                term:e.target.value,
            })
          }
         
        // clickToCreateElements
        buttonHandler = (e) => {
          e.preventDefault();
          this.setState({
            term:'',
            names:[...this.state.names,this.state.term]
          })
        }

        render() {
            return (
                <div>
                    <p>haii</p>
                    <input onChange = {this.inputHandler} />
                    <button onClick = {this.buttonHandler}>submit</button>
                    {this.state.names.map(name => <p>{name}</p>)}
                </div>
            )
         }
     }


export default New;

