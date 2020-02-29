import React from 'react';

import Stone from './Stone';
import './Stone.css';

import Game from './Game';

function App() {
  return (
    <div className="App">
      <Game stations={8} stonesPer={5} rulesPer={3}></Game>
    </div>
  );
}

const colors = ['green', 'orange', 'purple', 'red'];
const actions = ['create', 'destroy', 'move_in', 'move_out'];

export {App, colors, actions};
