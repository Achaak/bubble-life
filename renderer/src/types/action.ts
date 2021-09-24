import { Animation } from './animation'

export interface Action {
  id?: string
  name: string
  start: number
  duration: number
  startFunction?: string
  updateFunction?: string
  endFunction?: string
  cancelFunction?: string
  importance: 1 | 2 | 3
  animation?: Animation
}
