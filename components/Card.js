import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Card = (props) => {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    //shadow only works on IOS
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 0,
    // shadowopacity: 0.26,
    backgroundColor: "white",
    //only on android
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // paddingHorizontal: 15,
  },
});

export default Card;
