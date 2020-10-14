import React from 'react'
import './App.css';
import Botao from './Botao';
import  LabelCronometro from './LabelCronometro' 
import  LabelRelogio from './LabelRelogio'

class RelogioSyowa extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        relogio:""
    }


    }

    relogio(){
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("Antarctica/Syowa").format("HH:mm:ss").toString()
        this.setState({relogio: localTime})
    }

    componentDidMount(){
        this.timer =  setInterval( () => this.relogio(), 1000)

    }

    render(){
        return(
        
            <div>
                <h1>Horario Antartica Syowa!</h1>
            
                <LabelRelogio name={this.state.relogio}/>
            </div>
        )
    }
}
export default RelogioSyowa ;