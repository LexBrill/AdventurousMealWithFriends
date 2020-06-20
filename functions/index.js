const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
// const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// exports.onFileChange = functons.storage.object().onChange(event => {});


// exports.uploadFile - functions.https.onRequest((req, res) => {
//     res.status(200).json({
//         message: 'It worked!'
//     });

// });