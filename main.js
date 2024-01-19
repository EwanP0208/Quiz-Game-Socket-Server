const { port } = require("./config.js")
const { Server } = require("socket.io");

const io = new Server(port, {});

io.on("connection", (socket) => {
    console.log("user has connected");
})