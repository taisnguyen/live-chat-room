const MainAPIRouter = require("express").Router();

// /room
MainAPIRouter.use("/room", require("./room"));

module.exports = MainAPIRouter;