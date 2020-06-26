import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button } from 'react-native'
import './global.js'
import { createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer } from '@react-navigation/native';


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
        .then(data => global.data = JSON.parse(data))
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
                    onChangeText = {this.handleTerm}/>

                <TextInput style = {styles.input}
                    placeholder = "Where are you?"
                    onChangeText = {this.handleLocation}/>

<View  style= {{flexDirection: "row"}}>

                <TouchableOpacity style= {styles.button}
                onPress =  {this.handleHighPrice}>
                <Text style = {styles.submitButtonText}>High</Text>
                </TouchableOpacity>
              
                
                <TouchableOpacity style= {styles.button}
                onPress =  {this.handleLowPrice}>
                <Text style = {styles.submitButtonText}>Low</Text>
                </TouchableOpacity>

</View>
                <TextInput style = {styles.input}
                    placeholder = "Maximum distance?"
                    onChangeText = {this.handleDistance}/>
                
                <TouchableOpacity 
                style = {styles.submitButton}
                onPress = { () => this.submit(this.state.term, this.state.place, this.state.price, this.state.distance)}
                onPress={()=>this.props.navigation.push('Results')}
                >
                <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>


            <Button
            
            title= 'Results'/>
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
        backgroundColor: '#003399',
        padding: 10,
        margin: 15,
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:1000,
    },
    submitButtonText: {
        color: 'white'
    },
    button: {
        backgroundColor: "#003399",
        margin: 10,
        padding: 10,
        borderRadius:1000,
        height:40,
        width:170,
        justifyContent: 'center',
        alignItems:'center',
    
    },
})
