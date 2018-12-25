import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// IT MEET logo
import logo from '../images/logo.png';

import EventsScreen from './EventsScreen';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            OrientationPortrait: true,
            OrientationLandScape: false,
            Height_Layout: '',
            Width_Layout: '',
        }
    }
    componentDidMount() {
        this.DetectOrientation();
    }
    // used for defining orientation of the device.
    DetectOrientation() {
        if(this.state.Height_Layout > this.state.Width_Layout) {
            this.setState({
                OrientationPortrait: true,
                OrientationLandScape: false
            })
        }else if(this.state.Height_Layout < this.state.Width_Layout) {
            this.setState({
                OrientationPortrait: false,
                OrientationLandScape: true
            })
        }
    }
    static navigationOptions ={
        title: 'Home ',       
        drawerIcon: (
            <Image source = {logo} style = {{width:50, height:50}} />
        )
    }
    events = [
        {
            id:'1',
            icon: require('../images/Register.png'),
            title: 'Register',
            link: 'Register'
        },
        {
            id:'2',
            icon: require('../images/events.png'),
            title: 'Events',
            link: 'Events'
        },
        {
            id:'3',
            icon: require('../images/News.png'),
            title: 'News',
            link: 'News'
        },
        {
            id:'4',
            icon: require('../images/Bus.png'),
            title: 'Bus Route',
            link: 'BusRoute'
        },
        {
            id:'5',
            icon: require('../images/share.png'),
            title: 'Share',
            link: 'Share'
        },
        {
            id:'6'  ,
            icon: require('../images/Sponsers.png'),
            title: 'Sponsors',
            link: 'Sponsers'
        },
        {
            id:'1',
            icon: require('../images/visit.png'),
            title: 'Visit Us',
            link: 'VisitUs'
        },
        {
            id:'1',
            icon: require('../images/aboutus.png'),
            title: 'About Us',
            link: 'AboutUs'
        },
        {
            id:'1',
            icon: require('../images/developers.png'),
            title: 'Developers',
            link: 'Developers'
        },
    ]
    render() {
        const colorStyles = {
            width: (parseInt(this.state.Width_Layout) - 90) / 3
        }
        return(
            <View style = {{backgroundColor:'#fff', flex:1}}>
                {/* Header Division Start */}
                <View style = {styles.header}>
                    <View style = {styles.menuIcon}>
                        <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.openDrawer()} >
                            <Icon  name = "bars" size = {35} color = "#FFF" />
                        </TouchableHighlight>
                    </View>
                    <View style = {styles.logo}>
                        <Image source = {logo} style = {{width: 45, height:45, marginLeft:-22.5}} />
                    </View>
                </View>
                <ScrollView onLayout = {(event) => 
                    this.setState(
                        {
                        Width_Layout: parseInt(event.nativeEvent.layout.width),
                        Height_Layout: parseInt(event.nativeEvent.layout.height),
                        },
                        () => this.DetectOrientation()
                    )
                }>
             
                {/* Body Component Start */}
                <View style = {styles.body}>
                    <View style = {{justifyContent:'center', alignItems:'center', height: 120}}>
                        <Text style = {{fontSize:40, color: '#06525F'}}>IT MEET v8.0</Text>
                        <Text style = {{fontSize:15}}>Digitize  |  Innovate  |  Lead</Text>
                    </View>
                    <View style = {styles.innerBody}>
                        <FlatList data = {this.events} extraData = {this.state} keyExtractor = {(item, index) => item.id} renderItem = {({item}) => 
                            <View style = {{padding:10}}>
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate(item.link, item)} >
                                <View style = {[styles.eventCardBoxes, colorStyles]}>
                                    <Image source = {item.icon}  style = {styles.eventIcons}/>
                                    <Text style = {{textAlign:'center', color: '#06525F', fontSize:13}}>{item.title}</Text>
                                </View>
                                </TouchableOpacity>
                                
                            </View>
                        } style = {{flex:1}} numColumns = {3}/>
                    </View>
                </View>
                {/* Body Component End */}
            </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor:'#06525F',
        flexDirection: 'row',
        height: 60,
    },
    menuIcon: {
        flex:1,
        opacity:.7,
        paddingTop:15,
        paddingLeft:15
    },
    logo: {
        flex:1,
        justifyContent: 'flex-start',
        paddingTop:7.5
    },
    body: {
        flex:1,
        margin:15,
        borderRadius:3,
    },
    innerBody: {
        flexDirection:'row',
        marginTop: 30
    },
    eventCardBoxes: {
        height:135,
        padding:10,
        borderRadius:3,
        borderWidth: 0.5, 
        borderColor: '#000',
        alignItems: 'center', 
        justifyContent:'space-evenly',
    },
    eventIcons: {
        height: 55,
        width: 55,
        resizeMode: 'contain'
    }
})

export default HomeScreen;