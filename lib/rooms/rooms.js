const GameState = require("../gameState.js");

class Room {
    constructor(roomID) {
        this.roomID = roomID;
        this.clients = [];
        this.gameState = new GameState();
    }
}

module.exports = Room;