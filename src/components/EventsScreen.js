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
    StatusBar
} from 'react-native';
import {NavigationActions} from 'react-navigation';
 

class EventsScreen extends Component {
    // Array to hold all the main events
    events = [
        {
            id:'1',
            icon: require('../images/events/Github.png'),
            title: 'Github Workshop ',
            description: 'qui ipsum. Cillum pariatur qui Lorem eiusmod id duis quis nostrud laborum anim est ullamco. Lorem aliquip officia sunt nulla. Est et excepteur incididunt eu occaecat ad ex magna in sunt adipisicing. Dolor deserunt eu eu mollit minim adipisicing ad reprehenderit. Ea pariatur consectetur exercitation quis. Duis proident laborum laborum sint. Fugiat sint veniam commodo pariatur quis ipsum qui id mollit enim in veniam qui ipsum. Cillum pariatur qui Lorem eiusmod id duis quis nostrud laborum anim est ullamco. Lorem aliquip officia sunt nulla. Est et excepteur incididunt eu occaecat ad ex magna in sunt adipisicing',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
    
        },
        {
            id:'2',
            icon: require('../images/events/hackathon.png'),
            title: 'Hackathon',
            description: 'Hackathon is a codefest with a time restriction of 40 hours. The goal is to produce an autonomous software from scratch on an unrehearsed topic  through the course of the event. A team of at most 5 people is expected to create a functioning project by the end of the allocated time. A central topic is focused on for the event. There is no restriction on the type of software being created.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'3',
            icon: require('../images/events/tedx.png'),
            title: 'TedX',
            description: 'TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideas and elevating them to a global stage. TEDx events are produced independently of TED conferences, each event curates speakers on their own, but based on TED\'s format and rules.TEDx event is organized in order to discover ideas and spark conversations in various fields including computer technology and IT. Speakers from local communities are invited to speak to the mass of audience present in the IT meet. The theme for TedX Kathmandu University is “Citizenship lies in the service for the country”. We are organizing TedX for the first time.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            
        },
        {
            id:'4',
            icon: require('../images/events/startup.png'),
            title: 'Start-up Competition',
            description: 'This competition is an improvement on the previous renditions of the project demo where our central focus used to be concerned solely with engineering. We have decided to organize this competition to provide the engineering students with an insight into the management sector. The participants will be in incubation for a period of 3 months with the guidance of expert managerial personnel. ',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'5',
            icon: require('../images/events/AI.png'),
            title: 'AI Event',
            description: 'qui ipsum. Cillum pariatur qui Lorem eiusmod id duis quis nostrud laborum anim est ullamco. Lorem aliquip officia sunt nulla. Est et excepteur incididunt eu occaecat ad ex magna in sunt adipisicing. Dolor deserunt eu eu mollit minim adipisicing ad reprehenderit. Ea pariatur consectetur exercitation quis. Duis proident laborum laborum sint. Fugiat sint veniam commodo pariatur quis ipsum qui id mollit enim in veniam qui ipsum. Cillum pariatur qui Lorem eiusmod id duis quis nostrud laborum anim est ullamco. Lorem aliquip officia sunt nulla. Est et excepteur incididunt eu occaecat ad ex magna in sunt adipisicing',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'6',
            icon: require('../images/events/coding.png'),
            title: 'Coding Competition',
            description: 'In the Coding Competition competition, a logic-based programming problem will be given to the participants. They have to develop an algorithm to solve the problem with a programming language of their choice. The participant who solves the problem first will be awarded a prize. Coding Competition was held for a day in IT Meet 2018. The participants were given a timeframe of 45 minutes to solve the problem. Out of 40 participants, 9 of them were able to solve the question',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'7',
            icon: require('../images/events/codingTournament.png'),
            title: 'Coding Tournament',
            description: 'To solve algorithmic and mathematical challenges using programming language of the students’ choice , they are asked to solve tough logical problems in a tournament format Coding Tournament in IT Meet 2018 was held for one day with 12 teams containing 3 participants each. Each team was given 4 questions which they had to solve within 3 and half hour. The competition was hosted on vjudge.net online judge and was decided as per the rule of competitive programming which means winner is decided by  more number of correct submission in lesser time. The winning teams were awarded with Rs.  7000, Rs. 5000 and Rs. 3000 for first, second and third place respectively.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'8',
            icon: require('../images/events/careerFair.png'),
            title: 'Career Fair',
            description: 'Career fair is a hub for interaction between potential employers and potential employees. This will provide students opportunity to meet employers and perform first interviews. Companies will not only get idea about the students interested in them but also students will be able to know about the various criterion for employment. In IT Meet 2018, more than 300 people including students, freelancers and job holders attended Career Fair.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'9',
            icon: require('../images/events/3D.png'),
            title: '3D Design Competition',
            description: 'No Info',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['5000']
                 },
                 {
                     title: '3rd Place',
                     data: ['2000']
                 }
            ],
            
        },
        {
            id:'10',
            icon: require('../images/events/designCompetition.png'),
            title: 'Design Competition',
            description: 'This competition is based on the competitor’s creativity with a particular theme. The participants with the best designs will be chosen and awarded with attractive gift hamper. Last IT Meet witnessed 18 participants in Designing Competition which was held for one day where they had to create a design on a theme given by sponsors within a given time frame (4 hours).',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: 'First Runner Up',
                     data: ['6000']
                 },
            ],
            
        },
        {
            id:'11',
            icon: require('../images/events/Github.png'),
            title: 'Software/Hardware Competition',
            description: 'In this event, the participants will showcase the software/hardware projects they have developed. Judges will evaluate the best entry and the winners will be rewarded accordingly. In IT Meet 2018, Software and Hardware Competitions were held for two days where teams described and presented their projects to the visitors and judges. 8 and 7 teams participated in Software and Hardware Competition respectively.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: 'S/W Competition 1st Prize', 
                    data: ['15,000']
                },
                 {
                     title: 'S/W Competition 2nd Prize',
                     data: ['7,500']
                 },
                 {
                     title: 'H/W Competition 1st Prize',
                     data: ['12,000']
                 },
                 {
                    title: 'H/W Competition 2nd Prize',
                    data: ['6,000']
                }
            ],
            
        },
        {
            id:'12',
            icon: require('../images/events/penetratingTesting.jpg'),
            title: 'Penetrating Testing',
            description: 'Pen testing competition is a tournament based competition in which cyber security enthusiasts gather and are provided with a series of task to break into (hack into) a system. Winners will be provided with attractive gift hampers.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'13',
            icon: require('../images/events/googlingCompetition.png'),
            title: 'Googling Competition',
            description: 'In this event, a group of four participants will be given a problem and the competitors will have to find the solution using the  Google search engine. The person who is able to find the highest number of solutions in shortest time will be awarded with attractive gift hampers. In IT Meet 2018, the Googling contest was held for one day. The participants were asked to answer 10 questions in 10 minutes using google and who ever answered it fast won. ',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: 'Prize', 
                    data: ['The participant who answered the the most questions quickly won a gift hamper sponsored by Urban Girls.']
                },
            ],
            
        },
        {
            id:'14',
            icon: require('../images/events/IT_quiz.png'),
            title: 'IT Quiz',
            description: 'An inter school quiz competition will be organized in IT Meet v8.0. The two teams will be awarded impressive gift hampers and a running shield. This event is to encourage and motivate students from early age towards ICT.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [

            ],
            
        },
        {
            id:'15',
            icon: require('../images/events/Photography.png'),
            title: 'Photography Competition',
            description: 'Participants submit their photos to be put on display in the venue. Visitors will vote on the best photo and a prize will be given to the photographer. In IT Meet 2018, the Photography contest was held for two days. In both days the photographs were exhibited. A total of 98 photographs were kept up for exhibition. Three of the photographs were selected as the winners. ',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'16',
            icon: require('../images/events/selfieCompetition.png'),
            title: 'Selfie Competition',
            description: 'No Info',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'17',
            icon: require('../images/events/alumniMeet.png'),
            title: 'Alumni Meet',
            description: 'Alumni meet is designated towards the reunion of the alumni of KU. In IT Meet 2018, Alumni Meet was held on 6th January, Saturday. Alumni who registered for the event were present except for a few. The program was initiated for the first time last year and its continuation is done in this year’s IT Meet.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'18',
            icon: require('../images/events/ideaPitching.png'),
            title: 'Idea Pitching',
            description: 'Participants will be given a platform where they will be able to pitch an idea on a topic which will be given to them by the organizers. They need to deliver their idea within a minute. The judges will select and award the best pitches under several criteria such as creativity, market feasibility, resources use, etc.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'19',
            icon: require('../images/events/gaming.png'),
            title: 'Gaming',
            description: 'FIFA,DOTA 2,Counter-Strike,Pubg Mobile,Mobile Games. For Cyber Gaming Competition, we aim to provide a platforms for the gamers to compete on several trending games. The winners will be awarded with attractive gift hamper.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
                {   
                    title: 'DOTA 1st Place', 
                    data: ['25,000']
                },
                 {
                     title: 'DOTA 2nd Place',
                     data: ['15,000']
                 },
                 {
                     title: 'FIFA 1st Place',
                     data: ['15,000']
                 },
                 {
                    title: 'FIFA 2nd Place',
                    data: ['8,000']
                }                 
            ],
            
        },
        {
            id:'20',
            icon: require('../images/events/ltsp_logo.png'),
            title: 'LTSP e-Library Demonstration',
            description: 'Linux Terminal Server Project (LTSP) e-Library is a project initiated by Help Nepal Network and technically supported by Department of Computer Science and Engineering (DoCSE), Kathmandu University.  IT Meet v8.0 will show how our e-Library project is being operated and how it is helping student learn better. In IT Meet 2018, LTSP e-library was demonstrated for two days. In both days brief concept about LTSP e-library and how a mere thin client can be used as an unit computer to help in the educational context of Nepal was demonstrated. Audiences were also free to explore the e-library contents.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'21',
            icon: require('../images/events/bloodDonation.png'),
            title: 'Blood Donation',
            description: 'KU Youth Red Cross (KUYRC) is collaborating with IT MEET v8.0 organizing committee to conduct blood donation program for the visitors of IT MEET v8.0.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [
            ],
            
        },
        {
            id:'22',
            icon: require('../images/events/robotic.png'),
            title: 'Robotics Event',
            description: 'This event is done in collaboration with Kathmandu University Robotics Club. We encourage community enthusiasts to participate in demonstration of various robotics project within and outside KU.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: 'Block 12 Room No: 102',
            prizes: [

            ],
            
        },
        {
            id:'23',
            icon: require('../images/events/acousticNight.png'),
            title: 'Acoustic Night',
            description: 'Acoustic Night is  a culture of IT MEET than an event where students will perform various songs and musicals. This event will serve to entertain the students and the guests of IT Meet.More than 500 students attended the Acoustic Night last year.',
            fee : 'Free',
            date: '28th December',
            time: '08:00',
            venue: '-',
            prizes: [

            ],
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
                    <View style = {{padding:10}}>

                        <TouchableHighlight onPress = {() => this.props.navigation.navigate('EventDetail', item)}  underlayColor = 'transparent'>
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
export default EventsScreen;