const LoginController = require("../../controllers/loginController");
const MainLoginRouter = require("express").Router();

// GET /login
MainLoginRouter.get("/", LoginController.getLoginPage);

// POST /login
MainLoginRouter.post("/", LoginController.loginUser);

module.exports = MainLoginRouter;