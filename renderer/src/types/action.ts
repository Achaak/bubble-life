import { Animation } from './animation'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from './bubble'

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
  elements?: {
    eyes?: {
      id: string
      name: Eyes
    }
    clothe?: {
      id: string
      name: Clothes
    }
    environment?: {
      id: string
      name: Environments
    }
    hat?: {
      id: string
      name: Hats
    }
    body?: {
      id: string
      name: Bodies
    }
    onomatopoeia?: {
      id: string
      name: Onomatopoeia
    }
  }
  animation?: Animation
}
