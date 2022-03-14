const RoomService = require("../services/roomService");

// GET /chatroom/:id
const getChatroomPage = (req, res) => {
    const roomId = parseInt(req.params.id);
    const username = req.query.username;

    // Room does not exist
    if (!RoomService.checkIfRoomExists(roomid))
        return res.sendStatus(404);

    res.render("chatroomView");
};
    
module.exports = {
    getChatroomPage
}