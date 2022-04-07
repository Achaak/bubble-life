import type { Action } from './action'
import type { AddEatActionInWaitingList } from './eat'

export interface CommonEvents {
  newUser: (value: { name: string }) => void
  message: (value: {
    content: string
    start?: number
    duration?: number
    importance?: 1 | 2 | 3
  }) => void
  addAction: (action: Action) => void
  addEatActionInWaitingList: (params: AddEatActionInWaitingList) => void
  addEatActionInWaitingListDefault: () => void
}

export type ServerToClientEvents = CommonEvents

export type ClientToServerEvents = CommonEvents

export interface InterServerEvents {}

export interface SocketData {
  name: string
  age: number
}
