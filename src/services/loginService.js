const RoomService = require("../services/roomService");
const ErrorViewModel = require("../viewModels/errorViewModel");

class LoginService {

    /**
     * Returns true if loginViewModel is valid,
     * otherwise, return a ErrorViewModel with the errors.
     * @param {LoginViewModel} loginViewModel
     */
    static validateLoginRequest(loginViewModel) {
        const errors = [];

        // Username is required
        if (!loginViewModel.username.trim()) {
            errors.push("Username is required.");
        }
        
        // RoomId is required
        if (loginViewModel.roomId === "") {
            errors.push("Room Code is required.");
        }
        // RoomId must have 5 characters
        else if (loginViewModel.roomId.length !== 5) {
            errors.push("Room Code must have 5 characters.");
        }
        
        if (errors.length > 0)
            return new ErrorViewModel(errors);
        
        // Room must exist
        if(!RoomService.checkIfRoomExists(parseInt(loginViewModel.roomId))) {
            errors.push("Room does not exist.");
            return new ErrorViewModel(errors);
        }

        return true;
    }

}

module.exports = LoginService;