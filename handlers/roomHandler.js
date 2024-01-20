const RoomManager = require("./lib/rooms/roomManager.js");

module.exports = (io, socket) => {
    const createRoom = (payload) => {
        RoomManager.createRoom();
    }

    const joinRoom = (payload) => {
        console.log("Joining the room");
    }

    socket.on("room:create", createRoom);
    socket.on("room:join", joinRoom);
}