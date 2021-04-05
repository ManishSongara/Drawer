import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image  } from "react-native";
import { Card, Paragraph, Title, Button, Avatar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default  function Cards(){
    const LeftContent = <Text>hello</Text>;
    return(
    <View style={{flex: 1,  margin: 2, backgroundColor: "#FFF"  }}>     
      <View style={styles.container}>
          <View style={{ margin:"1%" }}>
          <Avatar.Image size={35} source={{ uri: 'https://picsum.photos/700' }} />
          </View>
          <View style={{ flex: 1,  alignItems: "flex-start", margin: "1%" }}>                
                <Text>Card.title</Text>
                <Text>Card.subtitle</Text>
          </View>
          <View style={{flex: 1,  alignItems: "flex-end", margin: "1%"}} >
                 <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
      </View>
        <View>
            <Image style={{ height: 300, width: "100%"}} source={{ uri: 'https://picsum.photos/700' }}/>
        </View> 
        <View style={styles.container}>
          <View style={{ marginLeft:"4%", marginTop: "4%"  }}>
                 <AntDesign name="like2" size={24} color="black" />    
          </View>      
          <View style={{ marginLeft:"4%", marginTop: "4%" }}>
                <FontAwesome5 name="comment-alt" size={22} color="black" />
          </View>
          <View style={{ marginLeft:"4%", marginTop: "4%"  }}>
          <Foundation name="social-skillshare" size={24} color="black" />
          </View>
          <View style={{flex: 1,  alignItems: "flex-end", margin: "4%"}} >
                <Feather name="bookmark" size={24} color="black" />
          </View>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
         
        marginTop:10     
    },
    img: {
        width: "100%",
        height: "100%",
      },
});
