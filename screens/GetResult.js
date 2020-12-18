import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Image, ImageBackground,TouchableHighlight, Linking,ScrollView } from 'react-native'
import './global'
import { useNavigation, NavigationContainer, Navigation } from '@react-navigation/native';
import {GetInputs, place, price, distance} from './GetInputs.js'
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import StarRating from 'react-native-star-rating'
import AwesomeButton from 'react-native-really-awesome-button';



const Card = () => {
    const navigation = useNavigation();
    return (
    <View style={{flex:1,}}>
        {/* <Button 
            title='Go back'
            onPress={() => navigation.navigate('Random Restaurant')}
            /> */}
        <AwesomeButton style = {StyleSheet.button}
         title = 'back'
         type="primary"
         height={30}
         backgroundColor = 'black'
         textColor = '#FFFFFF'
        //  borderColor = 'black'
        paddingHorizontal={30}
        raiseLevel={0}
        width = {50}
        textSize ={10}
        style = {StyleSheet.button}
        OnPress={() => navigation.navigate('Random Restaurant')}>
        Back
        </AwesomeButton>

        <ScrollView>

        <TouchableHighlight 
            onPress = {() => Linking.openURL(JSON.parse(global.data).url)}>
            <Image
                source={{uri: JSON.parse(global.data).image_url}} 
                style = {styles.tinderimage} >
            </Image>
        </TouchableHighlight> 

        </ScrollView>

        <TouchableOpacity style = {StyleSheet.results} >
            <Text style={styles.resultstext}>
                {JSON.parse(global.data).name.replace(/\\n/g,'')}
                {'\n'}
                {JSON.parse(global.data).rating}
                {'\n'}
                {JSON.parse(global.data).price}
                {'\n'}
                {/* {GetInputs.state.price}
                {'\n'} */}
                {JSON.parse(global.data).location.display_address.join(', ' )}
                {/* {'\n'}
                {isOpen} 
                {'\n'}
                {JSON.parse(global.data).transactions}
                {'\n'} */}
            </Text>

            <StarRating style= {styles.starRatingstyle}
            maxStars ={5}
            rating = {JSON.parse(global.data).rating}/>

        </TouchableOpacity>

    </View>
);
}
const CardDetails = ({index}) => (
    <View>
       
    </View>
);

export default function GetResult() {
    // const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);
    return(
        <View style= {styles.container}>
            <Swiper
                cards = {global.data}
                cardIndex={index}
                renderCard={(card) => <Card card={card}/> }
                disableTopSwipe
                disableBottomSwipe
                onSwiped = {zood => alert(global.place + " " + global.price + " " + global.distance)}
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
    tinderimage: {
        height: 600, 
        width: 370,
        justifyContent: 'center',
        borderRadius: 40, 
    },
    resultstext: {
        fontWeight: 'bold',
        color: 'white',
        position:'absolute',
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom:110,
    },
    results: {
        height: 100, 
        width: 370,
        justifyContent: 'center',
        borderRadius: 40, 
        color: 'orange'
    },
    imageback: {
        flex:1,
        resizeMode: 'stretch',
    },
    button: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
})

if((JSON.parse(global.data).url) === 'false') 
    {isOpen = 'Open'}
    else {isOpen = 'Closed'}