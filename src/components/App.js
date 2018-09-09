import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import Humidity from '../containers/Humidity.js'
import Temperature from '../containers/Temperature.js'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View>
        <Temperature/>

  </View>
);
const SecondRoute = () => (
    <Humidity/>
);

export default class App extends Component {
  constructor (){
    super();

    this.state= {
      index: 0,
      routes: [
        { key: 'first', title: 'Temperatura', image: './temp.png' },
        { key: 'second', title: 'Umidade' },
      ]
    }

  }

  render() {
    return (
        <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{  height: 0 ,width: Dimensions.get('window').width }}
      />
      
    );
  }
}




