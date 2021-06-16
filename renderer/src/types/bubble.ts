export type Eyes = 'enjoy' | 'sleep' | 'afraid' | 'sunglass'
export type Clothes = 'coat' | null
export type Environments = 'home' | 'market'
export type Hats = 'cap' | null
export type Bodies = 'default'
export type Onomatopoeia = null

export interface BubbleConfigType {
  weight: {
    start: number
    min: number
    max: number
  }
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
    saturation: {
      default: number
      minDecrease: number
      maxDecrease: number
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
