const textInput = document.querySelector(".text-input");
const usernameParameter = window.location.href.split("/")[4].split("=")[1];
const roomIdParameter = window.location.href.split("/")[4].split("?")[0];

// Connect to websocket and join room
const socket = io();
socket.emit("joinRoom", { username: usernameParameter, roomId: roomIdParameter});

function addMessageToChat(message) {
    const chatWrapper = document.querySelector(".chat-wrapper");
    const chat = document.querySelector(".chat");
    const messageElement = document.createElement("p");
    messageElement.innerHTML = message;
    chat.appendChild(messageElement);
    chatWrapper.scrollTop = chatWrapper.scrollHeight;
}

socket.on("message", ({ username, message }) => {
    const messageToAdd = `<strong>${username}</strong>: ${message}`;
    addMessageToChat(messageToAdd);
});

socket.on("usersInRoom", ({ users }) => {
    // Update user list
    const userList = document.querySelector(".user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        const userElement = document.createElement("div");
        userElement.innerHTML = user.name;
        userList.appendChild(userElement);
    });
});

socket.on("userConnected", ({ username }) => {
    const messageToAdd = `<strong>${username}</strong> has connected.`;
    addMessageToChat(messageToAdd);
});

socket.on("userDisconnected", ({ username }) => {
    const messageToAdd = `<strong>${username}</strong> has disconnected.`;
    addMessageToChat(messageToAdd);
});

textInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        if (textInput.value.trim() != "") {
            socket.emit("message", { userId: socket.id, message: textInput.value });
            textInput.value = "";
        }
    }
});