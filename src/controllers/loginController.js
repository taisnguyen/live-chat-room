const LoginService = require("../services/loginService");
const LoginViewModel = require("../viewModels/loginViewModel");

// GET /login
const getLoginPage = (req, res) => {
    res.render("loginView");
};

// POST /login
const loginUser = (req, res) => {
    const username = req.body.username || "";
    const roomId = req.body.roomId || "";
    const loginViewModel = new LoginViewModel(username.trim(), roomId);

    // Validate loginViewModel
    const validationResult = LoginService.validateLoginRequest(loginViewModel); 
    if (validationResult !== true) {
        return res.render("loginView", { viewModel: loginViewModel, errorViewModel: validationResult });
    }

    // Redirect to chatroom
    res.redirect("/chatroom/" + loginViewModel.roomId + "?username=" + loginViewModel.username);
};

module.exports = {
    getLoginPage,
    loginUser
};