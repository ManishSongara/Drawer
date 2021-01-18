import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from './BottomNav/BottomNav';
import StackNav from './Navigation/stackNav';
import TabkNav from './Navigation/TopNav';

const Drawer = createDrawerNavigator();

export default function App() {
  return (      
           //<DrawerNav/>    
           //<BottomNav/>
           //<StackNav/>
           <TabkNav/>
  );
}
