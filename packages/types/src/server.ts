export interface CommonEvents {
  newUser: (value: { name: string }) => void
  message: (value: {
    content: string
    start?: number
    duration?: number
    importance?: 1 | 2 | 3
  }) => void
}

export type ServerToClientEvents = CommonEvents

export type ClientToServerEvents = CommonEvents

export interface InterServerEvents {}

export interface SocketData {
  name: string
  age: number
}
