import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  static navigationOptions = {
    headerStyle: {
        backgroundColor: '#06525F',
        height: 70,
      },
      headerTintColor: '#fff',
      headerTitle: 'React Native',
      headerTitleStyle: {
          fontSize: 22,
      }
}
  render() {
    return (
      <WebView
        source={{uri: 'https://itmeet.ku.edu.np/register'}}
      />
    );
  }
}