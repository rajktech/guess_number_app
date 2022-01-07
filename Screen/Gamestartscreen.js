import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Color from "../constants/Color";
import TextInputComp from "../components/TextInputComp";
import MainButton from '../components/MainButton';

const Gamestartscreen = (props) => {
  const [enteredvalue, setEnteredvalue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const inputHandler = (inputText) => {
    setEnteredvalue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredvalue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredvalue);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 100) {
      Alert.alert("Invalid Number!!", "Number should be between 1 and 100", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
    } else {
      setConfirmed(true);
      Keyboard.dismiss();
    }
  };

  useEffect(() => {
    props.setUserTypedValue(enteredvalue);
  }, [enteredvalue]);

  let confirmedtext;
  if (confirmed) {
    confirmedtext = (
      <Card>
        <Text>Your selected value</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>{enteredvalue}</Text>
        </View>
        <View style={styles.startButton}>
          <MainButton onPress={() => props.setNumbervalue(false)}>Start Game</MainButton>
        </View>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={{ ...styles.heading, ...styles.headingnew }}>
          Start a new Game!
        </Text>
        <Card>
          <Text>Enter a number</Text>
          <TextInputComp
            style={styles.textstyle}
            keyboardType="number-pad"
            value={enteredvalue}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonstyle}>
              <Button title="Reset" onPress={resetInputHandler} />
            </View>
            <View style={styles.buttonstyle}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Color.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedtext}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textstyle: {
    width: "60%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    width: "80%",
  },
  sectionContainer: {
    alignItems: "center",
    shadowColor: "red",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    width: "60%",
    marginTop: 20,
    borderRadius: 13,
  },
  heading: {
    marginTop: 15,
  },
  headingnew: {
    marginTop: 15
  },
  buttonstyle: {
    flex: 1,
    margin: 5,
    backgroundColor: "red",
  },
  summaryContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  summaryText: {
    fontSize: 25
  },
  startButton: {
    marginTop: 5
  }
});

export default Gamestartscreen;
