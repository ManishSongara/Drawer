import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../Navigation_Social/Header';

export default function Profile() {
    const insets = useSafeAreaInsets();
    return(
        <View style={{ flex: 1, marginTop: insets.top }}>     
            <Header iconName="menu" iconName1="message" title="Profile"/>                 
        <View style={styles.container}>
            <Text>profile working</Text>
        </View>
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