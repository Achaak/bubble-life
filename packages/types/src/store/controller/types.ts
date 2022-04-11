import type { User } from '@/src/user'

export interface ControllerState {
  name: string
  currentUser: User | null
}
