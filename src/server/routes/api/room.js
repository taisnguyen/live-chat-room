const RoomController = require("../../../controllers/roomController");
const MainAPIRouter = require("express").Router();

// GET /api/room/:id
MainAPIRouter.use("/:id", RoomController.getRoom);

module.exports = MainAPIRouter;