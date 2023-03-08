import React from "react";
import { useFormikContext } from "formik";
import AppBtn from "../AppBtn";

function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return <AppBtn title={title} handlePress={handleSubmit} {...otherProps} />;
}

export default SubmitButton;
