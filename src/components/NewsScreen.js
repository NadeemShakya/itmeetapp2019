import React, {Component} from 'react';
import {View, Text, TextInput,Image, TouchableOpacity,TouchableHighlight, ScrollView} from 'react-native';
import {AccordionList} from "accordion-collapse-react-native";


import Header from './Header.js';
import NewsJson from '../assets/news.json';


class NewsScreen extends Component {
    
    state={ news : NewsJson,
            selected : 'none',
            status: false};

    head = (item) => {
        // console.log(item);
        if(this.state.selected === item.id){
            return(
                    <View style={styles.enlargeCard}>
                    
                            <Text style={styles.titleEnlarged}>{item.title}</Text>
                            <Text style={styles.enlargeDateStyle}>| {item.date}</Text>
                            <Text style = {styles.enlargedContent} numberOfLines = {12}>{item.content}</Text>
                      
                    </View>
            );
        }else{
            return (
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <Text style={styles.dateStyle}>| {item.date}</Text>
                        </View>
                    </View>
            );
        }

    }

    // body = (item) => {
    //     return(
    //             <Text>See You</Text>
    //     );
    // }

    // callNewsDetailsPage = () => {
    //     return this.props.navigation.navigate('NewsDetail');
    // }
    toggle = (value) => {
        if(this.state.selected === value) {
            return(
                this.setState({
                    selected: 'none'
                })
            );
        }else{
            return(
                this.setState({
                    selected: value
                })
            )
        }
    }


    render() {
        return(
            <View>
                <Header title="News" onPress={() => this.props.navigation.goBack()}/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput} placeholder="Search..."/>
                            <TouchableHighlight style={styles.searchImage}>
                                <Image source={require('../images/Search.png')} style={{width:25,height:25}}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <AccordionList
                    list={this.state.news}
                    header = {this.head}
                    // body={this.body}
                    onToggle={this.toggle}
                    />
                </ScrollView>   
            </View>      
        );
    }
}

const styles = {
    textInput: {
        height: 40,
        paddingLeft:10,
        flex:6,
        fontSize: 18,
        marginTop: 5
        // width: '96%',
    },
    textInputContainer:{
        flexDirection: 'row',
        width: '96%',
        backgroundColor: '#ffffff',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    card: {
        marginTop: 10,
        marginBottom: 5,
        height: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        shadowColor: '#000000',
        width: '96%',
        shadowOffset: {width:0, height:0},
        shadowOpacity:  .16,
        elevation: 3
    },
    searchImage: {
        // flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
        flex:1
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    titleEnlarged: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        paddingLeft: 10,
        color: '#fff'        
    },
    dateStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        // color: '#3b444b',
        fontFamily: 'Segoe UI',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 20
    },
    enlargeCard: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: '2%',
        backgroundColor: '#00838F',
        borderRadius: 2,
        shadowColor: '#000000',
        width: '96%',
        shadowOffset: {width:0, height:0},
        shadowOpacity:  .16,
        elevation: 3,
        flexDirection: 'column',
        padding: 10
    },
    enlargeTitleStyle: {
        flex:2,
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30
    },
    enlargeDateStyle: {
        // flex:1,
        fontSize: 12,
        color: '#ffffff',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 10
    },
    enlargedContent: {
        color: '#fff',
        padding: 10,
        lineHeight: 20
    },
    readMore: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 20,
        color: '#ffffff',
        fontSize: 12
    }
    
};

export default NewsScreen;