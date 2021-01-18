import * as React from 'react';
import { Button, ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({navigation, title}) =>{
    const openMenu = () =>{
        navigation.openDrawer();
    };

    return(
        <View style={styles.header}>
            <View>
            <TouchableOpacity onPress={openMenu} style={styles.icons}>
                 <Ionicons name="md-menu" size={28} color="black"/>
            </TouchableOpacity>
            </View>
            <View style={styles.headerTitle}>
            <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>          
    );
    
}
const styles = StyleSheet.create({
    header: {
     display: "flex",
      marginTop: "5%",
      width: "100%",
      
      flexDirection: "row",
    },
    headerTitle: {      
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center"
    },
    headerText: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#000",
      letterSpacing: 1,
    },
    icons: {
     margin: 16,
    }
  });

  export default Header;