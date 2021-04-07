import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Article from './Articles/Article';
import Register from './Login_Auth/Register';

export default function Notific() {
    return(
        <View style={styles.container}>
            <Text>Notification working</Text>
            {/*<Article/>*/}
            <Register/>
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