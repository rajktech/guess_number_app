import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import Color from "../constants/Color";

const randomNumber = (min, max, exclude) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Gamestart = (props) => {
  const [guessnumber, setguessnumber] = useState(
    randomNumber(props.min, props.max, 3)
  );

  const okHandler = () => {
    const rnd = randomNumber(props.min, props.max, 3);
    if (props.userTypedValue == rnd) {
      props.setgameovervalue(true);
    } else {
      setguessnumber(rnd);
      props.setNumRounds(counter => counter + 1);
    }
  };

  const compareHandler = (direction) => {
    if (
      (direction === "lower" && props.userTypedValue > guessnumber) ||
      (direction === "greater" && props.userTypedValue < guessnumber)
    ) {
      Alert.alert("Wrong", "Dont Lie", [{ text: "okay", style: "default" }]);
    } else {
      Alert.alert("Correct", "Correct", [{ text: "okay", onPress: okHandler }]);
    }
    return;
  };

  return (
    <View style={styles.container}>
      <Text>
        {guessnumber}==={props.userTypedValue}
      </Text>
      <Text>Opponent's Guess</Text>
      <View style={styles.numberContainer}>
        <Text>{guessnumber}</Text>
      </View>
      <Card>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonstyle}>
            <Button
              title="Lower"
              onPress={compareHandler.bind(this, "lower")}
            />
          </View>
          <View style={styles.buttonstyle}>
            <Button
              title="Greater"
              onPress={compareHandler.bind(this, "greater")}
            />
          </View>
        </View>

        <View>
          <Button title="Back to previous screen" onPress={() => props.setNumbervalue(true)} color={Color.primary} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    width: "80%",
  },
  buttonstyle: {
    flex: 1,
    margin: 5,
    backgroundColor: "red",
  },
});

export default Gamestart;
