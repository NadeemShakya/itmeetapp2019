import React, { Component } from 'react';
import { NetInfo, View ,WebView, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class MyWeb extends Component {
  constructor() {
    super();
    this.state = {
      connected: false
    }
  }
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
  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected)
      {
        this.setState({
          connected:  true
        })
      }else {
        this.setState({
          connected: false
        })
      }
    })
  }
  render() {
    return (
      <View style ={{flex:1}}>
        {this.state.connected == true? <WebView source={{uri:'https://itmeet.ku.edu.np/register'}} /> :
          <View style = {{flex:1, justifyContent:'center'}}>
            <View style = {{alignItems: 'center', justifyContent:'center'}}>
            <Text style = {{fontSize:15, marginBottom:20}}>No Connection! Make Sure your Internet is working.</Text>
            </View>
            <TouchableOpacity style = {{ justifyContent:'center', alignItems:'center'}} onPress = {() => this.props.navigation.navigate('Home')}>
              <View style = {styles.startButton}>
                <Text style = {styles.startText}>Go Back</Text>
              </View>
            </TouchableOpacity> 
          </View>
        }
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#c4e4ff'
  },
  startButton: {
    backgroundColor: '#fff',
    width: '80%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3
  },
  startText: {
    fontSize:18,
    color: '#06525F'
  }
});