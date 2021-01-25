import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Msg() {
    return(
        <View style={styles.container}>
            <Text>msg working</Text>
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