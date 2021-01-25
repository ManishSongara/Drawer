import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { Header } from 'react-native-elements';


export default function Home({ navigation}){
    return (
        <View style={styles.container}>
         <Header backgroundColor="#ffffff"
            leftComponent={{ icon: 'menu', color: '#2CB34A', onPress: () => navigation.openDrawer() }}
            centerComponent={{ text: 'Home', style: { color: '#2CB34A' } }}
            rightComponent={{ icon: 'home', color: '#2CB34A' }}
        />
        <View style={styles.content}>
        <Text style={styles.text}>Home is here!</Text>
        <Button onPress={() => navigation.openDrawer()} title="open" />
        </View>        
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex:1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    text:{
        fontSize:20,
        color:"#ffffff",
        fontWeight: '800',
    }
});
