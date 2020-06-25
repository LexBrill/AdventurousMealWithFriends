import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button } from 'react-native'
export class ResultPage extends Component {
    render() {
        return(
            <View style= {styles.container}>
                <Text>You made it to the page!!!!!!!!!</Text>
            </View>
        );
    }
};
// export default ResultPage;
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: 'white'
    },
    button: {
        backgroundColor: "green",
        paddingVertical:33,
        paddingHorizontal:85,
        borderRadius:100,
        height:20,
    
    },
})