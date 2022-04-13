import type { User } from '@/src/user.js'

export interface ControllerState {
  name: string
  currentUser: User | null
}
