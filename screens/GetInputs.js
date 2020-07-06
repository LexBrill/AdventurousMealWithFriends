import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button } from 'react-native'
import './global.js'
import { createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";


class GetInputs extends Component {
    state = {
        term: '',
        place: '',
        price: '',
        distance: ''
    }
    handleTerm = (text) => {
        this.setState({ term: text })
    }
    handleLocation = (text) => {
        this.setState({ place: text })
    }
    handleHighPrice = () => {
        this.setState({ price: "high" })
    }
    handleLowPrice = () => {
        this.setState({ price: 'low' })
    }
    handleDistance = (text) => {
        this.setState({ distance: text })
    }
    submit = (term, place, price, distance) => {
        var dict = {
            "term" : term,
            "location" : place,
            "price" : price,
            "distance" : parseInt(distance)
        }
        // var searchInfo = { term: term, location: place, price: price, distance: distance};    
        
        // var booling = true
        // // while(booling){
        // async () => {
        //     const response = await fetch('https://us-central1-local-catalyst-281121.cloudfunctions.net/Test/',
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(dict)
        //         });
        //         global.data = await response.json();

        //         // global.data = json;
        //         // booling = false;
        //     };
        // // }
        function switchPage(){
            this.props.navigation.push('Results')
        }
        
        fetch('https://us-central1-local-catalyst-281121.cloudfunctions.net/Test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dict)
        })
        .then(response => response.text())
        .then(data => global.data = data)
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
    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                    placeholder = "Search Term"
                    placeholderTextColor = 'white'
                    onChangeText = {this.handleTerm}/>

                <TextInput style = {styles.input}
                    placeholder = "Where are you?"
                    placeholderTextColor = 'white'
                    onChangeText = {this.handleLocation}/>

<View  style= {{flexDirection: "row"}}>
                <AwesomeButton type= "primary"
                style = {styles.button}
                height = {40}
                stretch = {true}
                onPress =  {this.handleHighPrice}>
                <Text style = {styles.submitButtonText}>High</Text>
                </AwesomeButton>
              
                
                <AwesomeButton type= "primary"
                style = {styles.button}
                height = {40}
                stretch = {true}
                onPress =  {this.handleLowPrice}>
                <Text style = {styles.submitButtonText}>Low</Text>
                </AwesomeButton>

</View>
                <TextInput style = {styles.input}
                    placeholder = "Maximum distance?"
                    placeholderTextColor = 'white'
                    onChangeText = {this.handleDistance}/>
                
                <AwesomeButton 
                style = {styles.submitButton}
                raiseLevel = {6}
                progress
                stretch = {true}
                height = {55}
                onPress = { () => this.submit(this.state.term, this.state.place, this.state.price, this.state.distance)}>
                <Text style = {styles.submitButtonText}> Submit </Text>
                </AwesomeButton>
                

 </View>
        )
    }
}
export default GetInputs


const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#47476B',
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
        alignItems:'center',
        borderRadius:1000,
        width: 365
    },
    submitButtonText: {
        color: 'white'
    },
    button: {
        margin: 10,
        padding: 10,
        borderRadius:1000,
        height:40,
        width:175,
        justifyContent: 'center',
        alignItems:'center',
    
    },
})
