const ChatroomController = require("../src/controllers/ChatroomController");
const RoomService = require("../src/services/RoomService");

describe("ChatroomController API", () => {
    // Mock req and res objects
    const req = {
        params: {},
        query: {}
    };
    const res = {
        render: jest.fn(),
        redirect: jest.fn()
    };

    it("username and room id are empty", () => {
        req.query.username = undefined;
        req.params.id = undefined;
        ChatroomController.getChatroomPage(req, res);
        expect(res.redirect).toHaveBeenCalled();
    });

    it("only username is empty", () => {
        RoomService.createRoom(1);

        req.query.username = undefined;
        req.params.id = "1";
        ChatroomController.getChatroomPage(req, res);
        expect(res.redirect).toHaveBeenCalled();
    });

    it("only room id is empty", () => {
        req.query.username = "test";
        req.params.id = undefined;
        ChatroomController.getChatroomPage(req, res);
        expect(res.redirect).toHaveBeenCalled();
    });

    it("room does not exist", () => {
        req.query.username = "test";
        req.params.id = "2321";
        ChatroomController.getChatroomPage(req, res);
        expect(res.redirect).toHaveBeenCalled();
    });

    it("all parameters are valid", () => {
        RoomService.createRoom(10000);

        req.query.username = "test";
        req.params.id = "10000";
        ChatroomController.getChatroomPage(req, res);
        
        expect(res.render).toHaveBeenCalled();
    });

});