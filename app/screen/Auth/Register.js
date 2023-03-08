import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import AppFormField from "../../components/Forms/AppFormField";
import Colors from "../../config/Colors";
import * as Yup from "yup";
import axios from "axios";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubmitButton from "../../components/Forms/SubmitButton";
import ErrorMessage from "../../components/Forms/ErrorMessage";
import AppText, { MeidumText } from "../../components/AppText";
// import { useNavigation } from "@react-navigation/native";

const ValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required("Name field is required"),
  password: Yup.string().required("Password field is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function Register() {
  // const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorContext, setErrorContext] = useState(false);
  if (errorMsg) {
    setTimeout(() => {
      setErrorMsg(false);
    }, 2000);
  }
  // const navigation = useNavigation();
  const handleSubmit = async (values) => {
    delete values.confirm_password;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        values
      );
      console.log(response.data, "data logged");
    } catch (error) {
      console.log(error.response.data);
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
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}>
        <>
          <ScrollView style={styles.container}>
            <MeidumText text="Create an account" />
            <AppText
              text="Let's get you started"
              style={{ fontSize: 16, fontWeight: 300, paddingTop: 5 }}
            />

            <View style={styles.form}>
              <ErrorMessage visible={errorMsg} error={errorContext} />
              <AppFormField placeholder="Full Name" name="name" />
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
                  placeholder="Create password"
                  secureTextEntry={!visible}
                  name="password"
                />
              </View>
              <View>
                <MaterialCommunityIcons
                  name={!visible1 ? "eye" : "eye-off"}
                  color={Colors.dark_light}
                  size={30}
                  style={styles.passEye}
                  onPress={() => setVisible1((prevState) => !prevState)}
                />
                <AppFormField
                  multiline={false}
                  keyboardType={"default"}
                  autoCorrect={false}
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="Confirm password"
                  secureTextEntry={!visible1}
                  name="confirm_password"
                />
              </View>
            </View>
            <View style={{ padding: 30 }} />
            <View style={styles.footer}>
              <SubmitButton
                title="Submit"
                color={Colors.primary}
                style={styles.btn}
              />
              <AppText
                text="Already have an account?"
                style={{ fontSize: 18, marginBottom: 6 }}
              />
              <TouchableOpacity>
                <AppText
                  text="Login"
                  style={{
                    fontSize: 18,
                    color: Colors.primary,
                    fontWeight: "700",
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    width: "100%",
    padding: 20,
    flex: 1,
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
    bottom: 30,
  },
});
