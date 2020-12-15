import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button,Slider, Image, ImageBackground} from 'react-native'
import './global.js'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
// import Geolocation from '@react-native-community/geolocation';


class GetInputs extends Component {
    state = {
        // term: '',
        place: '',
        price: '',
        distance: '',
        errorMessage: '',
        // longitude: '',
        // latitude: ''
        // location: {},
    }
    // handleTerm = (text) => {
    //     this.setState({ term: text })
    // }
    handleLocation = (text) => {
        this.setState({ place: text })
    }
    handleLowPrice = () => {
        this.setState({ price: 'low' })
    }
    handleHighPrice = () => {
        this.setState({ price: "high" })
    }
    handleDistance = (value) => {
        this.setState({ distance: value })
    }

    _getLocation = async() => {
        const { status } = Permissions.askAsync(Permissions.LOCATION);

        if(status !== 'granted'){
            console.log('PERMISSION NOT GRANTED!');

            this.setState({
                errorMessage: 'PERMISSION NOT GRANTED'
            })
        }

        const userLocation = await Location.getCurrentPositionAsync();

        this.setState({
            place: JSON.stringify(userLocation)
        })

    }
    // getLocationAsync = async () => {
    //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //     if (status !== 'granted') {
    //         this.setState({
    //             errorMessage: 'Permission to access location was denied',
    //         });
    //     }

    //     let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
    //     const { latitude, longitude } = location.coords
    //     this.getGeocodeAsync({ latitude, longitude })
    //     this.setState({ location: { latitude, longitude } });

    // };
    
    componentDidMount(){
        this._getLocation();
    }

    handleUserLocation = () => {
        alert(JSON.parse(this.state.place).coords.latitude + " " + JSON.parse(this.state.place).coords.longitude);
    }
    submit = (place, price, distance) => {
        var dict = {
            // "term": term,
            "longitude": JSON.parse(place).coords.longitude,
            "latitude": JSON.parse(place).coords.latitude,
            "price": price,
            "distance": parseInt(distance)
        }
        // function switchPage() {
        //     this.props.navigation.push('Results')
        // }

        fetch('https://us-central1-local-catalyst-281121.cloudfunctions.net/Test/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dict)
        })
            .then(response => response.text())
            .then(data => global.data = data)
            .then(ahaha => global.image = fetch(JSON.parse(global.data).image_url, {
                method: 'GET',
            }))
            .then(zoop => this.props.navigation.push('Results'))
        // .then(data => alert(JSON.parse(data).name + " " + JSON.parse(data).rating))

        // .then(response => alert(response.text()))
        // .then(() => alert(global.data))

        // if(JSON.parse(global.data).name.localeCompare('ur fucked') == 0){
        //     alert("ur fucked")
        // }
        // else{
        //     this.props.navigation.push('Results')
        // }








        // .then(d => alert(global.data.name))
        // .then(data => alert(JSON.parse(data).name + " " + JSON.parse(data).rating))


        // alert("term: " + term + " place: " + place + " price: " + price + " distance: " + distance)
        // fetch('https://us-central1-local-catalyst-281121.cloudfunctions.net/Test/', {
        //     method: 'POST',
        //     body: JSON.stringify(searchInfo)
        // })
        // const execFile = require('child_process').execFile 
        // const process = execFile('python' , ['./testScript.py', term, place, price, distance]);
        // process.stdout.on('data' , data => {
        //     console.log(data.toString());
        // });

    }
    render() {
        return (

            <ImageBackground source={require('./Background.png')} style={styles.imageback}>
            <View style={styles.container}>
                {/* <TextInput style={styles.input}
                    placeholder="Search Term"
                    placeholderTextColor='white'
                    onChangeText={this.handleTerm} /> */}
               
               <View style={styles.logo}>
                   <Image
                    // style = {{width:150, heigh:150}}
                    source = {require('./Logo.png')}
                    />
               </View>

               
                <View style={{ flexDirection: "row" }}>

                    <AwesomeButton type="primary"
                        style={styles.button}
                        height={40}
                        stretch={true}
                        onPress={this.handleLowPrice}>
                        <Text style={styles.submitButtonText}>Low</Text>
                    </AwesomeButton>

                    <AwesomeButton type="primary"
                        style={styles.button}
                        height={40}
                        stretch={true}
                        onPress={this.handleHighPrice}>
                        <Text style={styles.submitButtonText}>High</Text>
                    </AwesomeButton>




                </View>
                {/* <TextInput style={styles.input}
                    placeholder="Maximum distance?"
                    placeholderTextColor='white'
                    onChangeText={this.handleDistance} /> */}


                <TouchableOpacity
                onPress={() => this.submit(this.state.place, this.state.price, this.state.distance)}>
                    <Image 
                    style={styles.image}
                    source={require('./Button.png')}/>
                    
                </TouchableOpacity>



                <Slider
                style={styles.slider} 
                step={5}
                maximumValue={20}
                onSlidingComplete={this.handleDistance}
                />


                {/* <AwesomeButton
                    style={styles.submitButton}
                    raiseLevel={6}
                    progress
                    stretch={true}
                    height={55}
                    onPress={() => this.submit(this.state.place, this.state.price, this.state.distance)}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </AwesomeButton> */}


            </View>
             </ImageBackground>
        )
    }
}
export default GetInputs


const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        justifyContent: 'center',
        flex: 1,
        // backgroundColor: '#47476B',
        alignItems: 'center',
    },
    logo: {
        margin: 15,
        alignItems: 'center',
        marginBottom: 75,
        marginTop: 0
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#003399',
        borderWidth: 1,
        color: 'white'
    },
    submitButton: {
        // backgroundColor: '#003399',
        padding: 10,
        margin: 15,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        width: 365
    },
    submitButtonText: {
        color: 'white'
    },
    button: {
        margin: 10,
        padding: 10,
        borderRadius: 1000,
        height: 40,
        width: 175,
        justifyContent: 'center',
        alignItems: 'center',

    },
    locButton: {
        margin: 10,
        padding: 10,
        borderRadius: 1000,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        margin:10,
        width:300,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:200,
        backgroundColor:'#fff',
        borderRadius:100,
    },
    imageback: {
        flex:1,
        resizeMode: 'stretch',
    }
})