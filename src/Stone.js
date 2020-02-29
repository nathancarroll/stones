import React, {Component} from 'react';
import { colors } from './App';

class Stone extends Component{
    render(){
        const classes = `stone ${colors[this.props.color]}`;

        return (
            <div className={classes}></div>
        )
    }
};

export default Stone;