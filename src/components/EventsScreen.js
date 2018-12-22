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
            icon: require('../images/events/Github.png'),
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
            icon: require('../images/events/penetratingTesting.jpg'),
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
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
            
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
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfERSOse14KOVO_y_aXnflCL35FXw38dQYYNf4PBNLrPA4LHw/viewform',
            emContact: 'Rupesh Poudel : 9849102465 / rupesh.poudel07@gmail.com \n Dinank Bista : 9840011611 /  bista.dinank@gmail.com \n Ashish Subedi : 9843520805 / subediashish35@gmail.com Khagendra Adhikari : 9849943379 / aadhikarikhagen30@gmail.com'
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
        flex:1,
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