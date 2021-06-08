import { ClotheDefault, EyesDefault, EnvironmentDefault } from '@/config/bubble'
import { Clothes, Environments, Eyes } from '@/types/bubble'

export type State = {
  name: string
  eyes: Eyes
  environment: Environments
  clothes: Clothes
}

export const state: State = {
  name: 'Bubble',
  eyes: EyesDefault,
  clothes: ClotheDefault,
  environment: EnvironmentDefault,
}
