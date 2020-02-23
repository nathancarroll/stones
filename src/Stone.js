import React, {Component} from 'react';

class Stone extends Component{
    render(){
        const classes = `${this.props.color} stone`;

        return (
            <div className={classes}></div>
        )
    }
};

export default Stone;