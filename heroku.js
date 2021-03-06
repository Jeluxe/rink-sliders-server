const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join('public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join('public', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`server is on port: ${PORT} \n Link: http://localhost:${PORT}`);
});

module.exports = io;
require('./socket');