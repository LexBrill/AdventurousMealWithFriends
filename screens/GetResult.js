import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Image, ImageBackground } from 'react-native'
import './global'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import GetInputs from './GetInputs.js'
import Swiper from 'react-native-deck-swiper';



const Card = ({card}) => (

    <View style={{flex:1,}}>
        <Image
          source={{uri: JSON.parse(global.data).image_url}} 
          style = {styles.tinderimage} 
        >
           
        </Image>
    
        <Text style={styles.resultstext} >
                {JSON.parse(global.data).name.replace(/\\n/g,'')}
                {'\n'}
                {JSON.parse(global.data).rating}
                {'\n'}
                {/* {JSON.parse(global.data).phone} */}
                {JSON.parse(global.data).location.display_address}
        </Text>
           
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
