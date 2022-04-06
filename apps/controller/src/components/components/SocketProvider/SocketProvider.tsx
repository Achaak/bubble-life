import { socket } from '@bubble/common'
import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import React, { createContext } from 'react'
import type { Socket } from 'socket.io-client'

export const SocketContext = createContext<Socket<
  ServerToClientEvents,
  ClientToServerEvents
> | null>(null)

export const SocketProvider: React.FC = ({ children }) => {
  return <SocketContext.Provider value={socket()}>{children}</SocketContext.Provider>
}
