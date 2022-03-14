const LoginService = require("../services/loginService");
const LoginViewModel = require("../viewModels/loginViewModel");

// GET /login
const getLoginPage = (req, res) => {
    res.render("loginView");
};

// POST /login
const loginUser = async (req, res) => {
    const loginViewModel = new LoginViewModel(req.body.username.trim(), req.body.roomId);

    // Validate loginViewModel
    const validationResponse = await LoginService.validateLoginRequest(loginViewModel); 
    if (validationResponse !== true) {
        res.render("loginView", { viewModel: loginViewModel, errorViewModel: validationResponse });
        return;
    }

    // Redirect to chatroom
    res.redirect("/chatroom/" + loginViewModel.roomId + "?username=" + loginViewModel.username);
};

module.exports = {
    getLoginPage,
    loginUser
};