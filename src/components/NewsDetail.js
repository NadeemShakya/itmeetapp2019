import React, {Component} from 'react';
import {Text, View,TouchableOpacity, ScrollView} from 'react-native';
// import Justify from 'react-native-justify';


import Header from './Header';

// class NewsDetail extends Component{
//     render(){
//         const {navigate} = this.props;
//         return(
//             <View>
//                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('News')}>
//                     <Text>
//                         hello
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

const NewsDetail = (props) => {
    const {navigation} = props;
    const title = navigation.getParam('title');
    const date = navigation.getParam('date');
    const content = navigation.getParam('content');

    const { container,titleContainer,titleStyle,collegeStyle,dateStyle,bodyContainer,bodyTextStyle } = styles;
    return(
        <ScrollView>
            {/* <Header title="News Detail"onPress={()=>navigation.navigate('News')}/> */}
            <Header title="News Detail" onPress={()=>navigation.navigate('News')} />
            <View style = {container}>
                <View style={titleContainer}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text style={collegeStyle}>Kathmandu University</Text>
                    <Text style={dateStyle}> | {date}</Text>
                </View>
                <View style={bodyContainer}>
                    <Text style={bodyTextStyle}>
                        {content}
                    </Text>
                    {/* <Justify text="The text to justify"
                            color="#ff0000"
                            // fontFamily="myFont.ttf"
                            fontSize={16}
                            lineHeightMultiplicator={2}
                            style={{height: 200}}
                    />; */}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = {
    container: {
        backgroundColor: '#f2f2f2',
        alignItems: 'center'
    },
    titleContainer:{
        height: 'auto',
        backgroundColor: '#00838F',
        width: '96%',
        marginTop: 16,
        padding: 10,
        borderColor: '#707070',
    },
    titleStyle:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 40
    },
    collegeStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 35
    },
    dateStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        marginTop:12,
        marginBottom: 25
    },
    bodyContainer: {
        width: '96%',
        backgroundColor: '#fff',
        borderColor: '#707070',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
        shadowColor: '#000',
        elevation: 3,
        padding: 20,
        // textAlign: 'justify'
    },
    bodyTextStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'left', //if ios only supports justify change it later
        marginRight: 10 
    }
}

export default NewsDetail;