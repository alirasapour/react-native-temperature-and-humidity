import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, SafeAreaView,Button} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import HumidityChart from './humidity.chart.component.js'


const HumidityComponent = ({humidity})=>{
    

    return(
            <View style = {styles.mainContainer}>
            
                <View style = {styles.radius} >
                    <PercentageCircle
                        
                        radius={80} 
                        borderWidth ={6} 
                        textStyle = {[{fontSize: 40}]} 
                        percent={humidity[humidity.length - 1]} 
                        color={humidity[humidity.length - 1] <= 50 ?  "#D1DCE8" :"#04FF00" }
                        bgcolor = {humidity[humidity.length - 1] <= 50 ? "#04FF00": "#D1DCE8" }
                        
                        >
                    
                        <Text style = {styles.humidityText}>
                            {humidity[humidity.length - 1]}%
                        </Text>
                        <Image
                            style={{width: 50, height: 50}}
                            source={require('./humidity.png')}
                        />
                    </PercentageCircle> 
                    
            
                </View>

                <HumidityChart humidity = {humidity}/>



            </View>
            
      
    )


}

const styles = StyleSheet.create({
  
    radius:{
        marginTop: '5%',
        alignItems: "center",
        marginBottom: '30%'

    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    },
    humidityTittle:{
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 20

    },
    humidityText: {
        fontSize: 40
      
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
export default HumidityComponent