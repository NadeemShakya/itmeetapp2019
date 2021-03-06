import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Header from './Header';
class SponsersScreen extends Component {

        state = {
            names:[
              {'Header': 'Gold Sponsor', id: 1, name:'Gold'},
              {'Header': 'Silver Sponsor', id: 2, name:'Silver'},
              {'Header': 'Bronze Sponsor', id: 3, name: 'Bronze'},
              {'Header': 'Career Partner', id: 4, name: 'Career'},
              {'Header': 'VR Partner', id: 5, name: 'Entertainment'},
              {'Header': 'Gaming Partner', id: 6, name: 'Gaming'},
              {'Header' : 'Gift Partner', id: 7, name: 'Gift'},
              {'Header': 'ISP Partner', id: 8, name: 'ISP'},
              {'Header': 'Media Partner', id: 9, name: 'Media'},
              {'Header': 'Pick and Drop Partner', id: 10, name: 'Pick'},
              {'Header': 'Radio Partner', id: 11, name: 'Radio'},
              {'Header' : 'SMS Partner', id: 12, name: 'SMS'},
            ],
        
            type:'None',
        
            Gold:[
              {"Image": require('../../images/Gold/Gold_1.jpg'), id: 1},
              {"Image": require('../../images/Gold/Gold_2.png'), id: 2},
              {"Image": require('../../images/Gold/Gold_3.png'), id: 3},
              {"Image": require('../../images/Gold/Gold_4.png'), id: 4}


            ],
        
            Silver:[
              {"Image": require('../../images/Silver/Silver_1.png'), id: 1},
              {"Image": require('../../images/Silver/Silver_2.png'), id: 2},

            ],
        
            Bronze:[
              {"Image": require('../../images/Bronze/Bronze_1.png'), id: 1},
              {"Image": require('../../images/Bronze/Bronze_2.png'), id: 2},
              {"Image": require('../../images/Bronze/Bronze_3.png'), id: 3},
              {"Image": require('../../images/Bronze/Bronze_4.jpg'), id: 4}
            ],
        
            Career:[
              {"Image": require('../../images/Career/Career_1.png'), id: 1}
            ],
        
            Entertainment:[
              {"Image": require('../../images/Entertainment/Enter_2.png'), id: 1}
            ],
        
            Gaming:[
              {"Image": require('../../images/Gaming/Game_1.png'), id: 1},
              {"Image": require('../../images/Gaming/Game_2.jpg'), id: 2}
            ],
        
            Gift:[
              {"Image": require('../../images/Gift/Gift_1.png'), id: 1}
            ],
        
            ISP:[
              {"Image": require('../../images/ISP/ISP_1.png'), id: 1}
            ],
        
            Media:[
              {"Image": require('../../images/Media/Media_1.gif'), id: 1}
            ],
        
            Pick:[
              {"Image": require('../../images/Pick/Pick_1.png'), id: 1}
            ],
        
            Radio:[
              {"Image": require('../../images/Radio/Radio_1.jpg'), id: 1}
            ],

            SMS:[
              {"Image": require('../../images/SMS/SMS_1.png'), id: 1},
              {"Image": require('../../images/SMS/SMS_2.png'), id: 2}


            ]
          }        
    
    render() {
        return(
        <View style = {{backgroundColor:'#fff'}}>
        <Header title = "Sponsors" onPress = {() => this.props.navigation.goBack()} />
        <ScrollView style={{flexGrow: 1, backgroundColor: "#fff"}}>
          <View style={styles.container}>
          {
            this.state.names.map((item, index) => (
                <View key={item.id} style={styles.Sponsor}>
                  <View style={styles.Sponsor_Header}>
                    <Text style={styles.Header_Font}>{item.Header}</Text>
                  </View>

                  <View style={styles.Sponsor_Logo}>
                  {
                      this.state[item.name].map((items, index) => ( 
                        <Image
                            key={items.id}
                            style={styles.Sponsor_Logo_Image}
                            resizeMode = "contain"
                            source={items.Image}/>
                      ))
                  }
                  </View>

                </View>
              ))
          }
          </View>
        </ScrollView>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      padding:20,
      marginBottom:30
      
    },
  
    // Sponsor StyleSheet
  
    Sponsor:{
      width: '100%',
      // height:300,
      backgroundColor: "#fff",
      // elevation: 1,
      alignItems:'center',
    },
    Sponsor_Header:{
      height: 30,
      width: "100%",
      backgroundColor: "#06525F",
      elevation: 1,
      alignItems: "center",
      justifyContent: "center",
      padding:20,
      borderRadius:3
    },
    Sponsor_Logo:{
      width: "100%", 
      height:100,
      // backgroundColor: 'yellow', 
      flexDirection: 'row', 
      justifyContent: "center", 
      alignItems: "center", 
      // flexWrap: 'wrap'
    },
  
    Sponsor_Logo_Image:{
      height: 90, 
      width: 90,
      margin:5,
    },
  
    // About Us StyleSheet
  
    Header_Font:{
      fontSize: 18,
      color: "#fff"
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
export default SponsersScreen;