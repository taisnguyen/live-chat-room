const ChatroomController = require("../../controllers/chatroomController");
const MainChatroomRouter = require("express").Router();

// GET /login
MainChatroomRouter.get("/:id", ChatroomController.getChatroomPage);

module.exports = MainChatroomRouter;