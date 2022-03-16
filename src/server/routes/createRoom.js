const CreateRoomController = require("../../controllers/createRoomController");
const MainCreateRoomRouter = require("express").Router();

// GET /createRoom
MainCreateRoomRouter.get("/", CreateRoomController.getCreateRoomPage);

// POST /createRoom
MainCreateRoomRouter.post("/", CreateRoomController.createRoom);

module.exports = MainCreateRoomRouter;