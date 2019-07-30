import React, {Component} from 'react';

import axios from 'axios';

class Axios extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [],
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                this.setState({posts : response.data });
            });
    }

    render(){
        return(
            <div>
            <h1>haii</h1>
            {this.state.posts.map(post => {return <h1>{post.title}</h1>})}
            </div>
        )
    }
}



export default Axios;