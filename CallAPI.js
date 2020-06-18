const execFile = require('child_process').execFile
const process = execFile('python' , ['./testScript.py', "hello world"]);
process.stdout.on('data' , data => {
        console.log(data.toString());
});