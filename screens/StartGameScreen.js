import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectednumber, setSelectedNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
    // setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    Alert.alert("reset", [
      { text: "Okay", style: "destructive", onPress: () => console.log("error") },
    ]);
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      // return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number: </Text>
        <NumberContainer>{selectednumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Slelect a Number</Text>
          <Input
            st={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            placeholder="enter a  2 digit number"
            keyboardType="number-pad"
            clearTextOnFocus
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: "100",
    maxWidth: "50%",
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
    width: 10,
    textAlign: "center",
    borderWidth: 1,
    padding: 100,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
