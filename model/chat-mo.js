const { readFileChat, writeFileChat } = require("../utils/paging.js");

module.exports = class Chat {
  constructor(content) {
    this.conten = content;
  }
  nhapChat(cb) {
    writeFileChat(this, (x) => {
      cb(x);
    });
  }
  static docChat(cb) {
    readFileChat((x) => {
      cb(x);
    });
  }
};
