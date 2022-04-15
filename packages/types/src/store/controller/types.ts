import type { User } from '../../user'

export interface ControllerState {
  name: string
  currentUser: User | null
}
