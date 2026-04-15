const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerUser = require("./router/user-ro.js");
const routerChat = require("./router/chat-ro.js");
app.use(routerUser);
app.use(routerChat);

const Server = require("socket.io").Server;
const http = require("http");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("message", message);
  });
});

server.listen(5000, () => {
  console.log("Server running!! ...");
});
