import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
 

class EventsScreen extends Component {
    // Array to hold all the main events
    events = [
        {
            id:'1',
            icon: require('../images/events/Github.png'),
            title: 'Hackathon ',
            eventDetail: 'GithubWorkshop'
        },
        {
            id:'2',
            icon: require('../images/events/hackathon.png'),
            title: 'Hackathon',
            eventDetail: 'Hackathon'
        },
        {
            id:'3',
            icon: require('../images/events/tedx.png'),
            title: 'TedX',
            eventDetail: 'TedX'
        },
        {
            id:'4',
            icon: require('../images/events/Photography.png'),
            title: 'Start-up Competition'
        },
        {
            id:'5',
            icon: require('../images/events/AI.png'),
            title: 'AI Event'
        },       
        {
            id:'6',
            icon: require('../images/events/coding.png'),
            title: 'Coding Competition '
        },
        {
            id:'7',
            icon: require('../images/events/competitveProgramming.png'),
            title: 'Coding Tournament '
        },
        {
            id:'8',
            icon: require('../images/events/careerFair.jpg'),
            title: 'Career Fair'
        },
        {
            id:'9',
            icon: require('../images/events/Github.png'),
            title: '3D Design Competition'
        },
        {
            id:'10',
            icon: require('../images/events/Github.png'),
            title: 'Design Competition'
        },    
        {
            id:'11',
            icon: require('../images/events/Github.png'),
            title: 'Software/Hardware Competition'
        },    
        {
            id:'12',
            icon: require('../images/events/Github.png'),
            title: 'Penetration Testing (Network Security Related)'
        },    
        {
            id:'13',
            icon: require('../images/events/Github.png'),
            title: 'Googling Competition'
        },    
        {
            id:'14',
            icon: require('../images/events/Github.png'),
            title: 'IT Quiz'
        },    
        {
            id:'15',
            icon: require('../images/events/Github.png'),
            title: 'Photography Competition'
        },    
        {
            id:'16',
            icon: require('../images/events/Github.png'),
            title: 'Selfie Competition'
        },    
        {
            id:'17',
            icon: require('../images/events/Github.png'),
            title: 'Alumni Meet'
        },    
        {
            id:'18',
            icon: require('../images/events/Github.png'),
            title: 'Idea Pitching'
        },    
        {
            id:'19',
            icon: require('../images/events/Github.png'),
            title: 'Gaming '
        },    
        {
            id:'20',
            icon: require('../images/events/Github.png'),
            title: 'LTSP e-Library Demonstration'
        },    
        {
            id:'21',
            icon: require('../images/events/Github.png'),
            title: 'Blood donation'
        },
        {
            id:'22',
            icon: require('../images/events/Github.png'),
            title: 'Robotics event'
        }                                                          
    ]
    constructor() {
        super();
        this.state = {
            OrientationPortrait: true,
            OrientationLandScape: false,
            Height_Layout: '',
            Width_Layout: '',
        }
    }
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
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
    render() {
        const {width, height} = Dimensions.get('window');
        const colorStyles = {
            width: (parseInt(this.state.Width_Layout) - 90) / 3
        }
        return(
            <ScrollView style = {styles.container} onLayout = {(event) => 
                this.setState(
                    {
                    Width_Layout: parseInt(event.nativeEvent.layout.width),
                    Height_Layout: parseInt(event.nativeEvent.layout.height),
                     },
                     () => this.DetectOrientation()
                )
            }>
                {/* Header Component Start */}
                <View style = {styles.header}>
                    <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.goBack(this.props.navigation.state.key)} style = {styles.backIconImage} >
                        <Image
                            style={{width: 20, height: 20, marginRight:15}}
                            source={require('../images/leftarrowWhite.png')}
                        />
                    </TouchableHighlight>
                    <Text style = {{color: '#fff', fontSize: 25}}>Events</Text>
                </View>
                {/* Header Component End */}
                
                {/* Body Component Start */}
                <View style = {styles.body}>
                    <FlatList data = {this.events} extraData = {this.state} keyExtractor = {(item, index) => item.id} renderItem = {({item}) => 
                        <View style = { {padding:10 }}>

                            <TouchableHighlight onPress = {this.navigateToScreen(item.eventDetail)}  underlayColor = 'transparent'>
                            <View style = {[styles.eventCardBoxes, colorStyles]}>
                                <Image source = {item.icon}  style = {styles.eventIcons}/>
                                <Text style = {{textAlign:'center', color: '#06525F', fontSize:13}}>{item.title}</Text>
                            </View>
                            </TouchableHighlight>
                            
                        </View>
                    } style = {{flex:1}} numColumns = {3}/>
                </View>
                {/* Body Component End */}
            </ScrollView>
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
        flex:1,
        alignItems: 'center',  
        paddingLeft:15
    },
    body: {
        backgroundColor:'#fff',
        flex:1,
        margin:15,
        borderRadius:3,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 0},
        shadowOpacity:.16,
        elevation:3,
        flexDirection:'row',
    },
    eventCardBoxes: {
        height:135,
        padding:10,
        borderRadius:3,
        alignItems: 'center', 
        shadowColor: 'grey',
        elevation:1,
        justifyContent:'space-evenly',
    },
    eventIcons: {
        height: 55,
        width: 55,
        resizeMode: 'contain'
    }
})
export default EventsScreen;