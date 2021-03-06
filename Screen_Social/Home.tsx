import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { View, Text, StyleSheet, SafeAreaView  } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Colors, IconButton, Paragraph, Title, Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../Navigation_Social/Header";

 
export default function Home({navigation}) {
  
  const insets = useSafeAreaInsets();
  return (

    <SafeAreaView style={styles.droidSafeArea}>
      <Header title="frnzBook"/>
        <ScrollView>
       <Card style={{ margin:"2%"}} >
          <Card.Title title="User.one" subtitle="User.name"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card> 
        <Card style={{ margin:"2%"}} >
          <Card.Title title="User.two" subtitle="User.name"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card> 
        <Card style={{ margin:"2%"}} >
          <Card.Title title="User.three" subtitle="User.name"/>
          <Card.Cover  source={{ uri: 'https://picsum.photos/700' }}  resizeMode="contain" />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card> 
        <Card style={{ margin:"2%"}} >
          <Card.Title title="User.name" subtitle="User.name"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card> 
        </ScrollView>
    
      </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? 30 : 0,
    marginTop:StatusBar.currentHeight,
},
});
