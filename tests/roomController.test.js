const RoomController = require("../src/controllers/roomController");
const RoomService = require("../src/services/roomService");

describe("RoomController API", () => {
    // Mock req and res objects
    const req = {
        params: {}
    };
    const res = {
        send: jest.fn(),
        sendStatus: jest.fn()
    };

    it("room does not exist", () => {
        req.params.id = "1";
        RoomController.getRoom(req, res);
        expect(res.sendStatus).toHaveBeenCalled();
    });

    it("room exists", () => {
        RoomService.createRoom(1);

        req.params.id = "1";
        RoomController.getRoom(req, res);
        expect(res.send).toHaveBeenCalled();
    });

});