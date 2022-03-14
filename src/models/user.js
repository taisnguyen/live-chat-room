class User {
    constructor(id, name, roomId) {
        this.id = id;         // PK
        this.name = name;
        this.roomId = roomId; // FK
    }
}

module.exports = User;