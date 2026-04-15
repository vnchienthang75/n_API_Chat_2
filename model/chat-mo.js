const { readFileChat, writeFileChat } = require("../utils/paging.js");

module.exports = class Chat {
  constructor(userId, content) {}

  static nhapChat(data, cb) {
    writeFileChat(data, (x) => {
      cb(x);
    });
  }
  static docChat(cb) {
    readFileChat((x) => {
      cb(x);
    });
  }
};
