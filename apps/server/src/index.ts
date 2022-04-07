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
  socket.onAny((eventName, data) => {
    io.emit(eventName, data)
  })
})

httpServer.listen(4000).on('listening', () => {
  console.log('listening')
})
