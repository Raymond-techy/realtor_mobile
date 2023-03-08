import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Colors from "../config/Colors";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
      <StatusBar
        style="inverted"
        translucent={false}
        backgroundColor="#e9edc9"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
