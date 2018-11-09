import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native';

export default class VoteNow extends Component {
  render() {
    return (
        <View>
            {/* Header Component Start */}
            <View style = {styles.header}>
                <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.goBack(this.props.navigation.state.key)} style = {styles.backIconImage} >
                    <Image
                        style={{width: 20, height: 20, marginRight:15}}
                        source={require('../images/leftarrowWhite.png')}
                    />
                </TouchableHighlight>
                <Text style = {{color: '#fff', fontSize: 20}}> Photography Competition</Text>
            </View>
            {/* Header Component End */}            
            <View style = {{alignItems: 'center'}}>
                <TextInput placeholder = "Search.." style = {{marginTop: 10, height: 45, width: '92%',fontSize: 20,padding: 10, backgroundColor: '#fff',borderWidth: 1, borderRadius: 5  }} />
                {/* <Image 
                    style={{width: 30, height: 30, resizeMode: 'contain', position: 'absolute', right: 25,marginTop:17}}
                    source={require('../images/Search.png')}
                /> */}
            </View>
            <View  style={{alignItems: 'center'}}>
                <View style={styles.card}>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photo Id: </Text>0001</Text>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photographer: </Text>Bibek K.C.</Text>
                    <TouchableOpacity>
                            <View style = {styles.button1}>
                                <Text style = {styles.texts}>VOTE</Text>
                            </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photo Id: </Text>0001</Text>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photographer: </Text>Bibek Photographer</Text>
                    <TouchableOpacity>
                            <View style = {styles.button1}>
                                <Text style = {styles.texts}>VOTE</Text>
                            </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photo Id: </Text>0001</Text>
                    <Text style = {{fontSize: 16}}><Text style = {{fontWeight: 'bold'}}>Photographer: </Text>Bibek K.C.</Text>
                    <TouchableOpacity>
                            <View style = {styles.button1}>
                                <Text style = {styles.texts}>VOTE</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    card:{
        marginTop: 20,
        height: 130,
        width: '92%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
      height: 40,
      width: 100,
      borderRadius: 5,
      backgroundColor: "#06525F",
      alignItems: 'center',
      padding: 5,
      marginTop: 10
      
      },
    texts: {
      fontSize: 20,
      color: '#fff'
    },
    header: {
        backgroundColor:'#06525F',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',  
        paddingLeft:15
    },       

});