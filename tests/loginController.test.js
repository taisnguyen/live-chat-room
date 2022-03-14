const LoginController = require("../src/controllers/loginController");
const ErrorViewModel = require("../src/viewModels/errorViewModel");
const LoginViewModel = require("../src/viewModels/loginViewModel");

describe("LoginController API", () => {
    // Mock req and res objects
    const req = {
        body: {}
    };
    const res = {
        render: jest.fn(),
        redirect: jest.fn()
    };

    it("username and room id are empty", async () => {
        await LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("only username is empty", async () => {
        req.body.roomId = 1;
        await LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("only room id is empty", async () => {
        req.body.username = "test";
        req.body.roomId = undefined;
        await LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("room id is too short", async () => {
        req.body.roomId = "2321";
        await LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("all parameters are valid", async () => {
        req.body.username = "test";
        req.body.roomId = "10000";
        await LoginController.loginUser(req, res);
        
        const loginViewModel = new LoginViewModel("test", "10000");
        const errorViewModel = new ErrorViewModel(["Room does not exist."]);
        expect(res.render).toHaveBeenCalledWith("loginView", { viewModel: loginViewModel, errorViewModel: errorViewModel });
    });

});