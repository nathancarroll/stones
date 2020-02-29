import React, {Component} from 'react';
import Action from './Action';
import {colors, actions} from './App';

class Rule extends Component{
    constructor(props){
        super(props);
        let rule = [];

        for (let i = 0; i < 4; i++){
            let step = {
                color: Math.floor(Math.random() * 4),
                mode: actions[Math.floor(Math.random() * 4)]
            }
            rule.push(step);
        }

        this.state = {
            steps: rule,
            active: false
        };
    }

    activateRule = event => {
        this.setState({
            active: !this.state.active
        })
    }


    render(){
        let classActive = this.state.active ? "active" : "";
        let classes = `${classActive} rule`;
        return (
            <div className={classes} onClick={this.activateRule}>
                {this.state.steps.map((rule, index) => 
                    <Action key={index} station={this.props.station} color={rule.color} mode={rule.mode} gameActions={this.props.gameActions}></Action>
                )}
            </div>
        )
    }
};

export default Rule;