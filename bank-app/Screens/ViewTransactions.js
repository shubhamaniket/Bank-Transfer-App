import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,ActivityIndicator,FlatList,SafeAreaView,Image}from 'react-native';
import { Entypo,MaterialCommunityIcons,AntDesign,FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('window');

export default class ViewTransactions extends React.Component{
    state = {
        transfers : [],
        loading : true
    }
    componentDidMount(){
        fetch('http://192.168.1.6:4000/transfers/',{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                transfers : response,
                loading : false
            })
        })
    }
    render(){
        if(this.state.loading){
            return(
                <View style={{flex:1,alignItems : 'center',justifyContent : 'center',backgroundColor:'#4084E8'}}>
                    <ActivityIndicator size="large" color="#fff"/>
                </View>
            );
        }
        else{
            return(
                <View style={styles.container}>
                        <FontAwesome name="refresh" size={24} color="#fff" style={{position:'absolute',top:50,right:15}} onPress={()=>this.componentDidMount()} />
                    <FlatList
                        data={this.state.transfers}
                        style={{marginTop : 80}}
                        showsVerticalScrollIndicator={false}
                        renderItem = {({item})=> {
                            return(
                                <View style={styles.card}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{color:'yellow',fontWeight:'bold',fontSize:25}}>{item.fromName}</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <AntDesign name="arrowright" size={34} color="yellow" />
                                    </View>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{color:'yellow',fontWeight:'bold',fontSize:25}}>{item.toName}</Text>
                                    </View>
                                    <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:25}}>₹  {item.amount}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor = {(item)=>item._id}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#4084E8',
        alignItems : 'center'
    },
    card : {
        margin : 5,
        width : width - 30,
        backgroundColor : '#4084E8',
        height : 100,
        shadowColor: "#4084E8",
        shadowOffset: {
            width: 200,
            height: 200,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 5,
        flexDirection : 'row'
    }
})