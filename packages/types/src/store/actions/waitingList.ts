import type { Action } from './../../action'

export type HasActionInWaitingListByName = { name: string }

export type HasActionInWaitingListById = { id: string }

export type AddActionInWaitingList = Action

export type RemoveActionFromWaitingList = { id: string }

export type TransferActionFromWaitingListToCurrent = { id: string }
