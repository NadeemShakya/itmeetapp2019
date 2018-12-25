import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';

class AboutUsScreen extends Component{
    render(){
      return(
         <View style = {styles.container}>
                {/* Header Component Start */}
                    <Header title = "About US" onPress = {() => this.props.navigation.navigate('Events')}/>
                {/* Header Component End */} 
                <ScrollView>
                    {/* Body Component Start */}
                    <View style = {styles.body}>
                        <View style = {styles.logo}>
                            <Image source = {require('../../images/logo.png')} style = {styles.image}/>
                            <Text style = {{textAlign:'center'}}>IT MEET</Text>
                        </View>
                        <View style = {{padding:'5%'}}>
                            {/* Event Description Goes here */}
                            <Text style = {{fontSize: 16, lineHeight: 20}}>
                                IT MEET is the largest non-profit tech meet up organized at University level by the Department of Computer Science and Engineering (DoCSE) of Kathmandu University, held annually in Nepal. It is a multitude of conventions and events that aim to appreciate and celebrate the growing IT market in Nepal by rewarding and promoting brilliant student bodies in this field through various competitions. IT Meet blends together the commercial and educational aspect of information technology by bringing together people who are already in this field or those who are thinking of entering this field and creating a melting pot of people to get educated about IT.
                            </Text>
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
        height:90,
        width: 90,
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
    

})
export default AboutUsScreen;
