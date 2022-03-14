// Connect to websocket and join room
const socket = io();
socket.emit("joinRoom", { username: window.location.href.split("/")[4].split("=")[1], roomId: window.location.href.split("/")[4].split("?")[0] });
