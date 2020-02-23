import React, {Component} from 'react';

class Station extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nate'
        };
    }

    render(){
        return (
            <h2>{this.state.name}</h2>
        )
    }
};

export default Nate;