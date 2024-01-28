const RoomManager = require("../lib/roomManager.js");

module.exports = (io, socket) => {
    const toggleReady = () => {
        const { roomCode, GameState } = RoomManager.getRoomState(socket.id);
        GameState.toggleClientReady(socket.id);
        io.to(roomCode).emit("game:ready-status", GameState.getReadyStates());

        // Check if all clients are ready, if they are then we're going to start the game
        if (GameState.allClientsReady()) {
            io.to(roomCode).emit("game:start");
        }
    }

    const questionAnswered = ({ selectedIndex }) => {
        const { roomCode, GameState } = RoomManager.getRoomState(socket.id);
        GameState.questionAnswered(socket.id, selectedIndex);
        io.to(roomCode).emit("game:question-status", GameState.getQuestionProgress())

        // Check if every client has answered all the questions, if so then the game is complete
        if (GameState.allClientsComplete()) {
            io.to(roomCode).emit("game:complete", GameState.correctAnswers());
        }
    }

    socket.on("player:ready", toggleReady);
    socket.on("question:answered", questionAnswered);
}