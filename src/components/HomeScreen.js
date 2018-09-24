import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
class HomeScreen extends Component {
    static navigationOptions ={
        title: 'Home ',       
        drawerIcon: (
            <Image source = {require('../images/ITMEETLOGO.png')} style = {{width:50, height:50}} />
        )
    }
    render() {
        return(
            <View>
                {/* Header Division Start */}
                <View style = {styles.header}>
                    <View style = {styles.menuIcon}>
                        <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.openDrawer()} >
                            <Image
                                style={{width: 30, height: 30, marginLeft:10}}
                                source={require('../images/menu.png')}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style = {styles.logo}>
                        <Image source = {require('../images/ITMEETLOGO.png')} style = {{width: 45, height:45, marginLeft:-22.5}} />
                    </View>
                </View>
                {/* Header Division End */}

                {/* Body Division to be filled out by Rai */}
                <View style = {styles.body}>
                    <Text>
                        IT MEET v8.0
                    </Text> 
                </View>
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
        paddingTop:15
    },
    logo: {
        flex:1,
        justifyContent: 'flex-start',
        paddingTop:7.5
    },
    body: {
        alignItems: 'center',
    }
})

export default HomeScreen;