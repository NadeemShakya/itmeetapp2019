import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class VisitUsScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const eventTitle = this.props.getParam('name');        
        return(
            <View>
                <Text>{eventTitle}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')} >
                                <Text style = {{color: '#000', fontSize:20}}>REGISTER</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default VisitUsScreen;