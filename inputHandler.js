import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button } from 'react-native'

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
        fetch('https://us-central1-local-catalyst-281121.cloudfunctions.net/Test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dict)
        })
        .then(response => response.text())
        .then(data => alert(JSON.parse(data).name + " " + JSON.parse(data).rating))
        
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
                    onChangeText = {this.handleTerm}/>

                <TextInput style = {styles.input}
                    placeholder = "Where are you?"
                    onChangeText = {this.handleLocation}/>

<View  style= {{flexDirection: "row"}}>

                <Button
                style= {styles.button}
                onPress =  {this.handleHighPrice}
               title= "High"
                /> 
                
                <Button
                style= {styles.button}
                onPress =  {this.handleLowPrice}
               title= "Low"
                /> 

</View>
                <TextInput style = {styles.input}
                    placeholder = "Maximum distance?"
                    onChangeText = {this.handleDistance}/>
                
                <TouchableOpacity 
                style = {styles.submitButton}
                onPress = { () => this.submit(this.state.term, this.state.place, this.state.price, this.state.distance)}>
                <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
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
