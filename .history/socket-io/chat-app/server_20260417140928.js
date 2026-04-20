const express = require("express");
const app = express(); // making an express app
app.use(express.static("public")); // serving static files form public folder
const expressServer = app.listen(3000);

const socketIo = require("socket.io"); // loading socket io server
const io = socketIo(expressServer, {}); // create socket io server and passing the express server to it

// On() allows  the server to listen for events form the client.
// emit() allows the server to send events to the client.

io.on("connect", (socket) => {
  console.log(socket.id, "A new client has connected to the server");

  // 1st argument is the name of the event.
  // 2nd argument is the data that we want to send to the client.
  socket.emit("welcome", [1, 2, 3]); // pushing an event to the client with data on event name "welcome"
  socket.on("thanks", (data) => {
    console.log("there is it:", data);
  });
});
