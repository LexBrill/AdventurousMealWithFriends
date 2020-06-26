import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'  
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import GetInputs from './GetInputs.js'


class GetResult extends Component {
    render() {
        return(
            
            <View style= {styles.container}>
                 
                <Text>You made it to the page!!!!!!!!!</Text>

                <Button title='Go back'
                    onPress={()=>this.props.navigation.navigate('Random Restaurant')}/>

            </View>
            

        );
    }
};





export default GetResult;
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
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