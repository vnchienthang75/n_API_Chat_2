const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const Chat = require("./model/chat-mo.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerUser = require("./router/user-ro.js");
const routerChat = require("./router/chat-ro.js");
app.use(routerUser);
app.use(routerChat);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/postfile", upload.single("file"), (req, res, next) => {
  const info = req.body;
  const tt = {
    userId: info.userId,
    content: req.file.filename,
    type: "file",
  };
  Chat.docChat((x) => {
    const xx = [...x];
    xx.push(tt);
    Chat.nhapChat(xx, (y) => {
      res.json({ msg: y, xx: xx });
    });
  });
});
app.use("/file", express.static("upload"));

const Server = require("socket.io").Server;
const http = require("http");
const { type } = require("os");
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
