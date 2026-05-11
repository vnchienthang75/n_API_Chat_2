const express = require("express");
const router = express.Router();
const ControllerChat = require("../controller/chat-co.js");
router.get("/docchat", ControllerChat.docChat);
router.post("/nhapchat", ControllerChat.nhapChat);

module.exports = router;
