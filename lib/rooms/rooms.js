const GameState = require("../gameState.js");

class Room {
    constructor(code) {
        this.code = code;
        this.clients = [];
        this.gameState = new GameState();
    }
}

module.exports = Room;