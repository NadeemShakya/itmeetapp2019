import React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';

const Header = (props) => {
    const {headerView, headerText, backArrow} = styles;
    return (
        <View style={headerView}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require('../images/leftarrowWhite.png')} style={backArrow} />  
            </TouchableOpacity>
            <Text style={headerText}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = {
    headerView: {
        backgroundColor: '#06525F',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingBottom: 20
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 25
    },
    backArrow: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 15
    }
}

export default Header;