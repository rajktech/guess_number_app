import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Gameover = (props) => {
  const resetHandler = () => {
    props.setgameovervalue(false);
    props.setNumbervalue(true);
    props.setNumRounds(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Game is over</Text>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.imagestyle}
          fadeDuration={3000}
          source={
            //require("../assets/success.png")
            {uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}
          }
        />
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>Your phone needed <Text style={{color: 'red'}}>{props.numRounds}</Text> rounds to guess the number <Text style={{color: 'green'}}>{props.userTypedValue}</Text>.</Text>
      </View>
        
      <View>
        <Button title="Start New Game" onPress={resetHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imagecontainer: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 125,
    overflow: 'hidden',
    marginVertical: 10
  },
  imagestyle: {
    width: '100%',
    height: '100%'
  },
  textstyle: {
    fontSize: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textcontainer: {
    alignItems: 'center',
    marginBottom: 20
  }
});

export default Gameover;
