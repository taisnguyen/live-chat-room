const UserRepository = require("../repositories/userRepository");
const User = require("../models/user");

class UserService {

    static createUser(id, name, roomId) {
        // Create user
        const user = new User(id, name, roomId);
        UserRepository.addUser(user);
    }

    static getUser(id) {
        return UserRepository.getUser(id);
    }

    static getAllUsers() {
        let users = [];
        UserRepository.users.forEach(user => {
            users.push(user);
        });
        
        return users;
    }

    static getAllUsersInRoom(roomId) {
        let users = [];
        UserRepository.users.forEach(user => {
            if (user.roomId === roomId)
                users.push(user);
        });

        return users;
    }

    static deleteUser(id) {
        UserRepository.deleteUser(id);
    }

}

module.exports = UserService;