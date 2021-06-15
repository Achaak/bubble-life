import { Bubble } from '@configs/bubble'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bodies, Clothes, Environments, Eyes, Hats } from '@src/types/bubble'
import { RootState } from '../store'

// Define a type for the slice state
interface BlobState {
  name: string
  weight: number
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
}

// Define the initial state using that type
const initialState: BlobState = {
  name: 'Bubble',
  weight: Bubble.weight.start,
  eyes: Bubble.defaultElements.eyes,
  clothe: Bubble.defaultElements.clothe,
  environment: Bubble.defaultElements.environment,
  body: Bubble.defaultElements.body,
  hat: Bubble.defaultElements.hat,
}

export const blobSlice = createSlice({
  name: 'bubble',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    addWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload
    },
    /*
    
    export const addWeight: Action<{ value: number }> = ({ state }, { value }) => {
      const newWeight = state.bubble.weight + value
    
      state.bubble.weight = newWeight > Bubble.weight.max ? Bubble.weight.max : newWeight
    }
    
    export const removeWeight: Action<{ value: number }> = ({ state }, { value }) => {
      const newWeight = state.bubble.weight - value
    
      state.bubble.weight = newWeight < Bubble.weight.min ? Bubble.weight.min : newWeight
    }*/
  },
})

export const { incrementBlob, decrementBlob, incrementByAmountBlob } = blobSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.blob.value

export default blobSlice.reducer
