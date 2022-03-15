const UserService = require("../services/userService");

function updateUserList(io, roomId) {
    io.to(roomId).emit("usersInRoom", { users: UserService.getAllUsersInRoom(roomId) });
}

module.exports = (server) => {

    const socket = require("socket.io");
    const io = socket(server);

    io.on("connection", (socket) => {
        
        socket.on("joinRoom", ({username, roomId}) => {
            // Join room
            socket.join(roomId);
            socket.emit("joinedRoom", { username, roomId });

            // Notify others in room
            io.to(roomId).emit("userConnected", { username });

            // Create user
            UserService.createUser(socket.id, username, roomId);

            // Update user lists
            updateUserList(io, roomId);
        });

        socket.on("message", ({userId, message}) => {
            const user = UserService.getUser(userId);
            if (!user) return;

            io.to(user.roomId).emit("message", { username: user.name, message });
        });

        socket.on("disconnect", () => {
            const user = UserService.getUser(socket.id);
            if (!user) return;

            // Notify other users in room
            io.to(user.roomId).emit("userDisconnected", { username: user.name });

            // Delete user
            UserService.deleteUser(socket.id);
            
            // Update user lists
            updateUserList(io, user.roomId);

        });
    });

}

