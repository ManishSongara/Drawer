import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  View,
  Text
} from "react-native";
import { Card } from "react-native-paper";
const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - 4;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125"
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35"
  }
];

class Article extends React.Component {
  renderProduct = (item, index) => {
    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
      >
        <View  style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <View style={{ paddingHorizontal: 4, justifyContent:"center" }}>
            <Text
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text style={{fontSize:34, justifyContent:"center"}} >
              {item.title}
            </Text>
            <Text
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <View style={styles.group}>
        <Text style={styles.title}>
          Cards
        </Text>
        <View style={{ display:"flex"}}>
          <View style={{ paddingHorizontal: 4 }}>
            
            <View style={{ display:"flex", flexDirection:"row"}}>
              {/* two cards */}
            </View>
            
            <View style={styles.category}>
              <ImageBackground
                 source={{ uri: 'https://picsum.photos/350' }}
                style={[
                  styles.imageBlock,
                  { width: width - 5, height: 252 }
                ]}
                imageStyle={{
                  width: width - 5,
                  height: 252
                }}
              >
                <View style={styles.categoryTitle}>
                  <Text style={{fontSize:18, fontWeight:"600"}}>
                    View article
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={{  display:"flex" ,marginTop: 5 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + 5}
              contentContainerStyle={{
                paddingHorizontal: 5
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  };

  renderAlbum = () => {
    //const { navigation } = this.props;

    return (
      <View
        style={[styles.group, { display:"flex",paddingBottom: 5 }]}
      >
        <Text style={styles.title}>
          Album
        </Text>
        <View style={{ marginHorizontal: 4 }}>
          <View style={{display:"flex", alignItems:"flex-end"}}>
            <Text
                style={{fontSize:12}}
            >
              View All
            </Text>
          </View>
          <View
            style={{ flexDirection:"row", justifyContent:"space-between",marginTop: 4, flexWrap: "wrap" }}
          >
            
              <View>
                <Image
                  resizeMode="cover"
                  source={{ uri: 'https://picsum.photos/350' }}
                  style={styles.albumThumb}
                />
              </View>
            
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{display:"flex", justifyContent:"center"}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 4,
    paddingHorizontal: 4,
    marginTop: 22,
    fontSize:16,
    fontWeight:"500"
  },
  group: {
    paddingTop: 5,
    flex:1
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: "#FFF",
    marginVertical: 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - 4,
    marginHorizontal: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    justifyContent:"center"
  },
  productImage: {
    width: cardWidth - 4,
    height: cardWidth - 4,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    justifyContent:"center"
  },
  productDescription: {
    paddingTop: 5,
    // paddingBottom: theme.SIZES.BASE * 2,
    fontSize:16,
    justifyContent:"center"
    
  }
});

export default Article;
