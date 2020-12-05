import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,ActivityIndicator,FlatList,SafeAreaView,Image}from 'react-native';
import { Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window');

export default class ViewUsers extends React.Component{
    state = {
        users : [],
        loading : true
    }
    componentDidMount(){
        fetch('http://192.168.1.6:4000/users/',{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                users : response,
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
                    <FlatList
                        data={this.state.users}
                        style={{marginTop : 50}}
                        showsVerticalScrollIndicator={false}
                        renderItem = {({item})=> {
                            return(
                                <View style={styles.card}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <View style={{height : 70,width : 70,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                                            <Image source={require('../assets/man.png')} style={{width:'70%',height:'70%'}}/>
                                        </View>
                                    </View>
                                    <View style={{flex:2}}>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={{color:'#fff',fontSize:15}}><Text style={{fontWeight:'bold'}}>Name :</Text> {item.name}</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={{color:'#fff',fontSize:15}}><Text style={{fontWeight:'bold'}}>Email :</Text> {item.email}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:1,alignItems : 'center',justifyContent:'center'}}>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={{color:'#fff',fontSize:15}}><Text style={{fontWeight:'bold'}}>Amount</Text></Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={{color:'#fff',fontSize:15}}>₹  {item.amount}</Text>
                                        </View>
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