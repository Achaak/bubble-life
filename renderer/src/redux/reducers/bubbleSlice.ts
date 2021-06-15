import { Bubble } from '@configs/bubble'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bodies, Clothes, Environments, Eyes, Hats } from '@src/types/bubble'

// Define a type for the slice state
interface BubbleState {
  name: string
  weight: number
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
}

// Define the initial state using that type
const initialState: BubbleState = {
  name: 'Bubble',
  weight: Bubble.weight.start,
  eyes: Bubble.defaultElements.eyes,
  clothe: Bubble.defaultElements.clothe,
  environment: Bubble.defaultElements.environment,
  body: Bubble.defaultElements.body,
  hat: Bubble.defaultElements.hat,
}

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ value: string }>) => {
      state.name = action.payload.value
    },
    addWeight: (state, action: PayloadAction<{ value: number }>) => {
      const newWeight = state.weight + action.payload.value

      state.weight = newWeight > Bubble.weight.max ? Bubble.weight.max : newWeight
    },
    removeWeight: (state, action: PayloadAction<{ value: number }>) => {
      const newWeight = state.weight - action.payload.value

      state.weight = newWeight < Bubble.weight.min ? Bubble.weight.min : newWeight
    },
  },
})

export const { setName, addWeight, removeWeight } = bubbleSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.bubble.value

export default bubbleSlice.reducer
