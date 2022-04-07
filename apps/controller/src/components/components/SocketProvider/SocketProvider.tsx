import { socket } from '@bubble/common'
import type { SocketEvents } from '@bubble/types'
import React, { createContext } from 'react'

export const SocketContext = createContext<SocketEvents | null>(null)

export const SocketProvider: React.FC = ({ children }) => {
  return <SocketContext.Provider value={socket()}>{children}</SocketContext.Provider>
}
