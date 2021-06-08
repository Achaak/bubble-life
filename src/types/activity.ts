export interface Activity {
  id?: string
  name: string
  start: number
  duration: number
  function: () => void
  importance: 1 | 2 | 3
}
