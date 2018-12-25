import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Header from './Header';
 

class EventsScreen extends Component {
    // Array to hold all the main events
    events = [
        {
            id:'1',
            icon: require('../images/events/hackathon.png'),
            title: 'Hackathon',
            description: '\" Have an idea? Make your way through Hackathon to Minimum Viable Product (MVP) in 40 hours.\" \n\n Hackathon is an event where developers, programmers, and tech enthusiasts are aimed to develop something innovative and useful with the time constraint of 40 hours on the basis of the given theme. Participants will be given a workspace with the topnotch internet connection. There is no restriction in programming language and platform. \n\n Project has to be completed within the given time. In the end, a presentation has to be given by the participating team. The panel of judges will decide the winner based on creativity, innovation, completeness, and other critical factors',
            fee : 'Rs 500 per person',
            date: '27 28 29 December',
            time: '10am 27th December 2018',
            venue: 'Kathmandu University, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['20,000']
                },
                 {
                     title: '2nd Place',
                     data: ['10000']
                 },
                 {
                     title: '3rd Place',
                     data: ['5000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            
        },
        {
            id:'2',
            icon: require('../images/events/yomaricodecamp2018.png'),
            title: 'Yomari Code Camp',
            description: 'Yomari Code Camp is a two-day event in the IT MEET which provides a platform for the students as well as tech enthusiasts to initiate an idea and deploy it into a useful application. The participants provide their ideas based on certain themes provided in the event. The participants, then need to develop an app using any platform within a short time frame based on their idea and skill-sets, present their final output, and justify their efforts to win. Yomari Code camp is not only just an ordinary event about participating and winning, but a platform where participants can test their problem-solving skills for problems faced in professional life and find their capacity to navigate through such potentially tricky situations. This platform also provides an excellent opportunity to be guided by expert mentors which will help the participants gain ideas and pursue their future endeavors. The participants can develop their applications on any of the mentioned themes.',
            fee : 'Free',
            date: 'December 28th - 29th, 2018',
            time: '9:00',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['12,000']
                },
                 {
                     title: '2nd Place',
                     data: ['7,000']
                 },
                 {
                     title: '3rd Place',
                     data: ['5,000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScREUC2Nfx99l_0tz4wQ7Adan0U-t_0_0HFcjTFsZLM0pBPGA/viewform',
        },
        {
            id:'3',
            icon: require('../images/events/AI.png'),
            title: 'AI Event',
            description: 'Fusemachines AI Competition is a competitive event to be organized in ITMEET V8.0 at Kathmandu University, Dhulikhel, Kavre which provides a platform for the students as well as AI enthusiasts It is a competition for students and developers to come up with artificial intelligence (AI) solutions. The competition will be held among the best selected teams and The prize will be given in three categories.A team can choose to perform in all three categories and win the maximum of 25K from the competition. So this event targets to build up a platform for the AI enthusiast in Nepal.',
            fee : 'Free',
            date: '28 & 29 December',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: 'Dataset 1', 
                    data: ['10,000']
                },
                 {
                     title: 'Dataset 2',
                     data: ['10,000']
                 },
                 {
                     title: 'Insight/Visualization',
                     data: ['5000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdpvkFA9_bTkyTlTLtsfh9rOR_5DSZkWWLGY3JTP5aTqm_QiQ/viewform',
            
        },
        {
            id:'4',
            icon: require('../images/events/coding.png'),
            title: 'Coding Challenge',
            description: 'Coding challenge is an event at IT Meet which consists of the participants receiving a logic based mathematical problem that has to be solved and submitted under a certain time limit without the use of any internet facility. The programmer may use any programming language of their choice. Participants with correct submission will receive a prize. All required materials which include computers, compilers and code editors will be provided to the participants. There will be three levels for the participants to choose. They can register in either easy,intermediate or difficult level according to their choice. The prize will be given to the winners according to the level they compete in.',
            fee : 'Free',
            date: '28 29 December',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['Exciting Gift Hampers']
                },
                 {
                     title: '2nd Place',
                     data: ['Exciting Gift Hampers']
                 },
                 {
                     title: '3rd Place',
                     data: ['Exciting Gift Hampers']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSexU2pDsIHg3AohI7uIJZ_buxkepaOC6azig_prSiZ8yT4ukQ/viewform',
            
        },
        {
            id:'5',
            icon: require('../images/events/codingTournament.png'),
            title: 'Coding Tournament',
            description: 'Coding Tournament is an event at IT Meet which consists of the participant teams of 2 members receiving some logic based mathematical problem that has to be solved and submitted under a certain time limit without the use of any internet facility.The Questions will be provided in different rounds and teams will be eliminated in each round.. The Programming team can discuss and help each other while tackling the problem. The team may use any programming language of their choice. Participant group reaching the final will receive a prize.',
            fee : 'Rs 150',
            date: '28th and 29th December 2018',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['7000']
                 },
                 {
                     title: '3rd Place',
                     data: ['3000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScGGJ8arc4AeEWLYMU7ZhCb207lAW49euiIWixC_23A4uOkQA/viewform?fbclid=IwAR2kpW9KLf0lwUB3ETtFWjfoGGyyXuEqwNQYiHANSBt2M1dqM7uSSvA696c',
        },
        {
            id:'6',
            icon: require('../images/events/careerFair.png'),
            title: 'Career Fair',
            description: 'Career Fair is one of the exciting juncture of tech enthusiast generation and different IT companies, going to be held as a part of IT MEETv8.0 on 29th of December 2018 at Kathmandu University, Dhulikhel, Kavre. The event brings different Companies under the same roof and provides an opportunity to the working professionals meet other employers and exchange their aspirations for the right direction of heir career. The event provides an exciting opportunity to IT field people and students to meet different. IT Companies, know their working areas and present their CV and get a chance to get recruit as an intern or employer. The event help Companies get potential employers and job hunters get the right job. \n\n The event features components like onsite interviews and career counseling which acts a bridge between the Market ready graduates and Companies. The event aims to solve the problem of talent acquisition which is often faced by newly graduates. We believe to become a trendsetter in the IT Market for the final year students and newly graduates to guide them with their career choices. Thus, Companies can screen potential staffs which are best fit for their company based on their experience. Visit Career Fair this December 29, 2018 on IT MEETv8.0 at Kathmandu University, Dhulikhel, Kavre',
            fee : 'Free',
            date: '29th December',
            time: '10am - 3pm',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSc8k8CIIqj_04w5vZx1t6czLtMOYcLK6IEp2xp9gQLGNZONxA/viewform',
        },
        {
            id:'7',
            icon: require('../images/events/3D.png'),
            title: '3D Animation',
            description: '3D Animation competition is organized for the first time in the IT Meet v8.0 to provide a depth with new experience of 3D. In this event participants are assigned certain theme which they need to satisfy through there animation and creativity within the dedicated time. Each team consists of 4 participants and they have to bring their own laptop along with the necessary software or application.',
            fee : 'Rs. 300 per team',
            date: '28th 29th December',
            time: '8am- 5pm (First Day) 9am-2pm(Second Day)',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
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
                     data: ['3000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdaS5t85Wd4IY122gfMJOWZHx0aP5bqF9NE9wLyZ94JpEi16g/viewform',
        },
        {
            id:'8',
            icon: require('../images/events/designCompetition.png'),
            title: 'Design Competition',
            description: 'Design competition is an event organized by IT Meet v8.0 where all the participants are allocated a certain theme decided by our sponsor on which they have to show their creativity and ingenuity and design or illustrate their creations within the given time frame. Participants are allowed to use any application of their choice for designing, animating or illustrating and are allowed to use the internet facility. Participants are required to bring their own laptop and necessary software and applications for designing.',
            fee : 'Free',
            date: '28th 29th December',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['By sponser']
                },
                 {
                     title: 'First Runner Up',
                     data: ['By Sponser']
                 },
            ],
            link: 'https://docs.google.com/forms/d/1bP0SX7uiFqzzr4cPVWWJRpGeiP0sFao1TPoAoLH4YjI/viewform?fbclid=IwAR3pe_VLfOSG2KpUXXFIW69sIz8ORlTV_gsM_zWyBEARtN6HQLcv0ZLQCQ4&edit_requested=true'
            
        },
        {
            id:'9',
            icon: require('../images/events/soft.png'),
            title: 'Software Competition',
            description: 'The software competition is an annual event of Kathmandu University that is held during the IT Meet. The competition provides an opportunity to showcase and promote the software projects of the students. The winner will be selected based on the audience reception and decided by the judges.',
            fee : 'Free',
            date: 'To be notified via email',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Prize', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Prize',
                     data: ['6,000']
                 },
                 {
                     title: '3st Prize',
                     data: ['3,000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfShVbJx0KWRr6GTc9-62Bx6hht3nhscBvdViREl8ovuRs17g/viewform',
        },
        {
            id:'10',
            icon: require('../images/events/Pen-testing.png'),
            title: 'Penetrating Testing',
            description: 'Pentesting Competition is an event at IT Meet which provides a vehicle for up and coming cyber security student teams to build and hone the skills required to effectively discover, triage, and mitigate critical security vulnerabilities. This competition is unique in offering a simulated environment that mimics real world networks. The competition focuses on improving the security posture of a fictitious organization and reporting on risks in a manner that is similar to a real professional environment. It consists of the participant teams, maximum of 3 members receiving some problem based on cyber securities and vulnerabilities that has to be solved and submitted under a certain time limit. The team can discuss and help each other while tackling the problem. Participants must use their technical knowledge and skills to identify weaknesses in a simulated corporate environment without impacting the operations of simulated business activities.',
            fee : 'Rs 500 per person ',
            date: '28th & 29th December',
            time: 'Dec 28 10:00 AM ~ Dec 29 04:00 PM (GMT+8, 48 hours)',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['10,000']
                },
                 {
                     title: '2nd Place',
                     data: ['6,000']
                 },
                 {
                     title: '3st Place',
                     data: ['3,000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-PufkJp7DCw0zEueL1uh1kY1dGMzM4Zkr2CBpiqjdzXQewQ/viewform',
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
           
            
        },
        {
            id:'15',
            icon: require('../images/events/Photography.png'),
            title: 'Photography Competition',
            description: 'Photography contest is a platform where photographers (amateur, intermediate or professional) can show their photography skills and tell their stories via photographs. Photographers can participate by sending us their best photograph. Among the submitted photos, the winning photographs are selected on the basis of certain criteria (either judged by a professional photographer or by voting) and prizes are awarded to the winners',
            fee : 'Rs.75 / Photo',
            date: '28th December',
            time: '09:00',
            venue: 'KU Ring Road',
            prizes: [
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
           
            
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
                {   
                    title: '1st Place', 
                    data: ['20,000']
                },
                 {
                     title: '2nd Place',
                     data: ['15000']
                 },
                 {
                     title: '3rd Place',
                     data: ['10000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSf_Ite5iiH09gMnuIXjDgCH3tLCWgc464o3DcqASBRYgo_f2Q/viewform?usp=send_form',
           
            
        },
        {
            id:'19',
            icon: require('../images/events/startup.png'),
            title: 'Start-up Competition',
            description: 'Startup Competition is a two day event which aims to provide encouragement and opportunities to those who are willing to share their innovative ideas related to infrastructural development in order to solve the socioeconomic hurdles faced in our society. Contestants are provided an idea pitching workshop to help them learn about the presentation skills, contents to be included in a startup pitch, how to manage the time and how to be persuasive on their startup idea \n\n The teams then will present their ideas in front of the panel of judges for the main event. The participants will be given a workspace with internet connection for the duration of the event. The participants will also be provided with the meal facility. \n\n The panel of judges will decide the winner based on the workability, creativity, innovation and other critical factors.',
            fee : 'Rs 500 per team',
            date: 'December 28th - 29th, 2018',
            time: 'Participant will be notified via email',
            venue: 'Kathmandu University Central Campus, Dhulikhel',
            prizes: [
                {   
                    title: '1st Place', 
                    data: ['20,000']
                },
                 {
                     title: '2nd Place',
                     data: ['15000']
                 },
                 {
                     title: '3rd Place',
                     data: ['10000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdPZUkLiHkr_MdcfhgjhE5CuOKSBcuFtQp8M0GOOdjDuwtHug/viewform',
        },
        {
            id:'20',
            icon: require('../images/events/fifa.png'),
            title: 'Fifa 19',
            description: 'The FIFA gaming sanga continues at the IT MEET 2018 v8.0 as the mega event perpares for FIFA 19 gaming compeitition event as the part of the mega gaming event. Experience the gaming fever and show your FIFA skillset to prove yourself as the best. FIFA 19 which was released earlier this year, stands out from its predecessor and the time has come for YOU to stand out from your opponents. Register immediately to kick-off.',
            fee : 'Rs.250',
            date: '28th December',
            time: '09:00',
            venue: 'Block 9',
            prizes: [
                {   
                    title: 'Fifa 1st Place', 
                    data: ['15,000']
                },
                 {
                     title: 'Fifa 2nd Place',
                     data: ['10,000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSf5r3-_SNi1CafUlWZ6eoBNNy_WUB0vYIeQM1uz0cSTIwj_rA/viewform',
            
            
        },
        {
            id:'21',
            icon: require('../images/events/Dota.png'),
            title: 'Dota 2',
            description: 'DOTA 2 is one of the most popular and loved moba (multiplayer online battle arena) games in the world. In the context of Nepal, IT meet has always been one of the biggest platforms which offers lucrative prize pool for the competitive dota 2 teams of Nepal. It also aspires emerging dota 2 enthusiasts towards competitive dota 2. The competing teams will compete in best of one series for the preliminary stages in the upper and lower bracket format. The semi finals and finals will be played in best of three and best of five format respectively. The event will last for 3 days which can last 9 hours per day and final will be played on the third day. Register to participate !!!!',
            fee : 'Rs.2000 / Team',
            date: '27th December - 29th December',
            time: '09:00',
            venue: 'Block 9',
            prizes: [
                {   
                    title: 'Dota 1st Place', 
                    data: ['25,000']
                },
                 {
                     title: 'Dota 2nd Place',
                     data: ['15,000']
                 }
            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScXbmM1mmBsJFOZW40YAwVP8b3yfKpbjmr4e7AI4bDtPZh3Mw/viewform',
            
            
        },
        {
            id:'22',
            icon: require('../images/events/Pubg.png'),
            title: 'Robotics Event',
            description: 'PlayerUnknowns Battlegrounds (PUBG) Mobile is an online multiplayer battle royale game on mobile devices. PUBG mobile is a player versus player action game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. In the context of Nepal, IT meet has always been one of the biggest platforms for gaming and PUBG mobile is an up and coming game which has gained massive popularity with the Nepali Youth. It is going to be held as a part of IT MEET v8.0 for the first time.',
            fee : 'Squad: Rs.500, Solo: Rs.150',
            date: '28th December',
            time: '09:00',
            venue: 'Block 9',
            prizes: [
                {   
                    title: 'Pubg Squad 1st Place', 
                    data: ['12,000']
                },
                 {
                     title: 'Pubg Squad 2nd Place',
                     data: ['8,000']
                 },
                 {   
                    title: 'Pubg Solo 1st Place', 
                    data: ['6,000']
                },
                 {
                     title: 'Pubg Solo 2nd Place',
                     data: ['3,000']
                 }

            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfkHEy8aB2DLUTnAoe9DK0urEi3cYF78T44DIECA2vu1BlaNw/viewform',
            
            
        },
        {
            id:'23',
            icon: require('../images/events/csgo.png'),
            title: 'Counter Strike - GO',
            description: 'Acoustic Night is  a culture of IT MEET than an event where students will perform various songs and musicals. This event will serve to entertain the students and the guests of IT Meet.More than 500 students attended the Acoustic Night last year.',
            fee : 'Rs.1000/Team',
            date: '27th December - 29th December',
            time: '09:00',
            venue: 'Block 9',
            prizes: [
                {   
                    title: 'CS-GO 1st Place', 
                    data: ['15,000']
                },
                 {
                     title: 'CS-GO 2nd Place',
                     data: ['10,000']
                 }

            ],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScU7XYXhgmpA970QI3uOVNYEXHzIHiyjjTtyuA2JQw-0AD9NQ/viewform?vc=0&c=0&w=1',
            
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
            <View style = {styles.container}>
                {/* Header Component of the Page */}
                <Header title = "Events" onPress = {() => this.props.navigation.goBack()}/>
                
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
                    <FlatList data = {this.events} extraData = {this.state} keyExtractor = {(item, index) => item.id} renderItem = {({item}) => 
                        <View style = {{padding:10}}>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('EventDetail', item)} >
                            <View style = {[styles.eventCardBoxes, colorStyles]}>
                                <Image source = {item.icon}  style = {styles.eventIcons}/>
                                <Text style = {{textAlign:'center', color: '#06525F', fontSize:13}}>{item.title}</Text>
                            </View>
                            </TouchableOpacity>
                            
                        </View>
                    } style = {{flex:1}} numColumns = {3}/>
                </View>
                {/* Body Component End */}
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
    body: {
        backgroundColor:'#fff',
        margin:15,
        borderRadius:3,
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
