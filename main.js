const RoomManager = require("./lib/rooms/roomManager.js");


const { port } = require("./config.js")
const { Server } = require("socket.io");

const io = new Server(port, {});

const registerRoomHandlers = require("./handlers/roomHandler.js");

RoomManager.createRoom();
console.log(RoomManager.rooms);


io.on("connection", (socket) => {
    registerRoomHandlers(io, socket);

    console.log("user has connected");
})

// Communications from client to server
// Create a room
// Join a room
// Ready up
// Category selected
// Question answered
// Quiz complete

// Communications from server to client
// All players ready
// All categories selected and game starting
// Question set to answer
// Status of other players (questions answered so far)
// Final results
// Game closure