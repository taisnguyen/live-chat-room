const RoomService = require("../services/roomService");
const CreateRoomViewModel = require("../viewModels/createRoomViewModel");
const ErrorViewModel = require("../viewModels/errorViewModel");

class CreateRoomService {

    /**
     * Returns true if createRoomViewModel is valid,
     * otherwise, return a ErrorViewModel with the errors.
     * @param {CreateRoomViewModel} createRoomViewModel
     */
    static validateCreateRoomRequest(createRoomViewModel) {
        const errors = [];

        // RoomId is required
        if (createRoomViewModel.roomId === "") {
            errors.push("Room Code is required.");
        }
        // RoomId must have 5 characters
        else if (createRoomViewModel.roomId.length !== 5) {
            errors.push("Room Code must have 5 characters.");
        }
        
        if (errors.length > 0)
            return new ErrorViewModel(errors);
            
        // Room must not exist already
        if(RoomService.checkIfRoomExists(parseInt(createRoomViewModel.roomId))) {
            errors.push("Room already exists.");
            return new ErrorViewModel(errors);
        }

        return true;
    }

}

module.exports = CreateRoomService;