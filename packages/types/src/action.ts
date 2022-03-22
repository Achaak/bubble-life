import type { Animation } from './animation'
import type { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from './bubble'

export interface ActionElement {
  id?: string
}
export interface ActionElementEyes extends ActionElement {
  name: Eyes
}
export interface ActionElementClothe extends ActionElement {
  name: Clothes
}
export interface ActionElementEnvironment extends ActionElement {
  name: Environments
}
export interface ActionElementHat extends ActionElement {
  name: Hats
}
export interface ActionElementBody extends ActionElement {
  name: Bodies
}
export interface ActionElementOnomatopoeia extends ActionElement {
  name: Onomatopoeia
}

export interface ActionAnimation {
  id?: string
  name: Animation
}

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
    eyes?: ActionElementEyes
    clothe?: ActionElementClothe
    environment?: ActionElementEnvironment
    hat?: ActionElementHat
    body?: ActionElementBody
    onomatopoeia?: ActionElementOnomatopoeia
  }
  animation?: ActionAnimation
  memory?: {
    [key: string]: unknown
  }
}
