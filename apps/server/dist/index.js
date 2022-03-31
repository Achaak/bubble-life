// src/index.ts
var import_http = require("http");
var import_socket = require("socket.io");
var httpServer = (0, import_http.createServer)();
var io = new import_socket.Server(httpServer, {
  cors: {
    origin: "*"
  }
});
io.on("connection", (socket) => {
  console.log("connection", socket.data);
  socket.on("hello", () => {
    console.log("hello");
  });
});
httpServer.listen(3e3).on("listening", () => {
  console.log("listening");
});
