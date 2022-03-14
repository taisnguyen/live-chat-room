const User = require("../models/user");

class UserRepository {

    static users = new Map();

    static getUser(id) {
        return this.users.get(id);
    }

    /**
     * Adds a user to the repository.
     * @param {User} user
     */
    static addUser(user) {
        this.users.set(user.id, user);
    }

    static getNextId() {
        return this.users.size + 1;
    }
    
}

module.exports = UserRepository;