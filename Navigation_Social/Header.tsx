import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Header(props) {
      const iconName=props.iconName;
      const iconName1=props.iconName1;
      const title =props.title;
    return(
         <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderBottomColor: "#707070",
          borderBottomWidth: 1,
        }}
      >
        <IconButton
          style={{ margin: 10 }}
          icon={iconName}
          onPress={() => {
            alert("hello");
          }}
        />
        <Text style={{ marginTop: 15 }}>{title}</Text>
        <IconButton
          icon={iconName1}
          onPress={() => console.log("Pressed")}
          style={{margin:10}}
        />
      </View> 
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });