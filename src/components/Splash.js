import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableHighlight,
  Alert,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions} from 'react-navigation';
import { StackNavigator, DrawerNavigator } from 'react-navigation'

// Images
import logo from '../../images/logo.png';
import background from '../../images/background.jpg';

// Landing component
// import App from './Landing'

// Screen Width and Height
SCREEN_HEIGHT = Dimensions.get('window').height;
SCREEN_WIDTH = Dimensions.get('window').width;

// Logo Width and Height
LOGO_MAX_WIDTH = 230;
LOGO_MAX_HEIGHT = 230;
LOGO_MIN_WIDTH = 100;
LOGO_MIN_HEIGHT = 100;

class Splash extends Component{
  constructor() {
    super();
  }
  render(){
    return(
      <View>
        <StatusBar hidden = {true} />

        <View style = { [ styles.container , { width : SCREEN_WIDTH, height : SCREEN_HEIGHT } ] }>
          <Image source = { background } style = { 
            { 
              height: SCREEN_HEIGHT,
              width: SCREEN_WIDTH
            } 
          } />

            <View style = { 
              { 
                width: LOGO_MAX_WIDTH,
                height: LOGO_MAX_HEIGHT,
                position: 'absolute'
              } 
            }>
              <Image 
                source = { logo }
                style = {
                  {
                    width : LOGO_MAX_WIDTH,
                    height: LOGO_MAX_HEIGHT,
                    marginTop: (SCREEN_HEIGHT / 2) - (LOGO_MAX_HEIGHT),
                    marginLeft: (SCREEN_WIDTH / 2) - (LOGO_MAX_WIDTH / 2),
                    zIndex: 2,
                    opacity: 1
                  }
                }
              />
            </View>

            <View style = {
              {
                position: 'absolute',
                width: SCREEN_WIDTH,
                top: SCREEN_HEIGHT / 2,
              }
            }>
                <Text style={
                  { 
                    textAlign: 'center',
                    fontSize: 40,
                    color: '#fff',
                    fontWeight: 'bold',
                    textShadowColor: 'rgba(0,0,0,0.6)',
                    textShadowOffset: {
                      width: 1,
                      height: 1
                    },
                    textShadowRadius: 10,

                    opacity: 1
                  }
                }>IT MEET v8.0</Text>

                <Text style={
                  { 
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#fff',
                    textShadowColor: 'rgba(0,0,0,0.6)',
                    textShadowOffset: {
                      width: 1,
                      height: 1
                    },
                    textShadowRadius: 10,

                    opacity: 1
                  }
                }>Digitize  |  Innovate  |  Lead</Text>

                <Text style={
                  { 
                    textAlign: 'center',
                    fontSize: 26,
                    paddingTop: 60,
                    color: '#fff',
                    textShadowColor: 'rgba(0,0,0,0.6)',
                    textShadowOffset: {
                      width: 1,
                      height: 1
                    },
                    textShadowRadius: 10,

                    opacity: 1
                  }
                }>Dec 28 - 29, 2018</Text>
                <Text style={
                  { 
                    textAlign: 'center',
                    fontSize: 14,
                    color: '#fff',
                    textShadowColor: 'rgba(0,0,0,0.6)',
                    textShadowOffset: {
                      width: 1,
                      height: 1
                    },
                    textShadowRadius: 10,

                    opacity: 1
                  }
                }>Kathmandu University, Dhulikhel</Text>

            </View>

            <View style = {
              {
                position: 'absolute',
                width: SCREEN_WIDTH,
                top: SCREEN_HEIGHT - 50,
                opacity: 1
              }
            }>
                <Icon 
                  name="chevron-down" 
                  style = {
                    {
                      textAlign: 'center',
                      fontSize: 30,
                      color: '#fff',
                      textShadowColor: 'rgba(0,0,0,0.8)',
                      textShadowOffset: {
                        width: 1,
                        height: 1
                      },
                      textShadowRadius: 10
                    }
                  }
                  onPress = {() => this.props.navigation.navigate('Landing')}
                />
            </View>
        </View>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : '#c4e4ff'
  }
});

export default Splash;