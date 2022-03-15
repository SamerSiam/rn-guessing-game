import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const { style, ...rest } = props;
  return <TextInput style={[styles.input, style]} {...rest} />;

  // return <TextInput {...props} style={styles.input, ...props.st} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
