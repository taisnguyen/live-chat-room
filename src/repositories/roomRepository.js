const Room = require("../models/room");

class RoomRepository {

    static rooms = new Map();

    static getRoom(id) {
        return this.rooms.get(id);
    }

    static getAllRooms() {
        return Array.from(this.rooms.values());
    }

    /**
     * Adds a room to the repository.
     * @param {Room} room
     */
    static addRoom(room) {
        this.rooms.set(room.id, room);
    }
    
}

module.exports = RoomRepository;