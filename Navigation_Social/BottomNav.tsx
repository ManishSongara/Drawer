import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Button, View, Text, StyleSheet, Platform } from 'react-native';
import Home from '../Screen_Social/Home';
import { NavigationContainer } from '@react-navigation/native';
import Msg from '../Screen_Social/Msg';
import Notific from '../Screen_Social/Notification';
import Profile from '../Screen_Social/profile';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from 'react-native-paper';
const TabBottom = createBottomTabNavigator();
const MyNav = ()=>{
    return(
        <TabBottom.Navigator>
            <TabBottom.Screen  name="Home" component={Home} options={{
                tabBarLabel:"Home",
                tabBarIcon: ({ color, size }) => (
                    <Icon name={Platform.OS === 'ios' ? "ios-home" : "md-home"} color={color} size={size} />
                  ),
            }}/>            
            <TabBottom.Screen name="msg" component={Msg} options={{
                tabBarIcon:({color, size}) =>(
                    <Icon name={Platform.OS === 'ios' ? "ios-mail" : "md-mail"} color={color} size={size} />
                ),
            }}
            
            
            />
            <TabBottom.Screen name="Notification" component={Notific} options={{
                tabBarIcon:({color, size}) =>(
                    <Icon name={Platform.OS === 'ios' ? "ios-notifications" : "md-notifications"} color={color} size={size} />
                ),
            }}
            
            />
            <TabBottom.Screen name="profile" component={Profile} options={{
                tabBarIcon:({color, size}) =>(
                    <Avatar.Text size={24} label="P" />
                ),
            }}
            
            />
        </TabBottom.Navigator>
    ); 
};

   const Nav = ()=>{
     return(
        <NavigationContainer>
            <MyNav/>
        </NavigationContainer>        
     );

 };

 export default Nav;
