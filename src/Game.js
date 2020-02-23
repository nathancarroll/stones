import React, {Component} from 'react';
import Station from './Station';

class Game extends Component{
    state = {
        stations: 8,
        rulesPerStation: 4,
        initStonesPerStation: 5
    }

    render(){
        return(
            [...Array(this.state.stations)].map((station, index) => 
                <Station key={index} rules={this.state.rulesPerStation} stones={this.state.initStonesPerStation}></Station>
            )
        )
    }
};

export default Game;