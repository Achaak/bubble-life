export type Message = {
  id?: string
  start: number
  duration: number
  importance: 1 | 2 | 3
  content: string
}
