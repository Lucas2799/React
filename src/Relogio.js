import React from 'react'
import './App.css';
import Botao from './Botao';
import  LabelCronometro from './LabelCronometro' 
import  LabelRelogio from './LabelRelogio'

class Relogio extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        relogio:"",
        relogio2:" ",
        relogio3:"",
        relogio4:" ",
        relogio5:" ",
        relogio6:" ",
       
    }


    }

    relogio(){
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("Brazil/Brasilia").format("HH:mm:ss").toString()
        let localTime2 = moment( ).tz("Africa/Porto-Novo").format("HH:mm:ss").toString()
        let localTime3 = moment( ).tz("America/Los_Angeles").format("HH:mm:ss").toString()
        let localTime4 = moment( ).tz("Antarctica/Syowa").format("HH:mm:ss").toString()
        let localTime5 = moment( ).tz("Asia/Tokyo").format("HH:mm:ss").toString()
        this.setState({
            relogio: localTime,
            relogio2: localTime2,
            relogio3: localTime3,
            relogio4: localTime4,
            relogio5:localTime5

        })
    }
   
    componentDidMount(){
        this.timer =  setInterval( () => this.relogio(), 1000)

    }

    render(){
        return(
            <div className="relogio">
                <h1>Horario Local!</h1>
                <LabelRelogio name={this.state.relogio}/>
                <h1>Africa</h1>
                <LabelRelogio name={this.state.relogio2}/>
                <h1>Los Angeles</h1>
                <LabelRelogio name={this.state.relogio3}/>
                <h1>Syowa</h1>
                <LabelRelogio name={this.state.relogio4}/>
                <h1>Tokyo</h1>
                <LabelRelogio name={this.state.relogio5}/>
            </div>
        )
    }
}
export default Relogio;