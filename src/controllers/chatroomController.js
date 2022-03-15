const RoomService = require("../services/roomService");

// GET /chatroom/:id
const getChatroomPage = (req, res) => {
    const roomId = parseInt(req.params.id);
    const username = req.query.username;

    // Return user back to login if there is no provided username
    if (!username) {
        return res.redirect("/login");
    }

    // Room does not exist
    if (!RoomService.checkIfRoomExists(roomId)) {
        return res.redirect("/login");
    }

    res.render("chatroomView");
};
    
module.exports = {
    getChatroomPage
};