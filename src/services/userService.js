const UserRepository = require("../repositories/roomRepository");

class UserService {

    static createUser(name, roomId) {
        // Create user
        const user = new User(UserRepository.getNextId(), name, roomId);
        UserRepository.addUser(user);
    }

}

module.exports = UserService;