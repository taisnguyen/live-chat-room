const LoginController = require("../../controllers/loginController");
const MainAPIRouter = require("express").Router();

// GET /login
MainAPIRouter.get("/", LoginController.getLoginPage);

// POST /login
MainAPIRouter.post("/", LoginController.loginUser);

module.exports = MainAPIRouter;