const express = require("express");
const app = express(); // making an express app
app.use(express.static("public")); // serving static files form public folder
const expressServer = app.listen(3000);

const socketIo = require("socket.is");
const io = socketIo(expressServer, {});
