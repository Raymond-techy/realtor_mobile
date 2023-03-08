import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import AppFormField from "../../components/Forms/AppFormField";
import Screen from "../../components/Screen";
import Colors from "../../config/Colors";
import ActivityIndicator from "../../components/ActivityIndicator";
import SubmitButton from "../../components/Forms/SubmitButton";
import ErrorMessage from "../../components/Forms/ErrorMessage";
import AppText, { MeidumText } from "../../components/AppText";

// import { useNavigation } from "@react-navigation/native";

const ValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required("Password field is required"),
});

export default function Login() {
  // const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorContext, setErrorContext] = useState(false);
  const [loading, setLoading] = useState(false);
  if (errorMsg) {
    setTimeout(() => {
      setErrorMsg(false);
    }, 3000);
  }
  // const navigation = useNavigation();
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        values
      );
      console.log(response.data.token, "data logged");
      if (response) return setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      setErrorMsg(true);
      setErrorContext(error.response.data.message);
      return;
    }
    // console.log(response);
  };
  return (
    <Screen>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}>
        <>
          <ActivityIndicator visible={loading} />
          <KeyboardAvoidingView style={styles.container}>
            <MeidumText text="Welcome Back" />
            <AppText
              text="Let's get you started"
              style={{ fontSize: 14, fontWeight: 300, paddingTop: 5 }}
            />
            <View style={styles.form}>
              <ErrorMessage visible={errorMsg} error={errorContext} />
              <AppFormField
                placeholder="Email Address"
                name="email"
                keyboardType="email-address"
              />
              <View>
                <MaterialCommunityIcons
                  name={!visible ? "eye" : "eye-off"}
                  color={Colors.dark_light}
                  size={30}
                  style={styles.passEye}
                  onPress={() => setVisible((prevState) => !prevState)}
                />

                <AppFormField
                  multiline={false}
                  keyboardType={"default"}
                  autoCorrect={false}
                  autoCapitalize="none"
                  spellCheck={false}
                  numberOfLines={1}
                  placeholder="Password"
                  secureTextEntry={!visible}
                  name="password"
                />
              </View>
            </View>
            <View style={{ padding: 30 }} />
            <View style={styles.footer}>
              <SubmitButton
                title="Sign in"
                color={Colors.primary}
                style={styles.btn}
              />
              <AppText
                text="Don't have an account?"
                style={{ fontSize: 18, marginBottom: 6 }}
              />
              <TouchableOpacity>
                <AppText
                  text="Sign Up"
                  style={{
                    fontSize: 18,
                    color: Colors.primary,
                    fontWeight: "700",
                  }}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  forgot: {
    right: -200,
  },
  container: {
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    height: "100%",
  },
  passEye: {
    position: "absolute",
    right: 10,
    zIndex: 10,
    top: 25,
  },
  form: {
    paddingTop: 20,
  },
  btn: {
    marginBottom: 30,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
});
