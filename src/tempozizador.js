import React from 'react'
import './App.css';
import Botao from './Botao';
import  LabelCronometro from './LabelCronometro' 
import  LabelRelogio from './LabelRelogio'



class Temporizador extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        segundo : 0,
        minuto : 0,
        hora: 0,
        parcial:" ",
        stop: true
    }


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

    zerarTemporizador(){
        this.setState({
            segundo: 0,
            minuto: 0,
            hora : 0
        })
    }

    componentDidMount(){
        this.timer =  setInterval( () => this.incrementar(), 1000)
    }




    render(){
        return(
        
            <div>
                <h1>{this.state.hora}:{this.state.minuto}:{this.state.segundo}</h1>
                <Botao onClick ={()=> { this.zerarTemporizador()}} label ="Zerrar"/>
                <Botao onClick ={()=> { this.pararTempo()}} label ={this.state.nameStop}/>
                <Botao onClick ={()=> { this.parciais()}} label ="Parcial"/>
                <LabelCronometro name={this.state.parcial}/>
            </div>
        )
    }

    
}

export default Temporizador;