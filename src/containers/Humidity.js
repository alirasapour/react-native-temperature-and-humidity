'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView,FlatList} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import HumidityComponent from '../components/humidity.component.js';
import Loader from '../components/loader.component.js'
import fire from '../firebase/firebase.js'


export default class Humidity extends Component {

    constructor(){
        super();
        this.database = fire.database().ref('umidade');

        this.state = {
            humidities: [],
            loading: true,

            
        }

    }
    componentDidMount(){

        // recuperando os dados
        this.database.on('value', snap =>{
            let humidity = [];

            snap.forEach(hum =>{
                humidity.push(hum.val());
                return false;
            })
            this.setState({humidities: humidity})
        })

    }

    render(){


        if ( this.state.humidities.length != 0) {
            return(
                <View >
                    <HumidityComponent humidity = {this.state.humidities}/>
                </View>
            )
        }else{
            return ( 
                
                <Loader
                loading={this.state.loading} />                

            )
        }


     
    }



}

