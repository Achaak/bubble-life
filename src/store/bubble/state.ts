import {
  ClotheDefault,
  EyesDefault,
  EnvironmentDefault,
  BodyDefault,
  HatDefault,
} from '@/config/bubble'
import { Bodies, Clothes, Environments, Eyes, Hats } from '@/types/bubble'

export type State = {
  name: string
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
}

export const state: State = {
  name: 'Bubble',
  eyes: EyesDefault,
  clothe: ClotheDefault,
  environment: EnvironmentDefault,
  body: BodyDefault,
  hat: HatDefault,
}
