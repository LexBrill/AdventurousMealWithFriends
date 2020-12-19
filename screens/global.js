import React, { Component, useState } from 'react'
import gi from './GetInputs.js'


global.data = JSON.stringify({name: "ur fucked"});
global.image = null;
global.place = null;
global.price = null;
global.distance = null;
// global.name = "Placeholder";
// global.rating = 0;

class global extends Component{
    submit(place, price, distance){
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
            .then(zoop => gi.props.navigation.push('Results'))
    }
}
const g = new global();
export default g;