import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,ActivityIndicator}from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window');

export default class CreateUser extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                placeholder="Name" 
                style={styles.textinput}
                placeholderTextColor = "#fff"
                />
                <TextInput 
                placeholder="Email" 
                style={[styles.textinput,{marginTop:30}]}
                placeholderTextColor = "#fff"
                />
                <TextInput 
                placeholder="Initial Amount (in  ₹)" 
                style={[styles.textinput,{marginTop:30}]}
                placeholderTextColor = "#fff"
                />
                <AwesomeButton  
                width={width-30}
                backgroundActive = "#000"
                backgroundColor = "#000"
                backgroundDarker = "#fff"
                backgroundShadow = "#000"
                backgroundPlaceholder = "#000"
                style={{position:'relative',top : 50}}
                >
                    <AntDesign name="user" size={28} color="#fff" />
                    <Text style={{color:'#fff',fontWeight:'bold'}}>   Create a user</Text>
                </AwesomeButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#4084E8'
    },
    textinput : {
        borderWidth : 1,
        padding : 10,
        width : width - 30,
        borderColor : '#f2f2ff',
        color : '#fff',
        borderRadius : 5
    }
})