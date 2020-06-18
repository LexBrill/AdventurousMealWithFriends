const eFile = require('child_process').execFile
const process = execFile('python' , ['./findPlace.py', "Chinese", "New York", "low", "15"]);
process.stdout.on('data' , data => {
        console.log(data.toString());
});