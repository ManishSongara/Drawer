import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from  'react-native'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomNav from '../BottomNav/BottomNav';
import DrawereNavigation from '../Screens/DrawerNavigation';

function Home({navigation}) {
  
  const insets = useSafeAreaInsets();
    return (
      <View style={{  paddingTop: insets.top,paddingBottom: insets.bottom, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#03cafc" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Home is here!</Text>
        <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
      </View>
    );
  }
  
  function Contact({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#c203fc" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Contact is here!</Text>
        <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("About")}
      />
      </View>
    );
  }
  
  function About({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#48d969" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>About is here!</Text>
        <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Home")}
      />
      </SafeAreaView>
    );
  }


  const Tab =  createMaterialTopTabNavigator();

const NavBar = ()=>{
    return(
        <Tab.Navigator
                initialRouteName="Home"               
            >
            <Tab.Screen
                name="Home"
                component={Home}                           
            />
             <Tab.Screen
                name="Contact"
                component={DrawereNavigation}            
            />
              <Tab.Screen
                name="About"
                component={BottomNav}            
            />
        </Tab.Navigator>


    );
}


const TabkNav = () =>{
    return(
        <SafeAreaProvider>
        <NavigationContainer>
        <NavBar/>
    </NavigationContainer>
    </SafeAreaProvider>
    
    );    
}

export default TabkNav;
