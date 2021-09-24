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
      minDecrease: number
      maxDecrease: number
    }
    happiness: {
      default: number
      max: number
      minDecrease: number
      maxDecrease: number
    }
    tiredness: {
      default: number
      max: number
      minDecrease: number
      maxDecrease: number
    }
    health: {
      default: number
      max: number
      minDecrease: number
      maxDecrease: number
    }
  }
  activities: {
    sleep: {
      start: string
      duration: number
      margin: number
    }
    eat: {
      duration: number
      margin: number
      minWeightToAdd: number
      maxWeightToadd: number
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
}
