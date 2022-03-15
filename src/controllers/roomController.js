const RoomService = require("../services/roomService");

// GET /api/room/:id
const getRoom = (req, res) => {
    const roomId = parseInt(req.params.id); 

    RoomService.createRoom(10000);

    if (RoomService.getRoomInJson(roomId)) {
        res.send(RoomService.getRoomInJson(roomId));
    } else {
        res.sendStatus(404);
    }
};

module.exports = {
    getRoom
};