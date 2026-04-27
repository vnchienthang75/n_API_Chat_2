const Chat = require("../model/chat-mo.js");
const { removeAllFile } = require("../utils/paging.js");

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

exports.xoaChat = (req, res, next) => {
  Chat.nhapChat([], (x) => {
    removeAllFile("./upload/");
    res.json({ msg: x });
  });
};
