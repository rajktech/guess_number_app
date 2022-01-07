import { StyleSheet, Text, View } from "react-native";
import Header from "./Screen/Header";
import Gamestartscreen from "./Screen/Gamestartscreen";
import Gamestart from "./Screen/Gamestart";
import Gameover from "./Screen/Gameover";
import React, { useEffect, useState } from "react";
//import * as Font from "expo-font";
//import { AppLoading } from "expo";
// import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";

const min = 1;
const max = 10;

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf").default,
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf").default,
//   });
// };

// let [fontsLoaded] = useFonts({
//   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
// });

export default function App() {
  const [numbervalue, setNumbervalue] = useState(true);
  const [userTypedValue, setUserTypedValue] = useState();
  const [gameovervalue, setgameovervalue] = useState(false);
  const [numRounds, setNumRounds] = useState(0);
  //const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  useEffect(() => {
    setNumRounds(numRounds => numRounds + 1);
  }, []);
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />

      {gameovervalue ? (
        <Gameover
          numRounds={numRounds}
          setgameovervalue={setgameovervalue}
          setNumbervalue={setNumbervalue}
          userTypedValue={userTypedValue}
          setNumRounds={setNumRounds}
        />
      ) : numbervalue ? (
        <Gamestartscreen
          setNumbervalue={setNumbervalue}
          setUserTypedValue={setUserTypedValue}
        />
      ) : (
        <Gamestart
          numRounds={numRounds}
          userTypedValue={userTypedValue}
          min={min}
          max={max}
          setgameovervalue={setgameovervalue}
          setNumRounds={setNumRounds}
          setNumbervalue={setNumbervalue}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
