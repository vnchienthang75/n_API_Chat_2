const Chat = require("../model/chat-mo.js");

exports.docChat = (req, res, next) => {
  Chat.docChat((x) => {
    res.json(x);
  });
};

exports.nhapChat = (req, res, next) => {
  const info = req.body;
  const nn = new Chat(info.content);
  nn.nhapChat(info, (x) => {
    res.json({ msg: x });
  });
};
