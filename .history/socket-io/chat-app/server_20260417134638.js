const express = require("express");
const app = express(); // making an express app
app.use(express.static("public")); // serving static files form public folder
const expressServer = app.listen(3000);

const socketIo = require("socket.io"); // loading socket io server
const io = socketIo(expressServer, {}); // create socket io server and passing the express server to it

io.on();
