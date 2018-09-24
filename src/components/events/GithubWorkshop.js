import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Dimensions,
    WebView
} from 'react-native';

const {width, height} = Dimensions.get('window');
class GithubWorkshop extends Component {
    render() {
        return(
            <View style = {styles.container}>
                {/* Header Component Start */}
                <View style = {styles.header}>
                    <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.goBack()} style = {styles.backIconImage} >
                        <Image
                            style={{width: 20, height: 20, marginRight:15}}
                            source={require('../../images/leftarrowWhite.png')}
                        />
                    </TouchableHighlight>
                    <Text style = {{color: '#fff', fontSize: 20}}>Github Workshop</Text>
                </View>
                {/* Header Component End */} 

                <View style = {styles.body}>
                    <View style = {styles.imageCard}>
                        <Image source = {require('../../images/events/Github.png')} style = {styles.image}/>
                        <Text style = {{textAlign:'center'}}>Github Workshop</Text>
                    </View>
                    <WebView
                    source={{
                        html:
                        "<style>p{text-align:justify; font-size:20px}</style>" +
                        "<p>" +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                         "Phasellus commodo tortor ut ipsum pharetra sodales. Praesent" +
                          " sed diam non lacus convallis dapibus. Sed vulputate erat risus," +  
                          "ac hendrerit eros egestas id. Etiam pellentesque auctor ipsum, non " + 
                          "cursus nisi gravida sed. Ut eget pretium risus. Curabitur a lectus odio." + 
                          "Etiam felis urna, pharetra ut odio in, tristique suscipit tortor. Cras vitae"+ 
                          "risus odio. Etiam a leo elit. Duis molestie fermentum mi vitae pretium. Morbi" +
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                         "Phasellus commodo tortor ut ipsum pharetra sodales. Praesent" +
                          " sed diam non lacus convallis dapibus. Sed vulputate erat risus," +  
                          "ac hendrerit eros egestas id. Etiam pellentesque auctor ipsum, non " + 
                          "cursus nisi gravida sed. Ut eget pretium risus. Curabitur a lectus odio." + 
                          "Etiam felis urna, pharetra ut odio in, tristique suscipit tortor. Cras vitae"+ 
                          "risus odio. Etiam a leo elit. Duis molestie fermentum mi vitae pretium. Morbi" +
                          "</p>" +
                          "<b>Entry Fee </b>: Free <br><br>"+
                          "<b>Date </b>: 27th Dec 2018 <br><br>"+                     
                          "<b>Venue</b>: Room: 3s04, Block 8 <br><br>"             

                    }}
                  style = {{marginTop:20}}/>
                    {/* <Text style = {{fontSize:17, marginTop: 10}}>Entry Fee: Free</Text>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                            <Text style = {{fontSize:17}}>Date: 27th Dec 2018</Text>
                            <Text style = {{fontSize:17}}> Time: 09:00 AMT </Text>
                    </View>
                    <Text style = {{fontSize:17, marginTop: 10}}>Venue: Block 8 Room 103</Text> */}
                 
                </View>      
                <View style = {styles.footer}>
                    <TouchableHighlight style = {{backgroundColor:'#06525F', height: 60, justifyContent:'center', alignItems:'center'}} >
                        <Text style = {{color: '#fff', fontSize:20}}>REGISTER</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default GithubWorkshop;
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
        marginTop:90,
        marginLeft:15,
        marginRight: 15,
        borderRadius:3,
        shadowColor:'rgba(0, 0, 0, 0.7)',
        elevation:1,
        padding:20,
        flex:1,
        marginBottom:60
        

    },
    footer: {
        backgroundColor:'red',
        position:'absolute',
        bottom:0,
        height:60,
        width: '100%',

    },
    image: {
        height:60,
        width: 60,
        resizeMode: 'contain'
    },
    imageCard: {
        shadowColor:'rgba(0,0,0,0.5)',
        elevation:2,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 0,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#fff',
        height: 120,
        width: 120,
        marginTop:-80,
        borderRadius: 3,
        padding:10,

    },
    infoCard: {
        marginTop:25,
        flex:1,
        height: 300
    },

})