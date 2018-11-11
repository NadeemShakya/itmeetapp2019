
import React, {Component} from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import RegisterScreen from './src/components/RegisterScreen';
import HomeScreen from './src/components/HomeScreen';
import EventsScreen from './src/components/EventsScreen';
import NewsScreen from './src/components/NewsScreen';
import BusRouteScreen from './src/components/BusRouteScreen';
import ShareScreen from './src/components/ShareScreen';
import SponsersScreen from './src/components/SponsersScreen';
import VisitUsScreen from './src/components/VisitUsScreen';
import AboutUsScreen from './src/components/AboutUsScreen';
import EventDetail from './src/components/EventDetail';
import Voting from './src/components/Voting';
import VoteNow from './src/components/VoteNow';
import QRCodeScanner from './src/components/QRCodeScanner';
import Register from './src/components/webview';

class App extends Component {
  render() {
    return(
      <RootDrawer />
    );
  }
}

// Drawer from React-navigation.
const RootDrawer = createDrawerNavigator(
  // Route Configuration
  {
    Home: HomeScreen,
    Register: Register,
    Events: EventsScreen,
    News: NewsScreen,
    Voting: Voting,
    VoteNow: VoteNow,
    BusRoute: BusRouteScreen,
    Share: ShareScreen,
    Sponsers: SponsersScreen,
    VisitUs: VisitUsScreen,
    AboutUs: AboutUsScreen ,
    EventDetail: EventDetail,
    QRCodeScanner: QRCodeScanner
  },
  // DrawerNavigatorConfg
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
  }

);
export default App;