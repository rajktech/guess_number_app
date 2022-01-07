import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import Color from "../constants/Color";
import MainButton from "../components/MainButton";
//import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";

const randomNumber = (min, max, exclude) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const ListItem1 = (props) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.list}>#{props.index}</Text>
      <Text style={styles.list}>{props.num}</Text>
    </View>
  );
};

const ListItem2 = (listLength, itemData) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.list}>#{listLength-itemData.index}</Text>
      <Text style={styles.list}>{itemData.item}</Text>
    </View>
  );
};

const Gamestart = (props) => {
  const unique = randomNumber(props.min, props.max, 3);
  const [guessnumber, setguessnumber] = useState(unique);
  const [guessArray, setGuessArray] = useState([unique]);

  const okHandler = () => {
    const rnd = randomNumber(props.min, props.max, 3);
    if (props.userTypedValue == rnd) {
      props.setgameovervalue(true);
    } else {
      setguessnumber(rnd);
      setGuessArray([rnd, ...guessArray]);
      props.setNumRounds((counter) => counter + 1);
    }
  };

  const compareHandler = (direction) => {
    if (
      (direction === "lower" && props.userTypedValue > guessnumber) ||
      (direction === "greater" && props.userTypedValue < guessnumber)
    ) {
      Alert.alert("Wrong", "Absolutely wrong!!", [
        { text: "retry", style: "default" },
      ]);
    } else {
      //Alert.alert("Correct", "Correct", [{ text: "okay", onPress: okHandler }]);
      okHandler();
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
          <MainButton onPress={compareHandler.bind(this, "lower")}>
            {/* <Ionicons name="greater-than" size={24} color="white" /> */}
            <AntDesign name="banckward" size={24} color="white" />
          </MainButton>
          <MainButton onPress={compareHandler.bind(this, "greater")}>
            {/* <Ionicons name="greater-than" size={24} color="white" /> */}
            <AntDesign name="forward" size={24} color="white" />
          </MainButton>
        </View>

        <View>
          <Button
            title="Back to previous screen"
            onPress={() => {
              props.setNumbervalue(true);
              props.setNumRounds(0);
            }}
            color={Color.primary}
          />
        </View>
      </Card>

      <View style={{ flex: 1, width: "60%" }}>
        {/* <ScrollView contentContainerStyle={{ width: "100%", justifyContent: 'flex-end', flexGrow: 1 }}>
          {guessArray.map((num, index) => (
            <ListItem1 num={num} index={guessArray.length - index} />
          ))}
        </ScrollView> */}
        <FlatList
          data={guessArray}
          renderItem={ListItem2.bind(this, guessArray.length)}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{justifyContent: 'flex-end', flexGrow: 1 }}
        />
      </View>
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
    marginBottom: 10,
  },
  buttonstyle: {
    flex: 1,
    margin: 5,
    backgroundColor: "red",
  },
  listitem: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 5,
    alignItems: "center",
    width: "80%",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  list: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    width: "100%",
  },
});

export default Gamestart;
