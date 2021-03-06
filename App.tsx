import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from './BottomNav/BottomNav';
import StackNav from './Navigation/stackNav';
import TabkNav from './Navigation/TopNav';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './Screen_Social/Home';
import Nav from './Navigation_Social/BottomNav';
import Header from './Navigation_Social/Header';
import DrawerNav from './Screens/Drawer';
//import Home from './Screens/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (      
           //<DrawerNav/>    
           //<BottomNav/>
           //<StackNav/>
           //<TabkNav/>
           <Nav/>    
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});