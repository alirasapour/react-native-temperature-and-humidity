'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, SafeAreaView} from 'react-native';
import TemperatureComponent from '../components/temperature.component.js'
import fire from '../firebase/firebase.js'
import Loader from '../components/loader.component.js'


export default class Temperature extends Component {


    constructor(){
        super();

        this.database = fire.database().ref().child('temperatura');

        this.state = {
            temperaturies: [],
            loading: true

        }

    }

    componentDidMount(){

        this.database.on('value', snap =>{
            let temperature = [];
            
            snap.forEach(temp =>{
                temperature.push(temp.val());
                return false;
            })

            this.setState({temperaturies: temperature})
        })

    }

    render(){
     

        if ( this.state.temperaturies.length != 0) {
            return(
                <TemperatureComponent temperature = {this.state.temperaturies}/>

            )
        }else{
            return ( 
                
                <Loader
                loading={this.state.loading} />       
            )
        }

        

    }

}

var styles = StyleSheet.create({
   
 
  });
  