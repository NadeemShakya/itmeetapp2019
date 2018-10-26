import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// Images
import logo from './images/logo.png';
import background from './images/background.jpg';

// Landing component
import App from './Landing'

// Screen Width and Height
SCREEN_HEIGHT = Dimensions.get('window').height;
SCREEN_WIDTH = Dimensions.get('window').width;

// Logo Width and Height
LOGO_MAX_WIDTH = 230;
LOGO_MAX_HEIGHT = 230;
LOGO_MIN_WIDTH = 100;
LOGO_MIN_HEIGHT = 100;

// export default class ITMeet extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // for arrow y position
//       arrowPositionY: new Animated.Value(0),

//       // for scroll animation
//       scrollYPosition: new Animated.Value(0)
//     }

//     this._scrollView = null;
//   }

  

//   arrowAnimation = () => {
//     Animated.sequence([
//       Animated.timing(
//         this.state.arrowPositionY, 
//         {
//           toValue : 1,
//           duration: 1000
//         }
//       ),

//       Animated.timing(
//         this.state.arrowPositionY, 
//         {
//           toValue : 0,
//           duration: 1000
//         }
//       )
//     ]).start(() => {
//       this.arrowAnimation();
//     });
//   }

//   componentDidMount = () => {
//    this.arrowAnimation();
//   }

//   render() {
//     // For Animated Arrow
//     const yPosition = this.state.arrowPositionY.interpolate({
//       inputRange : [0, 1],
//       outputRange : [SCREEN_HEIGHT - 50, SCREEN_HEIGHT - 70]
//     });

//     const arrowOpacity = this.state.arrowPositionY.interpolate({
//       inputRange : [0, 1],
//       outputRange : [1, 0]
//     });


//     //  for Animated Logo
//     const logoSize = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - 300],
//       outputRange : [LOGO_MAX_HEIGHT, 100],
//       extrapolate : 'clamp'
//     });

//     const marginTop = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - 300, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
//       outputRange : [(SCREEN_HEIGHT / 2) - (LOGO_MAX_HEIGHT), SCREEN_HEIGHT + 10, SCREEN_HEIGHT + 10, SCREEN_HEIGHT + 10],
//       extrapolate : 'clamp'
//     });

//     const marginLeft = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - 300],
//       outputRange : [(SCREEN_WIDTH / 2) - (LOGO_MAX_WIDTH / 2), (SCREEN_WIDTH / 2) - (LOGO_MIN_HEIGHT / 2)],
//       extrapolate : 'clamp'
//     });

//     const logoOpacity = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - 300, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
//       outputRange : [1, 0.1, 1, 1],
//       extrapolate : 'clamp'
//     });

//     // For Home Text
//     const textTitleOpacity = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - 300],
//       outputRange : [1, 0],
//       extrapolate : 'clamp'
//     });

//     const textTitleTop = this.state.scrollYPosition.interpolate({
//       inputRange : [0, SCREEN_HEIGHT - SCREEN_HEIGHT / 2],
//       outputRange : [SCREEN_HEIGHT / 2, SCREEN_HEIGHT / 2 + 100],
//       extrapolate : 'clamp'
//     });

//     return (
//       <ScrollView 
//         ref= {component => this._scrollView = component}
//         scrollEventThrottle = {16}
//         pagingEnabled = {true}
//         showsVerticalScrollIndicator = {false}
//         onScroll = {
//           Animated.event([
//             {
//               nativeEvent : {
//                 contentOffset : {
//                   y : this.state.scrollYPosition
//                 }
//               }
//             }
//           ])
//         }
//         style = { 
//           { 
//             flex : 1
//           } 
//       }>
//         <StatusBar hidden ={ true } />
//         <View style = { [ styles.container , { width : SCREEN_WIDTH, height : SCREEN_HEIGHT * 2 } ] }>
//           <Image source = { background } style = { 
//             { 
//               height: SCREEN_HEIGHT,
//               width: SCREEN_WIDTH
//             } 
//           } />

//             <View style = { 
//               { 
//                 width: LOGO_MAX_WIDTH,
//                 height: LOGO_MAX_HEIGHT,
//                 position: 'absolute'
//               } 
//             }>
//               <Animated.Image 
//                 source = { logo }
//                 style = {
//                   {
//                     width : logoSize,
//                     height: logoSize,
//                     marginTop,
//                     marginLeft,
//                     zIndex: 2,
//                     opacity: logoOpacity
//                   }
//                 }
//               />
//             </View>

//             <Animated.View style = {
//               {
//                 position: 'absolute',
//                 width: SCREEN_WIDTH,
//                 top: textTitleTop,
//               }
//             }>
//                 <Animated.Text style={
//                   { 
//                     textAlign: 'center',
//                     fontSize: 40,
//                     color: '#fff',
//                     fontWeight: 'bold',
//                     textShadowColor: 'rgba(0,0,0,0.6)',
//                     textShadowOffset: {
//                       width: 1,
//                       height: 1
//                     },
//                     textShadowRadius: 10,

//                     opacity: textTitleOpacity
//                   }
//                 }>IT MEET v8.0</Animated.Text>

//                 <Animated.Text style={
//                   { 
//                     textAlign: 'center',
//                     fontSize: 20,
//                     color: '#fff',
//                     textShadowColor: 'rgba(0,0,0,0.6)',
//                     textShadowOffset: {
//                       width: 1,
//                       height: 1
//                     },
//                     textShadowRadius: 10,

//                     opacity: textTitleOpacity
//                   }
//                 }>Digitize  |  Innovate  |  Lead</Animated.Text>

//                 <Animated.Text style={
//                   { 
//                     textAlign: 'center',
//                     fontSize: 26,
//                     paddingTop: 60,
//                     color: '#fff',
//                     textShadowColor: 'rgba(0,0,0,0.6)',
//                     textShadowOffset: {
//                       width: 1,
//                       height: 1
//                     },
//                     textShadowRadius: 10,

//                     opacity: textTitleOpacity
//                   }
//                 }>Dec 27 - 28, 2018</Animated.Text>

//                 <Animated.Text style={
//                   { 
//                     textAlign: 'center',
//                     fontSize: 14,
//                     color: '#fff',
//                     textShadowColor: 'rgba(0,0,0,0.6)',
//                     textShadowOffset: {
//                       width: 1,
//                       height: 1
//                     },
//                     textShadowRadius: 10,

//                     opacity: textTitleOpacity
//                   }
//                 }>Kathmandu University, Dhulikhel</Animated.Text>

//             </Animated.View>

//             <Animated.View style = {
//               {
//                 position: 'absolute',
//                 width: SCREEN_WIDTH,
//                 top: yPosition,
//                 opacity: arrowOpacity
//               }
//             }>
//                 <Icon 
//                   name="chevron-down" 
//                   style = {
//                     {
//                       textAlign: 'center',
//                       fontSize: 30,
//                       color: '#fff',
//                       textShadowColor: 'rgba(0,0,0,0.8)',
//                       textShadowOffset: {
//                         width: 1,
//                         height: 1
//                       },
//                       textShadowRadius: 10
//                     }
//                   }
//                   onPress = {() => {
//                     this._scrollView.scrollTo({y : SCREEN_HEIGHT, animated : true});
//                   }}
//                 />
//             </Animated.View>
            
//             <App />

//         </View>
//       </ScrollView>
//     );
//   }
// }

export default class ITMeet extends Component {
  render() {
    return(
      <App />
    );
  }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor : '#c4e4ff'
  }
});
