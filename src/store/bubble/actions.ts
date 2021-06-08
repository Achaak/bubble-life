import { Action } from 'overmind'

export const setName: Action<{ name: string }> = ({ state }, { name }) => {
  state.bubble.name = name
}

export const setEyes: Action<{ type: string }> = ({ state }, { type }) => {
  state.bubble.name = type
}
