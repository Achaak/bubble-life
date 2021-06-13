export interface Activity {
  id?: string
  name: string
  start: number
  duration: number
  onStart?: () => void
  onEnd?: () => void
  importance: 1 | 2 | 3
}
