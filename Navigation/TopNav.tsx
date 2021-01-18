import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from  'react-native'

function Home({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#03cafc" }}>
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#48d969" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>About is here!</Text>
        <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
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
                component={Contact}            
            />
              <Tab.Screen
                name="About"
                component={About}            
            />
        </Tab.Navigator>


    );
}


const TabkNav = () =>{
    return(
        <NavigationContainer>
        <NavBar/>
    </NavigationContainer>
    );    
}

export default TabkNav;
