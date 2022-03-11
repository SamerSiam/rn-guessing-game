import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";
const StartGameScreen = (props) => {
  const [enteredValue, setEntryValue] = useState("");

  const numberInputHandler = (inputText) => {
    setitedValue(inputText.replace(/[^0-9]/g, ""));
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Slelect a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: "300",
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    margin: 10,
  },
  input: {
    width: 50,
  },
});
export default StartGameScreen;
