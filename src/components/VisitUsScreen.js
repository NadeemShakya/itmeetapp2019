import React, { Component } from 'react';
import { NetInfo, View ,WebView, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class VisitUs extends Component {
  constructor(props) {
    super(props);
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
        {this.state.connected == true? <WebView source={{uri:'https://itmeet.ku.edu.np'}} /> :
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