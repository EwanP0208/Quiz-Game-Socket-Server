class RoomManager {
    constructor() {
        this.rooms = {}
    }

    registerRoom(roomID) {
        this.rooms[roomID] = "ROOM";
    }
}

module.exports = new RoomManager();