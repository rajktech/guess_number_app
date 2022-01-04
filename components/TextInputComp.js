import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputComp = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 6
        
    }
})

export default TextInputComp;