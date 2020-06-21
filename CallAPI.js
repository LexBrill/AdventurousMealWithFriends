// const execFile = require('child_process').execFile
// const process = execFile('python' , ['./testScript.py', "Chinese", "Seattle", "high", "15"]);
// process.stdout.on('data' , data => {
//         console.log(data.toString());
// });

const getPosts = () => {
    return fetch('https://us-central1-wherewegoing-7e97a.cloudfunctions.net/uploadFile')
    .then(res => res.json())
    .then(posts => console.log(posts))
}

const newPost = post => {
    const options = {
            method: 'POST',
            body: JSON.stringify(post),
            // headers: new Headers({
            //     'Content-Type': 'application/json'
            // })
    }

    return fetch('https://us-central1-wherewegoing-7e97a.cloudfunctions.net/uploadFile')
}