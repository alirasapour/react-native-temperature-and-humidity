import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, SafeAreaView} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme,VictoryScatter, VictoryLine  } from "victory-native";

const TemperatureChart = ({temperature}) =>{

    let dataHighAndLow = [Math.max.apply(null, temperature ), Math.min.apply(null, temperature )]

    return(
        <View style = {styles.container}>


            <VictoryChart height={200}  theme={VictoryTheme.material}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"},
                    }}
                    data={temperature}
                />
            </VictoryChart>

          
          <SafeAreaView>

                <FlatList
                data={dataHighAndLow}
                numColumns={2}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                        return (
                            <View style={{alignItems: "center",
                                backgroundColor: index == 0 ? 'red': 'green',
                                flexGrow: 1,
                                margin: 4,
                                padding: 10,
                                width:'45%',
                                marginBottom: 30,
                                borderRadius: 50}}  >
                                
                                <Text style={styles.text}>
                                    <Image
                                        style={styles.imgStyle}
                                        
                                        source={index == 0 ? require('./alto.png') : require('./baixo.png')}
                                    />
                                    {item}ºC
                                </Text>
                                <Text  style={styles.description}>{index == 0 ? 'Máximo' : 'Mínimo'}</Text>
                            </View>
                            
                        );
                    }}
                />

            </SafeAreaView>



        </View>
        
  
)



}

const styles = StyleSheet.create({
  
    radius:{
        alignItems: "center",
        marginTop: 20,

      
    },
    imgStyle:{
        width: 20,
        height: 20
      
    },
    container: {
        justifyContent: "center",
        alignItems: "center",

    
    },
    temperatureTittle:{
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 20

    },
    temperatureText: {
        fontSize: 60
      
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

export default TemperatureChart