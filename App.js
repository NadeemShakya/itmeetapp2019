import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './src/components/Splash';
import Landing from './Landing';
export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}
const MyNavigator = createStackNavigator(
  {
    Splash: Splash,
    Landing: Landing,
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);