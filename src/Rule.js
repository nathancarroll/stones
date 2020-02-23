import React, {Component} from 'react';
import Action from './Action';

class Rule extends Component{
    constructor(props){
        super(props);
        this.state = {
            steps: [{
                color: 'purple',
                mode: 'destroy'
            },
            {
                color: 'orange',
                mode: 'create'
            }]
        }
    }

    thing = event => {
        console.log('thing');
    }

    render(){
        return (
            <div className="rule" onClick={this.thing}>
                {this.state.steps.map((rule, index) => 
                    <Action key={index} color={rule.color} mode={rule.mode}></Action>
                )}
            </div>
        )
    }
};

export default Rule;