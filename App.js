import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/components/card";

import Login from "./app/screen/Auth/Login";
import Register from "./app/screen/Auth/Register";
import Home from "./app/screen/Home";
import Onboarding from "./app/screen/Onboarding";
export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
