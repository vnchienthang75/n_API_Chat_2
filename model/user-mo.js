const { readFileUser, writeFileUser, radomId } = require("../utils/paging.js");

module.exports = class User {
  constructor(id, userId, pass) {
    this.id = id;
    this.userId = userId;
    this.pass = pass;
  }
  static login(user, cb) {
    readFileUser((x) => {
      if (x && x.length > 0) {
        const userX = x.findIndex(
          (y) => y.userId == user.userId && y.pass == user.pass,
        );
        if (userX >= 0) cb(x[userX]);
        else cb(null);
      } else cb(null);
    });
  }
  signup(cb) {
    readFileUser((x) => {
      if (x && x.length > 0) {
        const index = x.findIndex((y) => y.userId == this.userId);
        if (index >= 0) {
          cb("userId đã tồn tại!!!");
        } else {
          x.push(this);
          writeFileUser(x, (y) => {
            cb(y);
          });
        }
      } else {
        writeFileUser([this], (x) => {
          cb(x);
        });
      }
    });
  }
  static danhSachUser(cb) {
    readFileUser((x) => {
      cb(x);
    });
  }
  static xoaUser(userId, cb) {
    readFileUser((x) => {
      const y = [...x];
      const tt = y.filter((z) => z.userId != userId);
      writeFileUser(tt, (x) => {
        cb(x);
      });
    });
  }
};
