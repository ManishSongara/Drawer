import * as React from 'react';
import { Button, View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import LeftCards from '../Cards/left-card';

export default function Msg() {
    return(
        <SafeAreaView style={styles.droidSafeArea}>
                <View>
            <LeftCards/>
        </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    droidSafeArea: {
        flex: 1,
        //paddingTop: Platform.OS === 'android' ? 30 : 0,
        marginTop:StatusBar.currentHeight,
    },
  });