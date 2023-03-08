import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../config/Colors";

export default function AppBtn({
  title,
  handlePress,
  color = Colors.primary,
  style,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[{ ...styles.buttonContainer, backgroundColor: color }, style]}
      onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    fontStyle: "normal",
    color: Colors.white,
    fontSize: 16,
    fontFamily: "dm-medium",
    fontWeight: "bold",
  },
});
