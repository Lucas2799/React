import React from 'react'
import './App.css';
import Botao from './Botao';


class Contador extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        segundos : 0,
        minutos : 0,
        stop: false,
        nameStop: "Stop"
    }

}
incrementar(){
    this.setState(
        (state) =>{
            if (state.segundos >=5){
                this.zerar();
                this.incrementarMinutos()
            } 
            return({segundos: state.segundos + 1})
        }
    )
}

zerar(){
    this.setState({segundos: 0})
}

incrementarMinutos(){
    this.setState({minutos: this.state.minutos + 1})
}

zerarCronometro(){
    this.setState({
        segundos: 0,
        minutos: 0
    })
}

pararTempo()
{
    this.setState({
        stop :!this.state.stop
    })
    if(this.state.stop)
        {this.setState({
            nameStop : "Play"
        })}
        else 
            {this.setState({
                nameStop:  "Stop"
            })}
        
}
 

componentDidMount(){
    this.timer =  setInterval( () => this.incrementar(), 1000)
}




 render(){
    return(
        <div>
            <h1>{this.state.minutos}:{this.state.segundos}</h1>
            <Botao onClick ={()=> { this.zerarCronometro()}} label ="Zerrar"/>
            <Botao onClick ={()=> { this.pararTempo()}} label ={this.state.nameStop}/>
        </div>
    )
}

    
}

export default Contador;