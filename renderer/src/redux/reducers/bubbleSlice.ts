import { BubbleConfig } from '@configs/bubble'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from '@src/types/bubble'
import { RootState } from '../store'

// Define a type for the slice state
interface BubbleState {
  name: string
  weight: number
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
  onomatopoeia: Onomatopoeia
}

// Define the initial state using that type
const initialState: BubbleState = {
  name: 'Bubble',
  weight: BubbleConfig.weight.start,
  eyes: BubbleConfig.defaultElements.eyes,
  clothe: BubbleConfig.defaultElements.clothe,
  environment: BubbleConfig.defaultElements.environment,
  body: BubbleConfig.defaultElements.body,
  hat: BubbleConfig.defaultElements.hat,
  onomatopoeia: BubbleConfig.defaultElements.onomatopoeia,
}

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ value: string }>) => {
      state.name = action.payload.value
    },

    setEyes: (state, action: PayloadAction<{ value: Eyes }>) => {
      state.eyes = action.payload.value
    },
    resetEyes: (state) => {
      state.eyes = BubbleConfig.defaultElements.eyes
    },

    setEnvironment: (state, action: PayloadAction<{ value: Environments }>) => {
      state.environment = action.payload.value
    },
    resetEnvironment: (state) => {
      state.environment = BubbleConfig.defaultElements.environment
    },

    setClothe: (state, action: PayloadAction<{ value: Clothes }>) => {
      state.clothe = action.payload.value
    },
    resetClothe: (state) => {
      state.clothe = BubbleConfig.defaultElements.clothe
    },

    setHat: (state, action: PayloadAction<{ value: Hats }>) => {
      state.hat = action.payload.value
    },
    resetHat: (state) => {
      state.hat = BubbleConfig.defaultElements.hat
    },

    setBody: (state, action: PayloadAction<{ value: Bodies }>) => {
      state.body = action.payload.value
    },
    resetBody: (state) => {
      state.body = BubbleConfig.defaultElements.body
    },

    setOnomatopoeia: (state, action: PayloadAction<{ value: Onomatopoeia }>) => {
      state.body = action.payload.value
    },
    resetOnomatopoeia: (state) => {
      state.body = BubbleConfig.defaultElements.onomatopoeia
    },

    addWeight: (state, action: PayloadAction<{ value: number }>) => {
      const newWeight = state.weight + action.payload.value

      state.weight = newWeight > BubbleConfig.weight.max ? BubbleConfig.weight.max : newWeight
    },
    removeWeight: (state, action: PayloadAction<{ value: number }>) => {
      const newWeight = state.weight - action.payload.value

      state.weight = newWeight < BubbleConfig.weight.min ? BubbleConfig.weight.min : newWeight
    },
  },
})

export const {
  setName,
  addWeight,
  removeWeight,
  setBody,
  setClothe,
  setEnvironment,
  setEyes,
  setHat,
  resetBody,
  resetClothe,
  resetEnvironment,
  resetEyes,
  resetHat,
  resetOnomatopoeia,
  setOnomatopoeia,
} = bubbleSlice.actions

export const selectWeight = (state: RootState) => state.bubble.weight
export const selectName = (state: RootState) => state.bubble.name
export const selectEyes = (state: RootState) => state.bubble.eyes
export const selectClothe = (state: RootState) => state.bubble.clothe
export const selectEnvironment = (state: RootState) => state.bubble.environment
export const selectBody = (state: RootState) => state.bubble.body
export const selectHat = (state: RootState) => state.bubble.hat

export default bubbleSlice.reducer
