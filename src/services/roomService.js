const Room = require("../models/room");
const RoomRepository = require("../repositories/roomRepository");

class RoomService {

    static createRoom(id) {
        const idInt = parseInt(id);

        // Check if room already exists
        if (this.checkIfRoomExists(idInt)) return;

        // Create room
        const room = new Room(idInt);
        RoomRepository.addRoom(room);
    }

    static checkIfRoomExists(id) {
        return RoomRepository.getRoom(id) !== undefined;
    }

    static getAllRooms() {
        return RoomRepository.getAllRooms();
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