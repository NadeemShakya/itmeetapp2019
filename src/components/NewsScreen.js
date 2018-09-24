import React, {Component} from 'react';
import {View, Text} from 'react-native';

class NewsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'News'
    }
    render() {
        return(
            <View>
                <Text>NewsScreen</Text>
            </View>
        );
    }
}

export default NewsScreen;