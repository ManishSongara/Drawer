import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Text,
  View, 
  SafeAreaView,
  StatusBar
} from "react-native";
import { Button } from "react-native-paper";

//import { Button } from "components";
//import { Images, argonTheme } from "constants";
//import { HeaderHeight } from "constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView style={styles.profile}>
        <View style={{flex: 1 }}>
          <ImageBackground
           source={{ uri: 'https://picsum.photos/700' }}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: '25%' }}
            >
              <View style={styles.profileCard}>
                <View style={styles.avatarContainer}>
                  <Image
                   source={{ uri: 'https://picsum.photos/150' }}
                    style={styles.avatar}
                  />
                </View>
                <View style={styles.info}>
                  <View
                    style={{  marginTop: 20, paddingBottom: 24, justifyContent:"space-evenly", flexDirection:"row", alignItems: "center" }}
                  >
                    <Button
                        onPress={()=>{   }}
                        color="#FFF"
                        style={{backgroundColor: "blue"}}
                    >CONNECT</Button>
                      <Button
                        onPress={()=>{   }}
                        color="#FFF"
                        style={{backgroundColor: "blue"}}
                    > MSG </Button>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
                    <View style={{ justifyContent: "center" }}>
                      <Text
                        style={{  fontSize:18, color:"#525F7F",marginBottom: 4, fontWeight:"100"}}
                      >
                        2K
                      </Text>
                      <Text style={{fontSize:12}}>Orders</Text>
                    </View>
                    <View style={{justifyContent: "center"}} >
                      <Text
                      style={{ fontSize:18, color:"#525F7F",marginBottom: 4}}
                        >
                        10
                      </Text>
                      <Text style={{fontSize:12}} >Photos</Text>
                    </View>
                    <View style={{justifyContent: "center"}}>
                      <Text
                        style={{ fontSize:18, color:"#525F7F",marginBottom: 4}}
                      >
                        89
                      </Text>
                      <Text style={{fontSize:12}} >Comments</Text>
                    </View>
                  </View>
                </View>
                <View style={{display:"flex"}}>
                  <View  style={styles.nameInfo}>
                    <Text 
                    style={{ fontSize:28, color:"#32325D"}}
                    >
                      Jessica Jones, 27
                    </Text>
                    <Text 
                    style={{ fontSize:16, color:"#32325D",marginTop: 10}}
                    >
                      San Francisco, USA
                    </Text>
                  </View>
                  <View style={{ justifyContent:"center" ,marginTop: 30, marginBottom: 16 }}>
                    <View style={styles.divider} />
                  </View>
                  <View>
                    <Text
                      style={{ textAlign: "center", fontSize:16, color:"#525F7F" }}
                    >
                      An artist of considerable range, Jessica name taken by
                      Melbourne …
                    </Text>
                    <Button
                        onPress={()=>{   }}
                        color="#FFFF"
                      style={{backgroundColor: "blue", margin:2}}
                    >Show more</Button>
                  </View>
                  <View
                    style={{flexDirection:"row", justifyContent:"space-between", marginTop:5}}
                  >
                    <Text style={{marginTop: 12, fontSize:16, color:"#525F7F"}}>
                      Album
                    </Text>
                    <Button  color="#fff" mode="contained"  onPress={()=>{   }} >
                      View all
                   </Button>
                  </View>
                  <View>
                    <View style={{ flexWrap: "wrap", justifyContent:"space-between", flexDirection:"row" }}>
                      
                        <Image
                          source={{ uri: "https://picsum.photos/100" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                         <Image
                          source={{ uri: "https://picsum.photos/200" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                         <Image
                          source={{ uri: "https://picsum.photos/300" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                          <Image
                          source={{ uri: "https://picsum.photos/400" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                         <Image
                          source={{ uri: "https://picsum.photos/500" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                         <Image
                          source={{ uri: "https://picsum.photos/600" }}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ flex: 1, width, height, zIndex: 9000, backgroundColor: 'red' }}>
        <Block flex style={styles.profileCard}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: Images.ProfilePicture }}
              style={styles.avatar}
            />
          </Block>
          <Block style={styles.info}>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 20, paddingBottom: 24 }}
            >
              <Button small style={{ backgroundColor: argonTheme.COLORS.INFO }}>
                CONNECT
              </Button>
              <Button
                small
                style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
              >
                MESSAGE
              </Button>
            </Block>

            <Block row space="between">
              <Block middle>
                <Text
                  bold
                  size={12}
                  color="#525F7F"
                  style={{ marginBottom: 4 }}
                >
                  2K
                </Text>
                <Text size={12}>Orders</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  10
                </Text>
                <Text size={12}>Photos</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  89
                </Text>
                <Text size={12}>Comments</Text>
              </Block>
            </Block>
          </Block>
          <Block flex>
              <Block middle style={styles.nameInfo}>
                <Text bold size={28} color="#32325D">
                  Jessica Jones, 27
                </Text>
                <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                  San Francisco, USA
                </Text>
              </Block>
              <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                <Block style={styles.divider} />
              </Block>
              <Block middle>
                <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                  An artist of considerable range, Jessica name taken by
                  Melbourne …
                </Text>
                <Button
                  color="transparent"
                  textStyle={{
                    color: "#233DD2",
                    fontWeight: "500",
                    fontSize: 16
                  }}
                >
                  Show more
                </Button>
              </Block>
              <Block
                row
                style={{ paddingVertical: 14, alignItems: "baseline" }}
              >
                <Text bold size={16} color="#525F7F">
                  Album
                </Text>
              </Block>
              <Block
                row
                style={{ paddingBottom: 20, justifyContent: "flex-end" }}
              >
                <Button
                  small
                  color="transparent"
                  textStyle={{ color: "#5E72E4", fontSize: 12 }}
                >
                  View all
                </Button>
              </Block>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: "wrap" }}>
                  {Images.Viewed.map((img, imgIndex) => (
                    <Image
                      source={{ uri: img }}
                      key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                  ))}
                </Block>
              </Block>
          </Block>
        </Block>
                  </ScrollView>*/}
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? 10 : 0,
    marginBottom: 10,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    flex:1,
    position: "relative",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "#FFF",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    justifyContent: "center",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35,
    justifyContent: "center"
    
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  droidSafeArea: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? 30 : 0,
    marginTop:StatusBar.currentHeight,
},
});

export default Profile;
