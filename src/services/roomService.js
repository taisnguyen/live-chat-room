const Room = require("../models/room");
const RoomRepository = require("../repositories/roomRepository");

class RoomService {

    static createRoom(id) {
        // Check if room already exists
        if (this.checkIfRoomExists(id)) return;

        // Create room
        const room = new Room(id);
        RoomRepository.addRoom(room);
    }

    static checkIfRoomExists(id) {
        return RoomRepository.getRoom(id) !== undefined;
    }

    /**
     * Returns a JSON representing the room given a room id.
     * @param {number} id
     */
    static getRoomInJson(id) {
        const room = RoomRepository.getRoom(id);
        if (!room) return false;

        return JSON.stringify(room);
    }

}

module.exports = RoomService;