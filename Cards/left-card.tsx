import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground  } from "react-native";
import { Avatar } from "react-native-paper";
export default  function LeftCards(){
    return(
        <View style={{height: "100%"}}>
            <View style={{height: "30%"}}>
            <ImageBackground style={{height: "100%"}} source={{ uri: 'https://picsum.photos/700' }}>
                <Avatar.Image size={70} style={{ borderWidth: 2, borderColor: "#FFFFFF", marginLeft: "35%", marginTop: "21%"}} source={{ uri: 'https://picsum.photos/700' }} />
            </ImageBackground> 
            </View>
            <View style={{flex: 1, backgroundColor: "white", height: "auto"}}>
                    <View style={{height: 1, width: "100%", marginTop: 30, backgroundColor: "gray"}}/>
                        <Text>prfile visit:</Text>
                        <Text>Visit of your post:</Text>
                    <View style={{height: 1, width: "100%", marginTop: 30, backgroundColor: "gray"}}/>

                    <View style={{height: 1, width: "100%", marginTop: 30, backgroundColor: "gray"}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {  
        //flex: 1,  
        justifyContent: 'flex-end',   
        alignItems: 'center',   
        
    },
});
   
