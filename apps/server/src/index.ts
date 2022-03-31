import { createServer } from 'http'
import { Server } from 'socket.io'
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from '@bubble/types'

const httpServer = createServer()
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(
  httpServer,
  {
    cors: {
      origin: '*',
    },
  }
)

io.on('connection', (socket) => {
  console.log('connection', socket.data)

  socket.on('hello', () => {
    // io.emit("hello");
    console.log('hello')
  })
})

httpServer.listen(4000).on('listening', () => {
  console.log('listening')
})
