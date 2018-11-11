import React, {Component} from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableHighlight,
 TouchableOpacity,
 Image,
 Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
class Scanner extends Component {
    constructor() {
        super();
        this.state = {
            cameraType : 'back'
        }
    }
    // called immediately when camera finds a QRCode.
    onSuccess = (e) => {
        Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));
    }
    // used to toggle between front and rear camera.
    changeCamera = () => {
        var cameraState;
        cameraState = this.state.cameraType === 'back'? "front" : "back";
        this.setState({
            cameraType: cameraState
        })
    }
    render() {
        return(
            <View style = {styles.container}>
                {/* Header Component Start */}
                    <View style = {styles.header}>
                        <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.navigate('Voting')} style = {styles.backIconImage} >
                            <Image
                                style={{width: 18, height: 18, marginRight:20}}
                                source={require('../images/leftarrowWhite.png')}
                            />
                        </TouchableHighlight>
                        <Text style = {{color: '#fff', fontSize: 18}}>QRCode Scanner</Text>
                        <TouchableOpacity  onPress = {this.changeCamera} style = {{position: 'absolute', right: 15}}>
                            <Image source = {require('../images/rotateCamera.png')} style = {{width: 28, height: 28}}/>
                        </TouchableOpacity>
                    </View>
                {/* Header Component End */}    

                {/* QRCodeScanner Component Starts */}
                <QRCodeScanner 
                    onRead = {this.onSuccess}
                    reactivate = {true}
                    reactivateTimeout = {20}
                    topContent = {
                        <View style = {{width: '85%', opacity: .8}}>
                            <Text style = {{color: '#fff', textAlign: 'center'}}>Place the code in the camera and it will be scanned automatically.</Text>
                        </View>
                    }
                    bottomContent = {
                        <TouchableOpacity style = {styles.helpButton} onPress = {() => {}}> 
                            <Text style = {{color: '#fff'}}>Help me get a QRCode !</Text>
                        </TouchableOpacity>
                    }                    
                    containerStyle = {{ backgroundColor: '#043F49'}}
                    cameraStyle = {{width: '90%', marginLeft: '5%', opacity: .8}}
                    showMarker = {true}
                    cameraProps = {{borderRadius: 10}}
                    cameraType = {this.state.cameraType}
                />
                {/* QRCodeScanner Component End */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06525F',
        flex:1
    },
    header: {
        backgroundColor:'#06525F',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',  
        paddingLeft:15,
        shadowColor: '#000',
        elevation:3
    },     
    helpButton: {
        padding: 15,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#06525F',
        opacity: .8
    }
})
export default Scanner;