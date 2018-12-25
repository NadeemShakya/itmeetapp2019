import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet,FlatList} from 'react-native';
import Header from './Header';

export default class BusRouteScreen extends Component{
   constructor() {
      super();
      this.state = {
          details : [
              {
                id: '1',
                date: '27th December',
                time: '7:30 am',
                from: `Ratnapark`,
                to: `KU,Dhulikhel`,
              },
              {
                id: '2',
                date: '27th December',
                time: '4:30 pm',
                from: `KU,Dhulikhel`,
                to: `Ratnapark`,
              },
              {
                id: '3',
                date: '28th & 28th  December',
                time: '7:30 am',
                from: `Ratnapark`,
                to: `Dhulikhel`,
              },
              {
                id: '4',
                date: '28th & 28th  December',
                time: '7:30 am',
                from: `Koteshowr`,
                to: `Dhulikhel`,
              },
              {
                id: '5',
                date: '27th & 28th  December',
                time: '9:00 am',
                from: `Ratnapark`,
                to: `Dhulikhel`,
              },
              {
                id: '6',
                date: '28th & 29th  December',
                time: '11:00 am',
                from: `Ratnapark`,
                to: `Dhulikhel`,
              },
              {
                id: '7',
                date: '28th & 29th  December',
                time: '4:30 pm',
                from: `Dhulikhel`,
                to: `Ratnapark`,
              }, 
              {
                id: '8',
                date: '28th & 29th December',
                time: '5:30 pm',
                from: `Dhulikhel`,
                to: `Ratnapark`,
              }, 
                                                         
          ]
      }
  }

    
  
    render(){
      return(
        <View style = {styles.container}>
        <Header title = "Bus Route" onPress = {() => this.props.navigation.goBack()}/>
        <ScrollView >
          <FlatList 
            data = {this.state.details}
            keyExtractor = {(item, index) => item.id }
            renderItem = {({item}) => 
              <View style = {styles.body}>
                <View style = {{padding:'5%'}}>
                  {/* Event Description Goes here */}
                  <Text style = {{textAlign:'center',fontSize:24,fontWeight:'bold'}}>{item.date}</Text>
                  <Text style = {{textAlign:'center',fontSize:16}}>{item.time}</Text>
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.5,
                      margin:10
                    }}
                  />
                  <Text style = {{textAlign:'center',fontSize:14}}><Text style = {{fontWeight:'bold'}}>From: </Text>{item.from}</Text> 
                  <Text style = {{textAlign:'center',fontSize:14}}><Text style = {{fontWeight:'bold'}}>To: </Text>{item.to}</Text>             
                </View>  
              </View>       
            }
          /> 
        </ScrollView>       
        </View>
        );
    }
  }
  

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f2f2f2',
        flex:1,
    },
    header: {
        backgroundColor:'#06525F',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',  
        paddingLeft:15
    },
    body: {
        backgroundColor:'#fff',
        marginTop:15,
        marginLeft:15,
        marginRight: 15,
        marginBottom: 10, 
        shadowColor:'rgba(0, 0, 0, 0.7)',
        elevation:3,
        borderRadius: 3,
    },

})

