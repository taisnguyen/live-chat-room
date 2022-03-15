const LoginController = require("../src/controllers/loginController");
const RoomService = require("../src/services/roomService");

describe("LoginController API", () => {
    // Mock req and res objects
    const req = {
        body: {}
    };
    const res = {
        render: jest.fn(),
        redirect: jest.fn()
    };

    it("username and room id are empty", () => {
        req.body.username = undefined;
        req.body.roomId = undefined;
        LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("only username is empty", () => {
        req.body.username = undefined;
        req.body.roomId = "1";
        LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("only room id is empty", () => {
        req.body.username = "test";
        req.body.roomId = undefined;
        LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("room id is too short", () => {
        req.body.username = "test";
        req.body.roomId = "2321";
        LoginController.loginUser(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("all parameters are valid", () => {
        RoomService.createRoom(10000);

        req.body.username = "test";
        req.body.roomId = "10000";
        LoginController.loginUser(req, res);
        
        expect(res.redirect).toHaveBeenCalled();
    });

});