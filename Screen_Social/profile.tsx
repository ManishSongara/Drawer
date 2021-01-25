import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Profile() {
    const insets = useSafeAreaInsets();
    return(
        <View style={{ flex: 1, marginTop: insets.top }}>                      
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