import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Divider } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default  function LeftCards(){
    return(
        <View style={{height: "100%"}}>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Connections</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <AntDesign name="contacts" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Contacts</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>People I follow</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Group</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Event</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Page</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>#HashTag</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom:10,flexDirection:"row" ,height: 50, width:"100%", backgroundColor: "#FFF",alignItems:'center',justifyContent:'space-evenly'}}>
            <Ionicons name="people" size={24} color="black" style={{marginLeft:25}} />
                <Text style={styles.container}>Sold</Text>
                <Text style={{justifyContent:"flex-end", marginRight:25}}>112</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {  
        flex: 1,   
        marginLeft: 25 
    },
});
   
