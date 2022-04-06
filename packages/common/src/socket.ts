import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import io from 'socket.io-client'
import type { Socket } from 'socket.io-client'

const getSocketUrl = ({ localhost }: { localhost?: true } = {}): string => {
  let SOCKET_URL: string

  if (typeof window === 'undefined' || localhost) {
    SOCKET_URL = `localhost:4000`
  } else {
    SOCKET_URL = `${window.location.hostname}:4000`
  }

  return SOCKET_URL
}

export const socket = ({ localhost }: { localhost?: true } = {}): Socket<
  ServerToClientEvents,
  ClientToServerEvents
> => io(getSocketUrl({ localhost }))
