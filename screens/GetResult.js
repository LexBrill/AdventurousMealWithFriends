import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Image, ImageBackground } from 'react-native'
import './global'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import GetInputs from './GetInputs.js'
import Swiper from 'react-native-deck-swiper';



const Card = ({card}) => (
    <View>
        <ImageBackground
          source={{uri: JSON.parse(global.data).image_url}} 
          style = {{height: 600, width: 370,justifyContent: 'center',borderRadius: 40, }} 
        >
            <Text
            style={{
                fontWeight: 'bold',
                color: 'white',
                position:'absolute',
                bottom: 0,
            }}
            >
                {JSON.parse(global.data).name}
                '/n'
                {JSON.parse(global.data).rating}
                '/n'
                {/* {JSON.parse(global.data).phone} */}
                {JSON.parse(global.data).location.display_address}
            </Text>

        </ImageBackground>
           
</View>
);
const CardDetails = ({index}) => (
    <View>
       
    </View>
);

export default function GetResult() {
    const [index, setIndex] = React.useState(0);
    return(
        <View style= {styles.container}>
            <Swiper
                cards = {global.data}
                cardIndex={index}
                renderCard={(card) => <Card card={card}/> }
                disableTopSwipe
                disableBottomSwipe
                //   onSwiped= 
                overlayLabels={{
                    left: {
                        title: 'NOPE',
                        style: {
                        label:{
                            backgroundColor: '#F80C0C',
                            color: '#FFFFFF',
                            fontSize: 24
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            marginTop: 20,
                            marginLeft: -20,
                        }
                    }
                }
            }}  
            />
        </View>
    )};



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
