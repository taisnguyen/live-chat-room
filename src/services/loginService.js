const axios = require("axios");
const ErrorViewModel = require("../viewModels/errorViewModel");

class LoginService {

    /**
     * Returns true if loginViewModel is valid,
     * otherwise, return a ErrorViewModel with the errors.
     * 
     * The function returns a promise since an HTTP GET request is
     * made to determine whether a room exists.
     * @param {LoginViewModel} loginViewModel
     */
    static validateLoginRequest(loginViewModel) {
        return new Promise((resolve) => {
        
            const errors = [];

            // Username is required
            if (!loginViewModel.username.trim()) {
                errors.push("Username is required.");
            }

            // RoomId is required
            if (!loginViewModel.roomId) {
                errors.push("Room Code is required.");
            }
            else if (loginViewModel.roomId.length !== 5) {
                errors.push("Room Code must have 5 characters.");
            }
            
            if (errors.length > 0)
                resolve(new ErrorViewModel(errors));
            
            // Room must exist
            // GET /api/room/LoginViewModel.roomId
            axios.get("/api/room/" + loginViewModel.roomId)
                // If a 404 is returned, the room does not exist
                .catch(() => {
                    errors.push("Room does not exist.");
                    resolve(new ErrorViewModel(errors));
                })
                .finally(() => {
                    resolve(true);
                });
        });
    }

}

module.exports = LoginService;