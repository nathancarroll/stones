import React, {Component} from 'react';
import Station from './Station';

class Game extends Component{
    constructor(props){
        super(props);
        let gameMap = [];
        for (let i = 0; i < this.props.stations; i++){
            let row = [...Array(this.props.stonesPer)].map(() => Math.floor(Math.random() * 4))
            gameMap.push(row);
        }
        this.state = {
            gameMap: gameMap
        }
    }

    gameActions = {
        createStone: (iStation, iColor) => {
            let newGameMap = this.state.gameMap;
            newGameMap[iStation].push(iColor);
            this.setState({
                gameMap: newGameMap
            });
            return true;
        },
        destroyStone: (iStation, iColor) => {
            let newGameMap = this.state.gameMap;
            if (newGameMap[iStation].includes(iColor)){
                let n = newGameMap[iStation].indexOf(iColor);
                console.log(newGameMap[iStation].slice(n+1));
                newGameMap[iStation].splice(n, 1);
                this.setState({
                    gameMap: newGameMap
                });
                return true;
            } else {
                return false;
            }
        },
        stoneIn: (iStation, iColor) => {
            let nate;
            document.addEventListener("click", (event) => { 
                if (event.target.classList && event.target.classList[0] === "stone"){
                    console.log('you got a stone');
                    nate = true;
                }
            });
            return true;
        },
        stoneOut: (iStation, iColor) => {
            console.log('stone out');
        }
    }


    render(){
        return(
            [...Array(this.props.stations)].map((station, index) => 
                <Station key={index} iStation={index} rules={this.props.rulesPer} stones={this.state.gameMap[index]} gameActions={this.gameActions}></Station>
            )
        )
    }
};

export default Game;