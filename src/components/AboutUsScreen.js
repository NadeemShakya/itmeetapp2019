import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
class AboutUsScreen extends Component{
    render(){
      return(
        <View> 
        <Header title = "About Us" onPress = {() => this.props.navigation.goBack()} />        
            <ScrollView>
                <View style={styles.About_Us_Logo}>
                    <Image style={{height: "100%", width: "100%"}}
                    resizeMode="contain"
                    source={require('../../images/IT_Meet.png')}/>
                </View>
                <View style={styles.About_Us_Details}>
                    <View style={styles.Detail_Box}>
                    <Text> 
                        IT Meet is a non-profit tech program organized by students of DoCSE(Department of Computer
                        Sciene and Engineering) of Kathmandu University.
                    </Text>
                    <Text> It is aimed to appreciate and uplift the growing IT market of Nepal.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#EAECEE",
      alignItems: "center"
    },
  
    // Sponsor StyleSheet
  
    Sponsor:{
      width: 320,
      height: 200,
      top: '3%',
      marginTop: "5%",
      backgroundColor: "white",
      elevation: 1,
    },
    Sponsor_Header:{
      height: 40,
      width: "100%",
      backgroundColor: "white",
      elevation: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    Sponsor_Logo:{
      height: 150,
      width: "100%", 
      backgroundColor: 'white', 
      flexDirection: 'row', 
      justifyContent: "flex-start", 
      alignItems: "flex-start", 
      flexWrap: 'wrap'
    },
  
    Sponsor_Logo_Image:{
      height: 60, 
      width: 60,
      marginLeft: 32, 
      marginTop: 10,
      borderWidth: 0.5,
      borderColor: "#CCD1D1"
    },
  
    // About Us StyleSheet
  
    Header_Font:{
      fontSize: 20,
      color: "#0E6655"
    },
  
    About_Us_Logo:{
      height: "25%",
      width: "40%",
      top: "15%",
      backgroundColor: "white",
      zIndex: 1,
      elevation: 3
    },
    About_Us_Details:{
      height: "65%",
      width: "90%",
      top: "2%",
      backgroundColor: "white",
      elevation: 2,
      alignItems: 'center',
    },
    Detail_Box:{
      height: "70%",
      width: "95%",
      backgroundColor: 'white',
      marginTop: '27%',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
  
    // Route StyleSheet
  
    Route:{
      height: 330,
      width: 320,
      marginTop: "10%",
      elevation: 1,
      backgroundColor: "white"
    },
    Route_Header:{
      height: "25%",
      width: "100%",
      elevation: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    },
    Route_Details:{
      height: "100%",
      width: "100%",
      backgroundColor: 'white',
      top: '0%',
    },
    Way_Header:{
      color: "#3498DB",
      fontSize: 17,
      marginTop: '5%'
    }
  });
export default AboutUsScreen;