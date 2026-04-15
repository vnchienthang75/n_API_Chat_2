const User = require("../model/user-mo.js");
const { radomId } = require("../utils/paging.js");

exports.login = (req, res, next) => {
  const info = req.body;
  User.login(info, (x) => {
    if (x) {
      res.json({ user: x, thongbao: "login successfully" });
    } else {
      res.json({ user: x, thongbao: "login failed" });
    }
  });
};

exports.signup = (req, res, next) => {
  const info = req.body;
  const nn = new User(radomId(), info.userId, info.pass);
  nn.signup((x) => {
    res.json({ msg: x });
  });
};

exports.danhsach = (req, res, next) => {
  User.danhSachUser((x) => {
    res.json(x);
  });
};

exports.xoauser = (req, res, next) => {
  const info = req.body;
  User.xoaUser(info.userId, (x) => {
    res.json({ msg: x });
  });
};
