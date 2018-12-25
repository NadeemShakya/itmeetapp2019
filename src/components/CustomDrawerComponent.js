import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight,
    ScrollView,
    Image,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// IT MEET logo
import logo from '../images/logo.png';
// Drawer Background Image
import navigationBackground from '../images/navigationBackground.jpg';

class CustomDrawerComponent extends Component {
 
  render() {
    return(
      <ScrollView style = {{backgroundColor: '#f2f2f2', height: '100%'}}>
        <StatusBar backgroundColor = '#043F49' barStyle = 'light-content'/>
        <View style = {{heght: 200, justifyContent:'center', alignItems:'center'}}>
          <Image source = {navigationBackground} style = {{width:'100%', height:'100%', maxWidth: 'auto', maxHeight:'auto', position:'absolute'}}/>
          <Image source = {logo} style = {{width: 120, height:120, marginTop:15}}/>
          <Text style = {{color: '#fff', fontSize:13, margin:10}}>Digitize. Innovate. Lead</Text>
        </View> 
        {/* Register Card Section Start */}
        <View style = {styles.topCard}>
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Register')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Register.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Register</Text>
            </View>
          </TouchableHighlight>
        </View>      
        {/* Register Card Section End   */}
        {/* Card for Home, Events, News, Voting, Bus Route Start */}
        <View style = {styles.middleCard} >
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Home')}>
            <View style = {styles.card} >
              <Icon name = "home" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic} >Home</Text>
            </View>
          </TouchableHighlight>        
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Events')}>
            <View style = {styles.card} >
              <Icon name = "calendar" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic} >Events</Text>
            </View>
          </TouchableHighlight>       
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('News')}>
            <View style = {styles.card} >
              <Image source = {require('../images/News.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >News</Text>
            </View>
          </TouchableHighlight>        
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('BusRoute')}>
            <View style = {styles.card} >
              <Icon name = "bus" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic}>Bus Route</Text>
            </View>
          </TouchableHighlight> 
        </View>
        {/* Card for Home, Events, News, Voting,, Bus Route End */}

        {/* Card for Share, Sponsers, Visit Us, About Us Start */}
        <View style = {styles.bottomCard}>
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Share')}>
            <View style = {styles.card} >
              <Icon name = "share" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic} >Share</Text>
            </View>
          </TouchableHighlight>   
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Sponsers')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Sponsers.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Sponsors</Text>
            </View>
          </TouchableHighlight>                    
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('VisitUs')}>
            <View style = {styles.card} >
              <Icon name = "globe" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic} >Visit Us</Text>
            </View>
          </TouchableHighlight>               
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('AboutUs')}>
            <View style = {styles.card} >
              <Icon name = "users" size = {30} color = "#06525F" />
              <Text  style = {styles.cardTopic} >About Us</Text>
            </View>
          </TouchableHighlight>  
          <TouchableHighlight onPress = {() => this.props.navigation.navigate('Developers')}>
            <View style = {styles.card} >
              <Image source = {require('../images/developers.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Developers</Text>
            </View>
          </TouchableHighlight>  
        </View>
        {/* Card for Share, Sponsers, Visit Us, About Us End */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    padding:11,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'

  },
  topCard: {
    marginTop:18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 3,
    backgroundColor: '#fff',
  
  },
  middleCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 3,
    backgroundColor: '#fff',
  },

  bottomCard: {
    marginTop:18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 3,
    backgroundColor: '#fff'
  }, 
  cardImage: {
    width: 30 ,
    height: 30,
  },
  cardTopic: {
    color: '#06525F',
    fontSize:20,
    marginLeft: 15
  }
})
export default CustomDrawerComponent;