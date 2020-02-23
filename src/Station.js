import React, {Component} from 'react';

import Stone from './Stone';
import Rule from './Rule';

class Station extends Component{

    constructor(props){
        super(props);
        this.state = {
            rules: [],
            stones: []
        }
    }

    addRule = (event) => {
        this.setState({
            rules: [...this.state.rules, "newRule"],
            stones: [...this.state.stones]
        });
    }

    render(){
        return(
            <div className="station">
                <h2 onClick={this.addRule}>Rules</h2>
                    {this.state.rules.map((rule, index) => <Rule key={index}></Rule>)}
                <h2>Stones</h2>
                <Stone color="green"></Stone>
            </div>
        )
    }
};

export default Station;