import React from 'react'
import './App.css';
import Botao from './Botao';
import  LabelCronometro from './LabelCronometro' 
import  LabelRelogio from './LabelRelogio'



class Contador extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        segundo : 0,
        minuto : 0,
        hora: 0,
        stop: false,
        nameStop: "Stop",
        parcial: " ",
        relogio:" ",
        cont: " ",
        local:" ",
        los :" "
    }


}


relogio(){
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("Brazil/Brasilia").format("HH:mm:ss").toString()
        this.setState({relogio: localTime})
      
}


los(){
    var moment = require('moment-timezone')
    let localTime = moment( ).tz("America/Los_Angeles").format("HH:mm:ss").toString()
    this.setState({los: localTime})
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
    let p =  this.state.hora +":" +this.state.minuto + ":" + this.state.segundo
        this.setState({
            parcial : this.state.parcial + "->" + p
        })
       
}

diferenca(){
    let p =  this.state.hora +":" +this.state.minuto + ":" + this.state.segundo
        this.setState({
            diferenca : (this.state.hora +":" +this.state.minuto + ":" + this.state.segundo) 
        })
       
}


 

componentDidMount(){
    this.timer =  setInterval( () => this.incrementar(), 1000)
    this.timer2 =  setInterval( () => this.relogio(), 1000)

}




 render(){
    return(
       
        <div>
            <h1>{this.state.hora}:{this.state.minuto}:{this.state.segundo}</h1>
            <Botao onClick ={()=> { this.zerarCronometro()}} label ="Zerrar"/>
            <Botao onClick ={()=> { this.pararTempo()}} label ={this.state.nameStop}/>
            <Botao onClick ={()=> { this.parciais()}} label ="Parcial"/>
            <LabelCronometro name={this.state.parcial}/>
            
            <h1>Horario atual!</h1>
            <LabelRelogio name={this.state.relogio}/>
            
        </div>
    )
}

    
}

export default Contador;