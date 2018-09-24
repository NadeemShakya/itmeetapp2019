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
        source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSeAkpP1cipvw8JO7YRmRHjnY40Ay3cOQ9h99Mx2zR_xmdVm8A/viewform'}}
      />
    );
  }
}