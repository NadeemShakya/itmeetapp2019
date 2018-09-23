import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import VotingScreen from './src/components/voting';
import VoteNow from './src/components/VoteNow';
import Register from './src/components/webview';
import HomeScreen from './src/components/Home';


export default class App extends Component {
  
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  },

  Voting: {
    screen: VotingScreen
  },

  VoteNow:{
    screen: VoteNow
  },

  Register: {
    screen: Register
  }

})


