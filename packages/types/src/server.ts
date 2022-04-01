export interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  hello: () => void
}

export interface ClientToServerEvents {
  hello: () => void
}

export interface InterServerEvents {}

export interface SocketData {
  name: string
  age: number
}
