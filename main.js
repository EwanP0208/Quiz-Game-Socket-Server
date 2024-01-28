const { port } = require("./config.js")
const { Server } = require("socket.io");

const RoomManager = require("./lib/roomManager.js");

const io = new Server(port, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const registerRoomHandlers = require("./handlers/roomHandler.js");
const registerGameHandlers = require("./handlers/gameHandler.js");

io.on("connection", (socket) => {
    registerRoomHandlers(io, socket);
    registerGameHandlers(io, socket);

    socket.on("rooms", () => {
        console.log(RoomManager.roomStates);
    })
});