import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import Temporizador from './tempozizador'
import Relogio from './Relogio'
import  LabelCronometro from './LabelCronometro'
import Botao from './Botao'
import RelogioSyowa from './RelogioSyowa';
import  Relogiolos from './RelogioLos'
import Relogiotokyo from './RelogioTokyo';
import RelogioAfrica from './RelogioAfrica';


function App() {
  return (
    <div>
      <LabelCronometro name="Cronometro!"/>
      <Contador/>
      <h1>Temporizador</h1>
      <Temporizador/>
      <Relogio/>
      <Relogiolos/>
      <RelogioAfrica/>
      <RelogioSyowa/>
      
    </div>
  );
}


export default App;
