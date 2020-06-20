const execFile = require('child_process').execFile
const process = execFile('python' , ['./testScript.py', "Chinese", "Seattle", "high", "15"]);
process.stdout.on('data' , data => {
        console.log(data.toString());
});