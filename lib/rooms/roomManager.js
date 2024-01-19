const Room = require("./rooms.js");

class RoomManager {
    constructor() {
        this.rooms = {}
    }

    registerRoom(roomID) {
        this.rooms[roomID] = new Room(roomID);
    }
}

module.exports = new RoomManager();