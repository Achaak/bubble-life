export interface Activity {
  id?: string
  name: string
  start: number
  duration: number
  startFunction?: string
  EndFunction?: string
  importance: 1 | 2 | 3
}
