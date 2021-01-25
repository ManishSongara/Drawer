import * as React from "react";
import { Platform } from "react-native";
import { Button, View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Colors, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../Navigation_Social/Header";

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
        <Header iconName="menu" iconName1="message" title="HOME"/>
      <View style={styles.container}>
        <Text> hoem is working</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
