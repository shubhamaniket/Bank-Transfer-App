import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import TransferScreen from './Screens/TransferScreen';
import CreateUser from './Screens/CreateUser';
import ViewUsers from './Screens/ViewUsers';
import ViewTransactions from './Screens/ViewTransactions';
import { Entypo,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="CreateUser" component={CreateUser}/>
      <Stack.Screen name="ViewUsers" component={ViewUsers}/>
    </Stack.Navigator>
  );
}

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor : '#fff',
          inactiveTintColor : '#fff',
          activeBackgroundColor : '#1965D3',
          style : {
            backgroundColor : '#4084E8',
          },
          labelPosition : 'beside-icon',
          keyboardHidesTabBar : true,
        }}
        >
          <Tab.Screen name="StackScreen" component={StackScreen} 
          options={{
            tabBarLabel : 'Home',
            tabBarIcon: () => (
              <Entypo name="home" size={24} color="#fff" /> 
            ),
          }}/>
          <Tab.Screen name="Transfer" component={TransferScreen} 
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="bank-transfer" size={34} color="#fff" /> 
            ),
          }}
          />
          <Tab.Screen name="Transaction" component={ViewTransactions} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name="money" size={24} color="#fff" />
            ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}