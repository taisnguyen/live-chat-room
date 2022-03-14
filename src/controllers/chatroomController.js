const RoomService = require("../services/roomService");

// GET /chatroom/:id
const getChatroomPage = (req, res) => {
    const roomId = parseInt(req.params.id);

    // Room does not exist
    if (!RoomService.checkIfRoomExists(roomId))
        return res.redirect("/login");

    res.render("chatroomView");
};
    
module.exports = {
    getChatroomPage
};