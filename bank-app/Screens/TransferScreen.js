import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,ActivityIndicator,FlatList,SafeAreaView,Image}from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import AwesomeButton from "react-native-really-awesome-button";

const {width,height} = Dimensions.get('window');
const users = ['A','B','C','D','E','F','G','H','I','J']

export default class TransferScreen extends React.Component{
    state = {
        users : [],
        selectedFromName : '',
        fromId : '',
        selectedToName : '',
        toId : '',
        sentamount : 0,
        fromName : '',
        toName : '',
        fromIndex : 0,
        toIndex : 0,
        initialAmountFrom : 0,
        initialAmountTo : 0,
        loading : true
    };
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
    loaddropdowns = () => {
        return this.state.users.map(user=>(
          <Picker.Item label={user.name} value={user._id} key={user._id}/>
        ))
      }    

    updateAmount = () => {
        alert('Amount of ₹ ' + this.state.sentamount + ' successfully transferred from ' + this.state.fromName + ' to ' + this.state.toName);

        fetch(`http://192.168.1.6:4000/users/${this.state.fromId}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
            var leftAmount = Number(response.amount) - Number(this.state.sentamount);
            fetch(`http://192.168.1.6:4000/users/update/${this.state.fromId}`,{
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    "amount" : Number(leftAmount)
                })
            })
            .then((res)=>res.json())
            .then((response)=>console.log('Updated Done !'))
        })

        fetch(`http://192.168.1.6:4000/users/${this.state.toId}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
            var leftAmount = Number(response.amount) + Number(this.state.sentamount);
            fetch(`http://192.168.1.6:4000/users/update/${this.state.toId}`,{
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    "amount" : Number(leftAmount)
                })
            })
            .then((res)=>res.json())
            .then((response)=>this.props.navigation.navigate('Home'))
        })
    }

    transfer = () => {
        /*
            Sender Name
        */
        if(this.state.fromIndex === 1){
            this.setState({fromName : users[0]})
        }
        else if(this.state.fromIndex === 2){
            this.setState({fromName : users[1]})
        }
        else if(this.state.fromIndex === 3){
            this.setState({fromName : users[2]})
        }
        else if(this.state.fromIndex === 4){
            this.setState({fromName : users[3]})
        }
        else if(this.state.fromIndex === 5){
            this.setState({fromName : users[4]})
        }
        else if(this.state.fromIndex === 6){
            this.setState({fromName : users[5]})
        }
        else if(this.state.fromIndex === 7){
            this.setState({fromName : users[6]})
        }
        else if(this.state.fromIndex === 8){
            this.setState({fromName : users[7]})
        }
        else if(this.state.fromIndex === 9){
            this.setState({fromName : users[8]})
        }
        else if(this.state.fromIndex === 10){
            this.setState({fromName : users[9]})
        }
        /* 
            Recipient Name
        */
        if(this.state.toIndex === 1){
            this.setState({toName : users[0]})
        }
        else if(this.state.toIndex === 2){
            this.setState({toName : users[1]})
        }
        else if(this.state.toIndex === 3){
            this.setState({toName : users[2]})
        }
        else if(this.state.toIndex === 4){
            this.setState({toName : users[3]})
        }
        else if(this.state.toIndex === 5){
            this.setState({toName : users[4]})
        }
        else if(this.state.toIndex === 6){
            this.setState({toName : users[5]})
        }
        else if(this.state.toIndex === 7){
            this.setState({toName : users[6]})
        }
        else if(this.state.toIndex === 8){
            this.setState({toName : users[7]})
        }
        else if(this.state.toIndex === 9){
            this.setState({toName : users[8]})
        }
        else if(this.state.toIndex === 10){
            this.setState({toName : users[9]})
        }


        fetch('http://192.168.1.6:4000/transfers/add/',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "fromid" : this.state.fromId,
                "toid" : this.state.toId,
                "fromName" : this.state.fromName,
                "toName" : this.state.toName,
                "amount" : this.state.sentamount
            })
        })
        .then((res)=>res.json())
        .then((response)=>{this.updateAmount()})
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
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontSize:25,fontWeight:'bold'}}>Transfer Money</Text>
                    </View>
                    <View style={{flex:2}}>
                        <View style={styles.box}>
                            <Picker
                                selectedValue={this.state.selectedFromName}
                                style={{ width: '100%',height:'100%', color:'#fff'}}
                                onValueChange={(itemValue, itemIndex) =>{
                                    this.setState({selectedFromName:itemValue,fromId : itemValue,fromIndex:itemIndex})
                                }
                                }
                                >
                                <Picker.Item label="Select Sender's Name" value="null" key="0"/>
                                {this.loaddropdowns()}
                            </Picker>
                        </View>
                        <View style={[styles.box,{marginTop: 35}]}>
                            <Picker
                                selectedValue={this.state.selectedToName}
                                style={{ width: '100%',height:'100%', color:'#fff'}}
                                onValueChange={(itemValue, itemIndex) =>{
                                    this.setState({selectedToName:itemValue,toId : itemValue,toIndex : itemIndex})
                                }
                                }>
                                <Picker.Item label="Select Recipient's Name" value="null" key="0"/>
                                {this.loaddropdowns()}
                            </Picker>
                        </View>
                        <View style={[styles.box,{marginTop: 35}]}>
                            <TextInput
                            style={{width:'100%',height:'100%',color:'#fff',padding:10,fontSize:15}}
                            placeholder = "Enter Amount to be transferred (in  ₹)"
                            placeholderTextColor = "#fff"
                            numeric
                            keyboardType={'numeric'}
                            onChangeText = {(num)=>{
                                this.setState({
                                    sentamount : num
                                })
                            }}
                            />
                        </View>
                        <AwesomeButton  
                        width={width-30}
                        backgroundActive = "#000"
                        backgroundColor = "#000"
                        backgroundDarker = "#fff"
                        backgroundShadow = "#000"
                        backgroundPlaceholder = "#000"
                        style={{position:'relative',top : 50}}
                        onPress = {()=>{this.transfer()}}
                        >
                            <FontAwesome name="send" size={24} color="#fff" />
                            <Text style={{color:'#fff',fontWeight:'bold'}}>   Transfer Money</Text>
                        </AwesomeButton>
                    </View>
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
    box : {
        height : 50,
        width : width - 30,
        borderWidth : 2,
        borderColor : '#fff'
    }
})