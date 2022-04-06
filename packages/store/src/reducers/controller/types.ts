import type { User } from '@bubble/types'

export interface ControllerState {
  name: string
  currentUser: User | null
}
