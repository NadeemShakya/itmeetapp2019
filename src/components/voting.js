import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    FlatList
} from 'react-native';


export default class Voting extends Component {
  constructor() {
      super();
      this.state = {
          programs : [
              {
                id: '1',
                title: 'Photography Contest',
                description: `Lorem Ipsum is simply dummy text ofnting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
                imageURL: require('../images/events/Photography.png')
              },
              {
                id: '2',  
                title: 'Github Repo Contest',
                description: `Lorem Ipsum is simply dummy text ofnting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
                imageURL: require('../images/events/Github.png')             
              },
              {
                id: '1',
                title: 'Photography Contest',
                description: `Lorem Ipsum is simply dummy text ofnting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
                imageURL: require('../images/events/Photography.png')
              },
              {
                id: '1',
                title: 'Photography Contest',
                description: `Lorem Ipsum is simply dummy text ofnting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
                imageURL: require('../images/events/Photography.png')
              },
              {
                id: '1',
                title: 'Photography Contest',
                description: `Lorem Ipsum is simply dummy text ofnting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
                imageURL: require('../images/events/Photography.png')
              },                                          
          ]
      }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Header Component Start */}
        <View style = {styles.header}>
            <TouchableHighlight underlayColor = 'transparent' onPress = {() => this.props.navigation.goBack(this.props.navigation.state.key)} style = {styles.backIconImage} >
                <Image
                    style={{width: 20, height: 20, marginRight:15}}
                    source={require('../images/leftarrowWhite.png')}
                />
            </TouchableHighlight>
            <Text style = {{color: '#fff', fontSize: 22}}>Voting Section</Text>
        </View>
        {/* Header Component End */}
          <FlatList 
            data = {this.state.programs}
            keyExtractor = {(item, index) => item.id }
            renderItem = {({item}) => 
                <View style={styles.card}>
                    <View style={styles.insideCard}>
                        <View style={styles.leftCard}>
                        <Image 
                            style={{width: 100, height: 60, resizeMode: 'contain'}}
                            source={item.imageURL}
                        />
                        <Text style={{fontSize: 16, color: '#06525F',textAlign: 'center',marginTop: 8, lineHeight: 20}}>{item.title}</Text>

                        </View>
                        {/* <View style={styles.middleLine}></View> */}
                        <View style={styles.rightCard}>
                        <View>
                            <Text>{item.description}</Text>
                        </View>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('QRCodeScanner') }>
                                <View style = {styles.voteNowButton}>
                                    <Text style = {styles.texts}>Vote Now</Text>
                                </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
          />  
      </ScrollView>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    card:{
        marginTop: 10,
        marginLeft: '5%',
        marginBottom: 2,
        width: '90%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 2,
        flex:1,
    },
    insideCard:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        padding: 10
    },
    leftCard:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
        borderRightWidth:2,
        borderColor: '#06525F',
    },

    rightCard:{
        flex:2,
        paddingLeft: 15,
        paddingTop:30,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    voteNowButton: {
      height: 35,
      width: 90,
      borderRadius: 5,
      backgroundColor: "#06525F",
      alignItems: 'center',
      padding: 5,
      marginRight: 10
      },

    texts: {
      fontSize: 16,
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