import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import Colors from "../config/Colors";
const Card = ({ title, price, imgUrl, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <AntDesign name="star" size={23} color={Colors.star} />
        <Text style={{ fontWeight: 700, fontSize: 16 }}>4.9</Text>
      </View>
      <Image source={imgUrl} style={styles.image} resizeMode="cover" />
      <Text style={styles.homeTitle} numberOfLines={1}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}>
        <FontAwesome5 name="map-marker-alt" size={20} color="#dad7cd" />
        <Text style={{ ...styles.subtitle, paddingLeft: 5 }} numberOfLines={1}>
          {location}
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={{ ...styles.subtitle, fontWeight: 700 }} numberOfLines={1}>
          ${price}/Month
        </Text>
        <FontAwesome name="bookmark" size={26} color="#2ec4b6" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  location: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    borderTopColor: "#dad7cd",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  homeTitle: {
    padding: 8,
    fontSize: 18,
    fontWeight: 700,
    color: "#000814",
  },
  subtitle: {
    color: "#bcb8b1",
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    width: 300,
    height: 380,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 55,
    position: "absolute",
    top: 35,
    zIndex: 111,
    right: 15,
    borderRadius: 5,
    padding: 2,
    backgroundColor: "rgba(192,192,192,0.6)",
  },
});
