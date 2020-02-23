import React from 'react';

import Stone from './Stone';
import './Stone.css';

import Station from './Station';

function App() {
  return (
    <div className="App">
      <Stone color="red"></Stone>
      <Stone color="purple"></Stone>
      <Stone color="orange"></Stone>
      <Stone color="green"></Stone>
      <Station></Station>
    </div>
  );
}

const colors = {
  GREEN: 'green',
  ORANGE: 'orange',
  PURPLE: 'purple',
  RED: 'red'
};

const actions = {
  CREATE: 'create',
  DESTROY: 'destroy',
  MOVE_IN: 'move_in',
  MOVE_OUT: 'move_out'
}

export default App;
