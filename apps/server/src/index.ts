import { createServer } from "http";
import { Server } from "socket.io";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "@bubble/types";

const httpServer = createServer();
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connection", socket.data);

  socket.on("hello", () => {
    io.emit("hello");
  });
});

httpServer.listen(3000).on("listening", () => {
  console.log("listening");
});
