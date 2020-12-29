import http from "http"
//import { Socket } from "socket.io"
import Config from "../config.json"
import Core from "./src/core";

const server = http.createServer()
const io = require("socket.io")(server);

// Start core
Core({ io })

/*io.on('connection', (socket: Socket) => {
  socket.on('my other event', (data) => {
    console.log('I got data. will running another function', data.count);
  });
});*/

server.listen(Config.config.server, () => {
  console.log("Server started on", Config.config.server)
})