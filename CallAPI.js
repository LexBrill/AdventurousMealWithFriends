const spawn = require('child_process').spawn
const process = spawn('python' , ['./findPlace.py', "Chinese", "New York", "low", "15"]);
process.stdout.on('data' , data => {
        console.log(data.toString());
});