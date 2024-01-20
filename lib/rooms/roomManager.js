const { generateRandomString } = require("../utils.js");
const Room = require("./rooms.js");

class RoomManager {
    constructor() {
        this.rooms = {}
    }

    createRoom() {
        const roomCode = generateRandomString(5);
        this.rooms[roomCode] = new Room(roomCode);
    }
}

module.exports = new RoomManager();