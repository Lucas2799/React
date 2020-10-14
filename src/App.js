import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import Temporizador from './tempozizador'
import  LabelCronometro from './LabelCronometro'
import Botao from './Botao'


function App() {
  return (
    <div>
      <LabelCronometro name="Cronometro!"/>
      <Contador/>
      <h1>Temporizador</h1>
      <Temporizador/>
    </div>
  );
}

export default App;
