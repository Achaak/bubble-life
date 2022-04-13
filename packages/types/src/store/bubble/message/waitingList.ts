import type { Message } from '@/src/message.js'

export type HasMessageInWaitingListById = { id: string }

export type AddMessageInWaitingList = Message

export type RemoveMessageFromWaitingList = { id: string }

export type TransferMessageFromWaitingListToCurrent = { id: string }
