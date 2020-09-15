const express = require('express');
const app = express();

const server = app.listen(8000, () => console.log("Listening on port 8000"));

const io = require('socket.io')(server);

io.on("connection", socket => {
    socket.on('message_from_client', data => {
        console.log(data);

        socket.broadcast.emit('message_from_server', data);
    })

    socket.on('connected', data => {
        socket.emit('success', "You have successfully connected to the socket server.");
    })
})