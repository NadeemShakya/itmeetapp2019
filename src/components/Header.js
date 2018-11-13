import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require('../images/leftarrowWhite.png')} style={styles.backArrow} />  
            </TouchableOpacity>
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#06525F',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20
    },
    backArrow: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 25
    }
});

export default Header;