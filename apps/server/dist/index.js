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
  const name = socket.handshake.auth.name;
  if (name) {
    io.emit("newConnection", { name });
  }
  socket.on("message", (data) => {
    io.emit("message", data);
  });
});
httpServer.listen(4e3).on("listening", () => {
  console.log("listening");
});
