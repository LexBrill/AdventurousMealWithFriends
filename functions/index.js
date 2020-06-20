const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage');
const os = require('os');
const path = require('path');







// const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    const execFile = require('child_process').execFile
    const process = execFile('python' , ['./testScript.py', "Chinese", "Seattle", "high", "15"]);
    process.stdout.on('data' , data => {
        console.log(data.toString());
        response.send(data.toString());
    });
    // response.send("Hello from Firebase!");
});

// exports.onFileChange = functons.storage.object().onChange(event => {});


// exports.uploadFile - functions.https.onRequest((req, res) => {
//     res.status(200).json({
//         message: 'It worked!'
//     });

// });