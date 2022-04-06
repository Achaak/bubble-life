import type { User } from '@bubble/types'
import type { RootState } from '../../store'

export const selectCurrentUser = (state: RootState): User | null => state.controller.currentUser
