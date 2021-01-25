import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Notific() {
    return(
        <View style={styles.container}>
            <Text>Notification working</Text>
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