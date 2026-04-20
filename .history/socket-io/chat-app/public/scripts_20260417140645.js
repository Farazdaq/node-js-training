//console.log(io);
const socket = io("http://localhost:3000");

socket.on("welcome", (data) => {
  console.log(data);
  socket.emit("thanks", [4, 5, 6]);
});
