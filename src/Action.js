import React, {Component} from 'react';
import { colors } from './App';

class Action extends Component{
    state = {
        active: false,
        validated: false
    }

    toggle = (key) => {
        this.setState({
            [key]: !this.state[key]
        })
    }

    enact = () => {
        this.setState({
            active: true,
            validated: false
        });
        if (this.props.mode === "create"){
            if (this.props.gameActions.createStone(this.props.station, this.props.color)){
                this.setState({
                    active: false,
                    validated: true
                })
            };
        } else if (this.props.mode === "destroy"){
            if (this.props.gameActions.destroyStone(this.props.station, this.props.color)){
                this.setState({
                    active: false,
                    validated: true
                })
            };
        } else if (this.props.mode === "move_in"){
            if (this.props.gameActions.stoneIn(this.props.station, this.props.color)){
                this.setState({
                    active: false,
                    validated: true
                })
            };
        } else if (this.props.mode === "move_out"){
            if (this.props.gameActions.stoneOut(this.props.station, this.props.color)){
                this.setState({
                    active: false,
                    validated: true
                })
            };
        } else {
            console.log('how did you get here?');
        }
    }

    render(){
        const classes = `${colors[this.props.color]} ${this.props.mode} ${this.state.active ? "active" : ""} ${this.state.validated ? "valid": ""} action`;
        return(
            <div className={classes} onClick={this.enact}></div>
        )
    }
};

export default Action;