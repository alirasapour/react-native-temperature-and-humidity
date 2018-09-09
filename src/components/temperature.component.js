import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, SafeAreaView} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import TemperatureChart from './temperature.char.component.js'
const TemperatureComponent = ({temperature})=>{

    return(
        <View style = {styles.mainContainer}>

            
            <View style = {styles.radius}>
          
                <PercentageCircle  radius={80} borderWidth ={6} textStyle = {[{fontSize: 40}]} percent={100} color={"#2911FF"}>
                    <Text style = {styles.temperatureText}>
                        {temperature[temperature.length - 1]}ºC
                    </Text>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('./temp.png')}
                    />
                    
                </PercentageCircle>  

            </View>
            <View>
                <TemperatureChart temperature = {temperature}/>

            </View>




        </View>
    
      
    )


}

const styles = StyleSheet.create({
  
    radius:{
        marginTop: '5%',
        alignItems: "center",
        marginBottom: '30%'

    },
    temperatureText: {
        fontSize: 40
      
    },
    temperatureTittle:{
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 20
    },
    item: {
        alignItems: "center",
        backgroundColor: "#0D5AFF",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        marginTop: 10,
        borderRadius: 50
    },
    itemHighLow: {
        alignItems: "center",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        marginTop: 10
    },
    description:{
        color: "#FFF7F3",
        fontSize: 12
    },
    text: {
        color: "#FFF7F3",
        fontSize: 18
    }

  });

export default TemperatureComponent