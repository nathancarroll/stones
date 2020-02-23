import React from 'react';

import Stone from './Stone';
import './Stone.css';

import Game from './Game';

function App() {
  return (
    <div className="App">
      <Stone color="red"></Stone>
      <Stone color="purple"></Stone>
      <Stone color="orange"></Stone>
      <Stone color="green"></Stone>
      <Game></Game>
    </div>
  );
}

const colors = ['green', 'orange', 'purple', 'red'];
const actions = ['create', 'destroy', 'move_in', 'move_out'];

export {App, colors, actions};
