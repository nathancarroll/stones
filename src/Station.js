import React, {Component} from 'react';

import Stone from './Stone';
import Rule from './Rule';
import {colors, actions} from './App.js';

class Station extends Component{

    constructor(props){
        super(props);
        for (let i = 0; i < this.props.stones; i++){
            let color= (Math.floor(Math.random() * 4));
            console.log(colors[color]);
        }
        this.state = {
            rules: [],
            stones: [...Array(this.props.stones)].map(() => colors[Math.floor(Math.random() * 4)])
        }
    }

    addRule = (event) => {
        console.log(this.state.stones);
    }

    render(){
        return(
            <div className="station">
                <h2 onClick={this.addRule}>Rules</h2>
                    {this.state.rules.map((rule, index) => <Rule key={index}></Rule>)}
                <h2>Stones</h2>
                    {this.state.stones.map((stone, index) => <Stone key={index} color={stone}></Stone>)}
            </div>
        )
    }
};

export default Station;