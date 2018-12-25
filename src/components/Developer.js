import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    FlatList
} from 'react-native';
import Header from './Header';


export default class Voting extends Component {
  constructor() {
      super();
      this.state = {
          details : [
              {
                id: '1',
                title: 'Rupesh Poudel',
                email: ` rupesh.poudel07@gmail.com`,
                contact: `9849102465`,
                imageURL: require('../images/developers/rupesh.jpg')
              },
              {
                id: '2',  
                title: 'Nadeem Shakya',
                email: `shakya.nadim12@gmail.com`,
                contact: '9843203311',
                imageURL: require('../images/developers/nadeem.jpg')             
              },
              {
                id: '3',
                title: 'Dipesh Rai',
                email: `raidipesh78@gmail.com`,
                contact: `9865011760`,
                imageURL: require('../images/developers/dipesh.jpg')
              },
              {
                id: '4',
                title: 'Bipul Bikram Thapa',
                email: `bipulthapa23@gmail.com`,
                contact: `9869001233`,
                imageURL: require('../images/developers/bipul.jpg')
              },
              {
                id: '5',
                title: 'Ashish Subedi',
                email: `subediashish35@gmail.com`,
                contact: `9843520805`,
                imageURL: require('../images/developers/ashish.jpg')
              },                                          
          ]
      }
  }
  render() {
    return (
      <View style = {styles.container}>
        {/* Header Component Start */}
          <Header title = "Developers" onPress = {() => this.props.navigation.goBack()}/>
        {/* Header Component End */} 
        <ScrollView>
          <Text style = {{textAlign:'center',marginTop:15,fontSize:26,fontWeight:'bold'}}>Developed By React Native Community</Text>
          <FlatList 
            data = {this.state.details}
            keyExtractor = {(item, index) => item.id }
            renderItem = {({item}) => 
              <View style = {styles.body}>
                <View style = {styles.logo}>
                  <Image source = {item.imageURL} style = {styles.image}/>
                  <Text style = {{textAlign:'center'}}></Text>
                </View>
                <View style = {{padding:'5%'}}>
                  {/* Event Description Goes here */}
                  <Text style = {{textAlign:'center',fontSize:24,fontWeight:'bold',marginTop:-30}}>{item.title}</Text>
                  <Text style = {{textAlign:'center',fontSize:16}}>CE 4th Year</Text>
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.5,
                      margin:10
                    }}
                  />
                  <Text style = {{textAlign:'center',fontSize:14}}><Text style = {{fontWeight:'bold'}}>Email: </Text>{item.email}</Text> 
                  <Text style = {{textAlign:'center',fontSize:14}}><Text style = {{fontWeight:'bold'}}>Contact: </Text>{item.contact}</Text>             
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
        marginTop:100,
        marginLeft:15,
        marginRight: 15,
        marginBottom: 10, 
        shadowColor:'rgba(0, 0, 0, 0.7)',
        elevation:3,
        borderRadius: 10,
    },
    image: {
        height:120,
        width: 120,
        borderRadius:60,
        resizeMode: 'cover',
        

    },
    logo: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        justifyContent:'space-evenly',
        alignItems:'center',
        height: 120,
        width: 120,
        marginTop:-60,
        padding:10,
        

    }
})