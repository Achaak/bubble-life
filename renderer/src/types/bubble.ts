import { InventoryItem } from '@src/redux/reducers/bubble/state'

export type Eyes = 'enjoy' | 'sleep' | 'afraid' | 'sunglass'
export type Clothes = 'coat' | null
export type Environments = 'home' | 'market'
export type Hats = 'cap' | null
export type Bodies = 'default'
export type Onomatopoeia = 'sleep' | 'eat' | null

export interface BubbleConfigType {
  vitals: {
    weight: {
      start: number
      min: number
      max: number
    }
    saturation: {
      default: number
      max: number
      decrease: number
    }
    happiness: {
      default: number
      max: number
      decrease: number
    }
    tiredness: {
      default: number
      max: number
      decrease: number
    }
    health: {
      default: number
      max: number
      decrease: number
    }
  }
  actions: {
    sleep: {
      startAt: string
      duration: number
      durationMargin: number
    }
    nap: {
      duration: number
      durationMargin: number
      recover: number
      recoverMargin: number
    }
    eat: {
      duration: number
      durationMargin: number
      minWeightToAdd: number
      maxWeightToadd: number
    }
    shopping: {
      duration: number
      durationMargin: number
    }
  }
  defaultElements: {
    eyes: Eyes
    clothe: Clothes
    environment: Environments
    hat: Hats
    body: Bodies
    onomatopoeia: Onomatopoeia
  }
  defaultInventory: InventoryItem[]
}
