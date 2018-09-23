import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';


export default class App extends Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Voting') }>
          <View style = {styles.button1}>
            <Text style = {styles.texts}>Voting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Register') }>
          <View style = {styles.button1}>
            <Text style = {styles.texts}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    button1: {
      height: 50,
      width: 200,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: "#06525F",
      alignItems: 'center',
      padding: 10
      },
    texts: {
      fontSize: 25,
      color: '#fff'
      
    }
  
  });
  