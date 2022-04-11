import type { Action } from '@/src/action'

export type HasActionInCancelListByName = { name: string }

export type HasActionInCancelListById = { id: string }

export type AddActionInCancelList = { action: Action }

export type RemoveActionFromCancelList = { id: string }

export type TransferActionFromCancelListToCurrent = { id: string }
