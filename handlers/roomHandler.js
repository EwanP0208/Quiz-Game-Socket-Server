const RoomManager = require("../lib/roomManager.js");

module.exports = (io, socket) => {
    const createRoom = ({ categories, difficulties, questionCount }) => {
        const newRoomCode = RoomManager.createRoom(categories, difficulties, questionCount);
        io.to(socket.id).emit("room:ready", { code: newRoomCode })
    }

    const joinRoom = ({ roomCode }) => {
        RoomManager.connectClientToRoom(roomCode, socket);
        const GameState = RoomManager.getGameState(roomCode);
        io.to(socket.id).emit("room:entered", GameState.gameSettings());
    }

    const setAlias = ({ alias }) => {
        const { roomCode, GameState } = RoomManager.getRoomState(socket.id);
        GameState.setClientAlias(socket.id, alias);
        io.to(roomCode).emit("player:list", GameState.getAllAliases());
    }

    socket.on("room:create", createRoom);
    socket.on("room:join", joinRoom);
    socket.on("player:name", setAlias);
}