export * from './cancelList.js'
export * from './current.js'
export * from './waitingList.js'
export * from './types.js'

export type HasActionByName = { name: string }

export type HasActionById = { id: string }

export type UpdateMemoryValue = {
  memoryId: string
  actionId: string
  value: unknown
}

export type DeleteMemoryValue = {
  memoryId: string
  actionId: string
}
