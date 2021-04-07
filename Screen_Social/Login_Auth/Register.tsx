import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
  Platform
} from "react-native";
import { Button,Checkbox,HelperText,TextInput } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';
import { platform } from "node:os";
const { width, height } = Dimensions.get("screen");

  function Register(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeText = (username) => setUsername(username);
    const onEmailChange = (email) => setEmail(email);

    

    const validateAuthForm = () => {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!username){
               return true;
         }
      if(!emailRegex.test(email.toLowerCase())){
          return true;
      }
        return false;
      
    }

    return (
      <View style={{display:"flex", alignItems:"center"}}>
        <StatusBar hidden />
        <ImageBackground
          source={{ uri: 'https://picsum.photos/1350' }}
          style={{ width, height, zIndex: 1 }}
        >
          <View style={{ flex: 1,justifyContent:"center", alignItems:"center", marginTop:80, marginBottom: Platform.OS==="web"? 180 : 80 }}>
            <View style={styles.registerContainer}>
              <View  style={styles.socialConnect}>
                <View style={{ justifyContent:"center",alignItems:"center" }}>
                    <Text style={{ fontSize:18, color:"#8898AA"}}>
                      Sign up with
                    </Text>
                </View>
                <View style={{ marginTop: 10, flexDirection:"row",justifyContent:"center" }}>
                    <Button icon="github" color="black"  mode="outlined" onPress={() => console.log('Pressed')} style={{  height:35, marginTop:10, width: 150, margin:5}}>
                        github
                   </Button>
                    <Button icon="google" color="black"  mode="outlined" onPress={() => console.log('Pressed')} style={{  height:35, marginTop:10, width: 150,margin:5}}>
                         Google
                   </Button>
                </View>
              </View>
              <View style={ styles.loginContent}>
                <Text style={{fontSize:18}}>  Or sign up the classic way</Text>
              </View>
              <View style={{flex: Platform.OS==="web"? 1 : 0.12 }}>
                <TextInput value={username} onChangeText={onChangeText}  autoCompleteType="username" placeholder="Name" style={ styles.inputStyle }/>
              </View>
              <View style={{flex: Platform.OS==="web"? 1 : 0.12 }}>
                <TextInput value={email} onChangeText={onEmailChange} autoCompleteType="email" keyboardType="email-address" placeholder="Email" style={ styles.inputStyle }/>
              </View>
              <View style={{flex: Platform.OS==="web"? 1 : 0.12}}>
                <TextInput autoCompleteType="password" placeholder="Password" secureTextEntry={true} style={ styles.inputStyle }/>
              </View>
              <View style={styles.passwordCheck}>
                        <Text style={{fontSize:12}}>
                          password strength:
                        </Text>
                        <Text style={{fontSize:12, color:"green", fontWeight:"600"}}>
                          {" "}
                          strong
                        </Text>
              </View>
              <View style={{ flex: Platform.OS==="web"? 1 : 0.12 ,flexDirection:"row", justifyContent:"center", marginTop:20}}>
              <Checkbox status={ "checked" }/>
              <Text style={{fontSize:16, marginTop:5}}>I agree with the </Text>
              <Button  color="blue" onPress={()=>{}} style={{ height:10, marginTop: -2}}>
                   Privacy Policy
              </Button>
              </View>
              <View style={{ flex: Platform.OS==="web"? 1 : 0.12, flexDirection:"row", justifyContent:"center"}}>
              <Button disabled={validateAuthForm()}   mode="contained" onPress={() => console.log('Pressed')} style={{ marginTop: Platform.OS==="web"?0:0,width: Platform.OS==="web"?"40%":"80%",height:40 }}>
                  CREATE ACCOUNT
              </Button>
              </View>
          </View>
          </View>
        </ImageBackground>
      </View>
    );
}
const styles = StyleSheet.create({
  registerContainer: {
    width: Platform.OS==="web"? "90%": "85%",
    height: Platform.OS==="web"? "95%": "90%",
    marginTop: Platform.OS==="web"? 100: 0,
    backgroundColor: "#F4F5F7",
    borderRadius: 8,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
    
  },
  socialConnect: {
    backgroundColor: "#fff",
   // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
    flex: Platform.OS==="web"? 2 : 0.25 ,
    justifyContent:"center",
    alignContent:"center"

  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: "blue",
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor : "#0000" // invisible color
  },
  input: {
    height: 50,
    margin: 12,
    backgroundColor: '#fff',
    borderColor: 'transparent',
    width:200,
   marginTop:15
  },
  inputStyle: {
    width: 200,
    height:40,
    alignSelf: "center",
    borderColor: "#ccc",
    backgroundColor: "#FFF"
  },
  loginContent:{
    flex: Platform.OS==="web"? 1 : 0.10  ,
    justifyContent:"center",
     alignItems:"center"
  }
});

export default Register;
