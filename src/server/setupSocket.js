module.exports = (server) => {

    const socket = require("socket.io");
    const io = socket(server);
    const UserRepository = require("../repositories/userRepository");

    io.on("connection", (socket) => {
        console.log("made socket connection");
    });


}

