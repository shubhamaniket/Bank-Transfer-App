import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window');

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.boxone}>
                    <Text style={{marginTop:50,marginBottom:15,color:'#fff',fontSize:25,fontWeight:'bold'}}>Bank Transfer App</Text>
                    <Text style={{color:'#fff'}}>Made By - Shubham Aniket</Text>
                    <Image 
                    source={{uri : 'https://cdn.dribbble.com/users/189524/screenshots/7202003/media/f56ec5c320f89eb6f6a3dad9567da9cf.gif'}}
                    style={{marginTop:25,width : width - 25, height : 300}}
                    />
                </View>
                <View style={styles.boxtwo}>
                    <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
                        <AwesomeButton 
                        width={width - 50}
                        backgroundActive = "#000"
                        backgroundColor = "#000"
                        backgroundDarker = "#fff"
                        backgroundShadow = "#000"
                        backgroundPlaceholder = "#000"
                        onPress = {()=> this.props.navigation.navigate('ViewUsers')}
                        >
                            <Entypo name="users" size={24} color="#fff" />
                        <Text style={{color:'#fff',fontWeight:'bold'}}>   View Users</Text>
                    </AwesomeButton>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#4084E8'
    },
    boxone : {
        flex : 2,
        alignItems : 'center',
        justifyContent : 'center'
    },
    boxtwo : {
        flex : 1
    }
})