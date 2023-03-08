import { View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";
import AppInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";
export default function AppFormField({ name, style, ...otherProps }) {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
    initialValues,
  } = useFormikContext();
  return (
    <View>
      <AppInput
        style={style}
        onChangeText={handleChange(name)}
        handleBlur={() => setFieldTouched(name)}
        // defaultValue={initialValues[name]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}
