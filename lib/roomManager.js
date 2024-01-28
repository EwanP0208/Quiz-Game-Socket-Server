const { generateRandomString } = require("./utils.js");
const GameState = require("./gameState.js");

class RoomManager {
    constructor() {
        // Quick map for storing the room a client is in
        this.clientRooms = {};
        this.roomStates = {};
    }

    createRoom(categories="", difficulties="", questionCount=10) {
        const roomCode = generateRandomString(5);
        this.roomStates[roomCode] = new GameState(categories, difficulties, questionCount);
        return roomCode;
    }

    connectClientToRoom(roomCode, clientSocket) {
        clientSocket.join(roomCode);
        this.clientRooms[clientSocket.id] = roomCode;
        this.roomStates[roomCode].addClient(clientSocket.id, roomCode);
    }

    getClientsRoom(clientID) {
        return this.clientRooms[clientID];
    }

    getGameState(roomCode) {
        return this.roomStates[roomCode];
    }

    getRoomState(clientID) {
        const clientRoomCode = this.getClientsRoom(clientID);
        if (!clientRoomCode) return { roomCode: null, GameState: null };

        return {
            roomCode: clientRoomCode, 
            GameState: this.getGameState(clientRoomCode)
        }
    }
}

module.exports = new RoomManager();