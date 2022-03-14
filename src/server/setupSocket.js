const UserService = require("../services/userService");


module.exports = (server) => {

    const socket = require("socket.io");
    const io = socket(server);

    io.on("connection", (socket) => {
        
        // Join room
        socket.on("joinRoom", ({username, roomId}) => {
            socket.join(roomId);
            socket.emit("joinedRoom", { username, roomId });

            // Add user

        });
    });


}

