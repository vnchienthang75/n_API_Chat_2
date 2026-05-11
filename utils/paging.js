const fs = require("fs");
const path = require("path");

const pUser = path.join(
  path.dirname(require.main.filename),
  "json",
  "user.json",
);
const pChat = path.join(
  path.dirname(require.main.filename),
  "json",
  "chat.json",
);
exports.readFileUser = (cb) => {
  fs.readFile(pUser, (er, data) => {
    if (er) console.log(er.message);
    else cb(JSON.parse(data));
  });
};
exports.readFileChat = (cb) => {
  fs.readFile(pChat, (er, data) => {
    if (er) console.log(er.message);
    else cb(JSON.parse(data));
  });
};
exports.writeFileUser = (data, cb) => {
  fs.writeFile(pUser, JSON.stringify(data), (er) => {
    if (er) cb(er.message);
    else cb("successfully");
  });
};
exports.writeFileChat = (data, cb) => {
  fs.writeFile(pChat, JSON.stringify(data), (er) => {
    if (er) cb(er.message);
    else cb("successfully");
  });
};
exports.radomId = () => {
  const tt = Math.trunc(Math.random() * 10000 + 1);
  return tt;
};
