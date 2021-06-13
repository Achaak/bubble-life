import { Bubble } from '@configs/bubble'
import { Action } from 'overmind'

export const setName: Action<{ name: string }> = ({ state }, { name }) => {
  state.bubble.name = name
}

export const setEyes: Action<{ type: string }> = ({ state }, { type }) => {
  state.bubble.name = type
}

export const addWeight: Action<{ value: number }> = ({ state }, { value }) => {
  const newWeight = state.bubble.weight + value

  state.bubble.weight = newWeight > Bubble.weight.max ? Bubble.weight.max : newWeight
}

export const removeWeight: Action<{ value: number }> = ({ state }, { value }) => {
  const newWeight = state.bubble.weight - value

  state.bubble.weight = newWeight < Bubble.weight.min ? Bubble.weight.min : newWeight
}
