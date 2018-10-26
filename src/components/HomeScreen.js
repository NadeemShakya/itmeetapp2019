import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// IT MEET logo
import logo from '../images/logo.png';

class HomeScreen extends Component {
    static navigationOptions ={
        title: 'Home ',       
        drawerIcon: (
            <Image source = {logo} style = {{width:50, height:50}} />
        )
    }
    render() {
        return(
            <View>
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
        paddingTop:15,
        paddingLeft:15
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