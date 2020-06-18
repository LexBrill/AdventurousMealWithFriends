var app = require('http:').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SocketManeger = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, () => {
    console.log("Connected to port:" + PORT)
})