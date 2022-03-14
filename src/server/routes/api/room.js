const RoomController = require("../../../controllers/roomController");
const MainRoomRouter = require("express").Router();

// GET /api/room/:id
MainRoomRouter.use("/:id", RoomController.getRoom);

module.exports = MainRoomRouter;