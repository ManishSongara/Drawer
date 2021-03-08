import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { View, Text, StyleSheet, SafeAreaView  } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Colors, IconButton, Paragraph, Title, Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Cards from "../Cards/Card";
import Header from "../Navigation_Social/Header";

 
export default function Home({navigation}) {
  
  const insets = useSafeAreaInsets();
  return (

    <SafeAreaView style={styles.droidSafeArea}>
      <Header title="frnzBook"/>
        <ScrollView>
        <Cards></Cards>
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
