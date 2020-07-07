import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Image } from 'react-native'
import './global'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import GetInputs from './GetInputs.js'

class GetResult extends Component {
    render() {
        // let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};
        return (

            <View style={styles.container}>
                <Image source={{uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/xOSFLOAAKPnyx576fwm_kg/o.jpg'}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
                {/* <Image
                    source = {Image_Http_URL}
                    style = {{height: 200, resizeMode : 'stretch', margin: 5 }}
                    // source={ fetch('https://s3-media3.fl.yelpcdn.com/bphoto/xOSFLOAAKPnyx576fwm_kg/o.jpg', {
                    //     method: 'GET'
                    //     })}
                /> */}
                {/* <Text>{global.image}</Text> */}
                <Text>{JSON.parse(global.data).name}</Text>
                <Text>{JSON.parse(global.data).rating}</Text>
                <Text>{JSON.parse(global.data).phone}</Text>
                <Text>{JSON.parse(global.data).location.display_address}</Text>
                {/* <TextInput editable = {false} ref = {component => this._MyComponent = component}/>

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => {
                    this._MyComponent.setNativeProps({text: JSON.parse(global.data).name});
                }}>
                <Text>Press Me</Text></TouchableOpacity>

                <Button title='Go back'
                    onPress={()=>this.props.navigation.navigate('Random Restaurant')}/> */}

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
        paddingVertical: 33,
        paddingHorizontal: 85,
        borderRadius: 100,
        height: 20,

    },
})