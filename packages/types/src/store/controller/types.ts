import type { User } from '../../user.js';

export interface ControllerState {
  name: string;
  currentUser: User | null;
}
