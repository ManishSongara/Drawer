import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView,Text } from 'react-native';
import Home from './Home';
import Contact from './Contact';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
function CustomDrawerContent(props){
	return(
		<SafeAreaView>
		<ScrollView style={styles.container}>
			<View style={styles.drawerHeader}>
				<Text style={styles.drawerHeaderText} >Drawer Menu</Text>
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
		</SafeAreaView>
	);	
}
const Drawer = createDrawerNavigator();

function MyDrawer(){
	return(
		<SafeAreaProvider>
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={Home}/>
			<Drawer.Screen name="Contact" component={Contact}/>
		</Drawer.Navigator>
		</SafeAreaProvider>

	);
}
export default function DrawereNavigation(){
    return(
		
			<MyDrawer/>
		
      
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



