const Chat = require("../model/chat-mo.js");

exports.docChat = (req, res, next) => {
  Chat.docChat((x) => {
    res.json(x);
  });
};

exports.nhapChat = (req, res, next) => {
  const info = req.body;
  Chat.nhapChat(info, (x) => {
    res.json({ msg: x });
  });
};
