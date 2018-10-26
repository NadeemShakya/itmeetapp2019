import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ScrollView,
    SectionList
} from 'react-native';
// BackArrow for header
import BackArrow from '../images/leftarrowWhite.png';

class EventDetail extends Component {
    render() {
        // Receiving props of an event.
        const {navigation} = this.props;
        const eventTitle = navigation.getParam('title');
        const icon = navigation.getParam('icon');
        const eventDescription = navigation.getParam('description');
        const fee = navigation.getParam('fee');
        const date = navigation.getParam('date');
        const time = navigation.getParam('time');
        const venue = navigation.getParam('venue');
        const prizes = navigation.getParam('prizes', '-');
        const contactInfo = navigation.getParam('contact');

        return(
         <View style = {styles.container}>
                {/* Header Component Start */}
                <View style = {styles.header}>
                    <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.navigate('Events')} style = {styles.backIconImage} >
                            <Image
                                style={{width: 20, height: 20, marginRight:15}}
                                source={BackArrow}
                            />
                    </TouchableHighlight>
                    <Text style = {{color: '#fff', fontSize: 20}}>{eventTitle}</Text>
                </View>
                {/* Header Component End */} 
                <ScrollView>
                    {/* Body Component Start */}
                    <View style = {styles.body}>
                        <View style = {styles.logo}>
                            <Image source = {icon} style = {styles.image}/>
                            <Text style = {{textAlign:'center'}}>{eventTitle}</Text>
                        </View>
                        <View style = {{padding:'5%'}}>
                            {/* Event Description Goes here */}
                            <Text style = {{fontSize: 16, lineHeight: 20}}>
                                {eventDescription}
                            </Text>
                            {/* Entry Fee Section */}
                            <View style = {{marginTop: 20}}>
                                <Text>
                                    <Text style = {{fontWeight: 'bold'}}>Entry Fee: </Text>
                                    <Text>{fee}</Text>
                                </Text>
                            </View>
                            {/* Date and Time Section */}
                            <View style = {{flexDirection: 'row',justifyContent: 'space-between', marginTop: 10}}>
                                <View style = {{flex:1}}>
                                    <Text>
                                    <Text style = {{fontWeight: 'bold'}}>Date: </Text>
                                    <Text>{date}</Text>
                                    </Text>
                                </View>
                                <View  style = {{flex:1}}>
                                    <Text>
                                        <Text style = {{fontWeight: 'bold'}}>Time: </Text>
                                        <Text>{time}</Text>
                                    </Text>
                                </View>
 
                            </View>
                            {/* Venue Section */}
                            <View style = {{marginTop: 10}}>
                                <Text>
                                    <Text style = {{fontWeight: 'bold'}}>Venue: </Text>
                                    <Text>{venue}</Text>
                                </Text>
                            </View>  
                            <View style = {{marginTop: 10}}>
                            <SectionList 
                                sections = {prizes}
                                renderSectionHeader = {({section}) => 
                                    <Text style = {{fontWeight: 'bold'}}>{section.title}</Text>
                                }
                                renderItem = {({item}) => 
                                    <Text style = {{marginTop: 5, marginBottom: 5}}>{item}</Text>
                                }
                                keyExtractor = {(item, index) => index}
                            />
                        </View>  
                        </View>     


                        {/* Register Button Section          */}
                        <View style = {{marginTop: 50}}>
                            <TouchableHighlight style = {styles.registerButton} >
                                <Text style = {{color: '#fff', fontSize:20}}>REGISTER</Text>
                            </TouchableHighlight>
                        </View>  
                    </View> 
                {/* Body Component End      */}
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
    header: {
        backgroundColor:'#06525F',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',  
        paddingLeft:15
    },
    body: {
        backgroundColor:'#fff',
        marginTop:100,
        marginLeft:15,
        marginRight: 15,
        marginBottom: 10, 
        borderRadius:3,
        shadowColor:'rgba(0, 0, 0, 0.7)',
        elevation:1,
    },
    image: {
        height:60,
        width: 60,
        resizeMode: 'contain'
    },
    logo: {
        shadowColor:'rgba(0,0,0,0.5)',
        elevation:2,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#fff',
        height: 120,
        width: 120,
        marginTop:-60,
        borderRadius: 3,
        padding:10,

    },
    infoCard: {
        marginTop:25,
        flex:1,
        height: 300
    },
    registerButton: {
        backgroundColor:'#06525F',
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 30, 
        width: '90%', 
        marginLeft:'5%', 
        borderRadius: 15, 
        shadowColor: '#000000', 
        shadowOffset: {width:0, height:3}, 
        shadowOpacity:0.7, 
        shadowRadius: 2, 
        elevation:2
    }

})
export default EventDetail;