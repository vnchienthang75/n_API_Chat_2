const express = require("express");
const router = express.Router();
const ControllerUser = require("../controller/user-co.js");
router.post("/signup", ControllerUser.signup);
router.post("/login", ControllerUser.login);
router.get("/danhsach", ControllerUser.danhsach);
router.post("/xoauser", ControllerUser.xoauser);

module.exports = router;
