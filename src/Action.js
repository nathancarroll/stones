import React, {Component} from 'react';

class Action extends Component{
    render(){
        const classes = `${this.props.color} ${this.props.mode} action`;
        return(
            <div className={classes}></div>
        )
    }
};

export default Action;