import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Card from "../components/card";
import { LinearGradient } from "expo-linear-gradient";
import AppInput from "../components/Forms/TextInput";
import { StatusBar } from "expo-status-bar";
import { MenuIcon } from "../config/Svgs";
const houses = [
  {
    id: 1,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg1.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
  {
    id: 2,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg2.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
  {
    id: 3,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg3.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
  {
    id: 4,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg4.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
  {
    id: 5,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg5.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
  {
    id: 6,
    title: "Thoedore Bagwell House",
    img: require("../assets/homeImg6.jpg"),
    price: 4000,
    location: "No 3, Aba odo olodo, Ibadan.",
  },
];

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      <StatusBar style="inverted" translucent={false} backgroundColor="#000" />
      <LinearGradient
        colors={["#023020", "#e9edc9"]}
        start={{ x: 0.3, y: 0.3 }}
        locations={[0, 0]}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <View>
              <MenuIcon />
            </View>
            <View />
            <Image
              style={{ width: 45, height: 45, borderRadius: 50 }}
              source={require("../assets/homeImg1.jpg")}
            />
          </View>
          <AppInput
            iconName="search-outline"
            style={{
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              borderRadius: 24,
              width: "90%",
              height: 45,
              color: "#fff",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
          <FlatList
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            horizontal
            data={houses}
            ListHeaderComponent={<View style={{ width: 20, height: 20 }} />}
            ItemSeparatorComponent={<View style={{ width: 40, height: 40 }} />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                price={item.price}
                imgUrl={item.img}
                location={item.location}
              />
            )}
          />
        </View>
        <View></View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
    justifyContent: "center",
    height: "100%",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
