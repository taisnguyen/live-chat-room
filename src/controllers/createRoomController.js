const CreateRoomService = require("../services/createRoomService");
const CreateRoomViewModel = require("../viewModels/createRoomViewModel");
const RoomService = require("../services/roomService");

// GET /createRoom
const getCreateRoomPage = (req, res) => {
    res.render("createRoomView");
};

// POST /createRoom
const createRoom = (req, res) => {
    const roomId = req.body.roomId || "";
    const createRoomViewModel = new CreateRoomViewModel(roomId);

    const validationResult = CreateRoomService.validateCreateRoomRequest(createRoomViewModel);
    if (validationResult !== true) {
        res.render("createRoomView", { viewModel: createRoomViewModel, errorViewModel: validationResult });
        return;
    }

    // Create chatroom
    RoomService.createRoom(roomId);

    // Redirect to chatroom
    res.redirect("/chatroom/" + createRoomViewModel.roomId + "?username=Admin");
};

module.exports = {
    getCreateRoomPage,
    createRoom
};