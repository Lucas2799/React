import React from 'react';

import './App.css';
import Cronometro from './Cronometro'
import Temporizador from './tempozizador'
import Relogio from './Relogio'


function App() {
  return (
    <div>
      <div id="cro">
        <Cronometro/>
        </div>
        <div id="temp">
        <Temporizador/>
        </div>
        <div>
          <Relogio/>
      </div>
    </div>
  );
}


export default App;
