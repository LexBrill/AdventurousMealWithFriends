const spawn = require('child_process').spawn
const process = spawn('python' , ['./findPlace.py', ]);
process.stdout.on('data' , data => {
        console.log(data.toString());
});