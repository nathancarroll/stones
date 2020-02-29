import React, {Component} from 'react';

import Stone from './Stone';
import Rule from './Rule';
import {colors, actions} from './App.js';

class Station extends Component{

    constructor(props){
        super(props);
        for (let i = 0; i < this.props.stones; i++){
            let color= (Math.floor(Math.random() * 4));
        };
        this.state = {
            stones: this.props.stones
        }
    }

    addRule = (event) => {
        console.log(this.state.stones);
    }

    render(){
        return(
            <div className="station">
                <h2 onClick={this.addRule}>Rules</h2>
                    {[...Array(4)].map((rule, index) => <Rule key={index} station={this.props.iStation} gameActions={this.props.gameActions}></Rule>)}
                <h2>Stones</h2>
                    {this.state.stones.map((stone, index) => <Stone key={index} color={stone}></Stone>)}
            </div>
        )
    }
};

export default Station;