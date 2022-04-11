export type AddPlayActionInWaitingList = {
  start: number
  duration: number
  importance: 1 | 2 | 3
  memory?: {
    recoverValue?: number
  }
}
