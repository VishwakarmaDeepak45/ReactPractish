import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Settings from './App/Settings';
import Home from './App/Home';

const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
},
{
  initialRouteName:'HomeScreen'
});
const MainNavigator = createAppContainer(AppNavigator);



export default class App extends Component {
  
  render() {
    return (
      <View  style={{backgroundColor:'red', flex:1}}>
        <MainNavigator />
      </View>
    );
  }
}

