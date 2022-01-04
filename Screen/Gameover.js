import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Gameover = (props) => {
    const resetHandler = () => {
        props.setgameovervalue(false);
        props.setNumbervalue(true);
    }
    return(
        <View style={styles.container}>
            <Text>Game is over</Text>
            <Text>Number of rounds: {props.numRounds}</Text>
            <View>
                <Button title="Start New Game" onPress={resetHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

export default Gameover;