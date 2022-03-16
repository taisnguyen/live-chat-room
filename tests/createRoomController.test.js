const CreateRoomController = require("../src/controllers/CreateRoomController");
const RoomService = require("../src/services/RoomService");

describe("CreateRoomController API", () => {
    // Mock req and res objects
    const req = {
        body: {}
    };
    const res = {
        render: jest.fn(),
        redirect: jest.fn()
    };

    it("room id is empty", () => {
        req.body.roomId = undefined;
        CreateRoomController.createRoom(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("room id is too short", () => {
        req.body.roomId = "2321";
        CreateRoomController.createRoom(req, res);
        expect(res.render).toHaveBeenCalled();
    });

    it("all parameters are valid", () => {
        req.body.roomId = "10000";
        CreateRoomController.createRoom(req, res);
        
        expect(RoomService.checkIfRoomExists(10000)).toBe(true);
    });

});