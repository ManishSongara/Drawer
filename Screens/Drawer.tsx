import * as React from 'react';
import { Button, ScrollView, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Contact from './Contact';

function CustomDrawerContent(props){
	return(
		<ScrollView style={styles.container}>
			<View style={styles.drawerHeader}>
				<Text style={styles.drawerHeaderText}>Drawer Menu</Text>
			</View>
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props}/>
					<DrawerItem
						//icon={}
						label="cloase drawer"
						onPress={()=> props.navigation.closeDrawer()}
					/>
			</DrawerContentScrollView>
		</ScrollView>
	);	
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
	return(			
		<Drawer.Navigator backBehavior="history" drawerContent={prop => <CustomDrawerContent {...prop}/>}>
			<Drawer.Screen name="Home" component={Home}/>
			<Drawer.Screen name="Contact" component={Contact}/>
		</Drawer.Navigator>	
	);
}

export default function DrawerNav() {
  return (
   <NavigationContainer>
       <MyDrawer/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	drawerHeader:{
		backgroundColor:"#03cafc",
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: "row"
	},
	drawerHeaderText:{
		color: "white",
		fontSize: 24,
		fontWeight: "bold"
	}
  });
