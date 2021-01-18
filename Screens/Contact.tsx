import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Contact({ navigation } ){
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact work</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex:1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#03cb"
    },
    
});

