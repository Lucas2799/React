import React from 'react'
import './App.css';
import Botao from './Botao';
import  LabelCronometro from './LabelCronometro' 
import  LabelRelogio from './LabelRelogio'



class Cronometro extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        milisegundos: 0,
        segundo : 0,
        minuto : 0,
        hora: 0,
        stop: true,
        nameStop: "Play",
        parcial: " ",
    }


}


relogio(){
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("Brazil/Brasilia").format("HH:mm:ss").toString()
        this.setState({relogio: localTime})
      
}

incrementar(){
    this.setState(
        (state) =>{
            if(this.state.stop === false){
                if (state.segundo >= 60){
                    this.zerar();
                    this.incrementarMinutos()
                } 
                if (state.minuto === 60){
                    this.incrementarHoras()
                    this.zerar();
                } 
               
                return({segundo: state.segundo + 1})
        }
        }
    )
}

zerar(){
    this.setState({segundo: 0})
    this.setState({minuto: 0})
    
}
functionMilisegundos()
    {
      if (this.state.stop === false)
      {
       this.setState(function (state, props) {
        if(state.milisegundos >= 999)
        {
          this.setState({ 
            milisegundos: 0
          })
        }
          return({
            milisegundos: state.milisegundos + 12 
          })
        })
      }
    }

incrementarMinutos(){
    this.setState({minuto: this.state.minuto + 1})
}

incrementarHoras(){
    this.setState({hora: this.state.hora + 1})
}

zerarCronometro(){
    this.setState({
        segundo: 0,
        minuto: 0,
        hora : 0
    })
}

pararTempo()
{
    this.setState({
        stop :!this.state.stop
    })
    if(this.state.stop)
        {this.setState({
            nameStop : "Stop"
        })}
        else 
            {this.setState({
                nameStop:  "Play"
            })}
        
}
parciais(){
    let p =  this.state.hora +":" +this.state.minuto + ":" + this.state.segundo+ ":" + this.state.milisegundos
        this.setState({
            parcial : this.state.parcial + "->" + p
        })
       
}

componentDidMount(){
    this.timer =  setInterval( () => this.incrementar(), 1000)
    this.timer2 = setInterval(() => this.functionMilisegundos(), 10)


}




 render(){
    return(

       <div className="Cronometro">
        <div class="container-fluid" >
            <div class="row">
                <div class="col-md-3 sidebar cor-fundo">
                    <ul class="nav nav-sidebar">
                    <h1>Cronometro</h1>
                    <h1>{this.state.hora}:{this.state.minuto}:{this.state.segundo}:{this.state.milisegundos}</h1>
                    <Botao onClick ={()=> { this.zerarCronometro()}} label ="Zerrar"/>
                    <Botao onClick ={()=> { this.pararTempo()}} label ={this.state.nameStop}/>
                    <Botao onClick ={()=> { this.parciais()}} label ="Parcial"/>
                    <LabelCronometro name={this.state.parcial}/>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

    
}

export default Cronometro;