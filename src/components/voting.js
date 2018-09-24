import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, WebView} from 'react-native';


export default class App extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#06525F',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitle: 'Voting Section',
          headerTitleStyle: {
              fontSize: 22,
          }
          
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.insideCard}>
                <View style={styles.leftCard}>
                <Image 
                    style={{width: 100, height: 60, resizeMode: 'contain'}}
                    source={require('../images/events/Photography.png')}
                />
                <Text style={{fontSize: 18, color: '#06525F',textAlign: 'center',marginTop: 8}}>Photography</Text>
                <Text style={{fontSize: 18, color: '#06525F',textAlign: 'center', marginTop: -8}}>Contest</Text>
                <View
                    style={{
                    borderLeftWidth: 2,
                    borderLeftColor: 'black',
                    }}
                />
                </View>
                <View style={styles.middleLine}></View>
                <View style={styles.rightCard}>
                
                <View>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('VoteNow') }>
                        <View style = {styles.button1}>
                            <Text style = {styles.texts}>Vote Now</Text>
                        </View>
                </TouchableOpacity>
                </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.insideCard}>
                <View style={styles.leftCard}>
                <Image
                    style={{width: 100, height: 60, resizeMode: 'contain'}}
                    source={require('../images/events/gaming.png')}
                />
                <Text style={{fontSize: 18, color: '#06525F',textAlign: 'center',marginTop: 8}}>Project</Text>
                <Text style={{fontSize: 18, color: '#06525F',textAlign: 'center', marginTop: -8}}>Competition</Text>
                
                </View>
                <View style={styles.middleLine}></View>
                <View style={styles.rightCard}>
                <View>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VoteNow') }>
                        <View style = {styles.button1}>
                            <Text style = {styles.texts}>Vote Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    card:{
        marginTop: 20,
        height: 177,
        width: '92%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 2,
    },
    insideCard:{
        flex:1,
        flexDirection: 'row'
    },
    leftCard:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
        
        
    },
    middleLine:{
        flex: 0.1,
        height: 80,
        marginTop: '7%',
        borderLeftWidth:2,
        borderLeftColor: '#06525F',

    },
    rightCard:{
        flex:1.9,
        padding: 10,
        paddingTop: 20,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
        
    },
    button1: {
      height: 40,
      width: 100,
      borderRadius: 5,
      backgroundColor: "#06525F",
      alignItems: 'center',
      padding: 5,
      
      },

    texts: {
      fontSize: 18,
      color: '#fff'
      
    }
});