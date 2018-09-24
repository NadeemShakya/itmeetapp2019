import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight,
    ScrollView,
    Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';

class CustomDrawerComponent extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }  
  render() {
    return(
      <ScrollView style = {{backgroundColor: '#f2f2f2', height: '100%'}}>
        <View style = {{heght: 200, justifyContent:'center', alignItems:'center'}}>
          
          <Image source = {require('../images/navigationBackground.jpg')} style = {{width:'100%', height:'100%', maxWidth: 'auto', maxHeight:'auto', position:'absolute'}}/>
          <Image source = {require('../images/ITMEETLOGO.png')} style = {{width: 120, height:120}}/>
          <Text style = {{color: '#fff', fontSize:13, margin:10}}>DISCOVER. INNOVATE. LEAD</Text>
        </View> 
        {/* Register Card Section Start */}
        <View style = {styles.topCard}>
          <TouchableHighlight onPress = {this.navigateToScreen('Register')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Register.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Register</Text>
            </View>
          </TouchableHighlight>
        </View>      
        {/* Register Card Section End   */}

        {/* Card for Home, Events, News, Voting, Bus Route Start */}
        <View style = {styles.middleCard} >
          <TouchableHighlight onPress = {this.navigateToScreen('Home')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Home.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Home</Text>
            </View>
          </TouchableHighlight>        
          <TouchableHighlight onPress = {this.navigateToScreen('Events')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Events.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Events</Text>
            </View>
          </TouchableHighlight>       
          <TouchableHighlight onPress = {this.navigateToScreen('News')}>
            <View style = {styles.card} >
              <Image source = {require('../images/News.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >News</Text>
            </View>
          </TouchableHighlight>        
          <TouchableHighlight onPress = {this.navigateToScreen('Voting')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Voting.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Voting</Text>
            </View>
          </TouchableHighlight> 
          <TouchableHighlight onPress = {this.navigateToScreen('BusRoute')}>
            <View style = {styles.card} >
              <Image source = {require('../images/BusRoute.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Bus Route</Text>
            </View>
          </TouchableHighlight> 
        </View>
        {/* Card for Home, Events, News, Voting,, Bus Route End */}

        {/* Card for Share, Sponsers, Visit Us, About Us Start */}
        <View style = {styles.bottomCard}>
          <TouchableHighlight onPress = {this.navigateToScreen('Share')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Share.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Share</Text>
            </View>
          </TouchableHighlight>   
          <TouchableHighlight onPress = {this.navigateToScreen('Sponsers')}>
            <View style = {styles.card} >
              <Image source = {require('../images/Sponsers.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Sponsers</Text>
            </View>
          </TouchableHighlight>                    
          <TouchableHighlight onPress = {this.navigateToScreen('VisitUs')}>
            <View style = {styles.card} >
              <Image source = {require('../images/VisitUs.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >Visit Us</Text>
            </View>
          </TouchableHighlight>               
          <TouchableHighlight onPress = {this.navigateToScreen('AboutUs')}>
            <View style = {styles.card} >
              <Image source = {require('../images/AboutUs.png')} style = {styles.cardImage}/>
              <Text  style = {styles.cardTopic} >About Us</Text>
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
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 5
  },
  cardTopic: {
    color: '#06525F',
    fontSize:20
  }
})
export default CustomDrawerComponent;