import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.headerStyle}>
            <Text style={{color: 'white'}}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#f7287b',
        width: '100%',
        fontSize: 200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        paddingTop: 36
    }
})

export default Header;