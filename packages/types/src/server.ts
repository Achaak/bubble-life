export interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  newConnection: (value: { name: string }) => void
  message: (value: {
    content: string
    start?: number
    duration?: number
    importance?: 1 | 2 | 3
  }) => void
}

export interface ClientToServerEvents {
  message: (value: {
    content: string
    start?: number
    duration?: number
    importance?: 1 | 2 | 3
  }) => void
}

export interface InterServerEvents {}

export interface SocketData {
  name: string
  age: number
}
