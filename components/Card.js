import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style={styles.sectionContainer}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        alignItems: 'center', 
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 6},
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        width: '80%',
        marginTop: 20,
        borderRadius: 13
    }
});
export default Card;