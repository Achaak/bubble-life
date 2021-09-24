import { BubbleState, initialBubbleState } from './state'
import { BubbleConfig } from '@configs/bubble'
import { PayloadAction } from '@reduxjs/toolkit'
import { Animation } from '@src/types/animation'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from '@src/types/bubble'

export const resetBubbleReducer = (state: BubbleState): void => {
  state.vitals = initialBubbleState.vitals
  state.elements = initialBubbleState.elements
  state.name = initialBubbleState.name
  state.animationList = initialBubbleState.animationList
}

export const setNameReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: string }>
): void => {
  state.name = action.payload.value
}

/* -------------------- VITALS -------------------- */
/* ---------- WEIGHT ---------- */
export const setWeightReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.weight = 0
  } else if (action.payload.value > BubbleConfig.vitals.weight.max) {
    state.vitals.weight = BubbleConfig.vitals.weight.max
  } else {
    state.vitals.weight = action.payload.value
  }
}
export const addWeightReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.weight + action.payload.value

  state.vitals.weight =
    newValue > BubbleConfig.vitals.weight.max ? BubbleConfig.vitals.weight.max : newValue
}
export const removeWeightReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.weight - action.payload.value

  state.vitals.weight =
    newValue < BubbleConfig.vitals.weight.min ? BubbleConfig.vitals.weight.min : newValue
}
export const resetWeightReducer = (state: BubbleState): void => {
  state.vitals.weight = BubbleConfig.vitals.weight.start
}

/* ---------- SATURATION ---------- */
export const setSaturationReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.saturation = 0
  } else if (action.payload.value > BubbleConfig.vitals.saturation.max) {
    state.vitals.saturation = BubbleConfig.vitals.saturation.max
  } else {
    state.vitals.saturation = action.payload.value
  }
}
export const addSaturationReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.saturation + action.payload.value

  state.vitals.saturation =
    newValue > BubbleConfig.vitals.saturation.max ? BubbleConfig.vitals.saturation.max : newValue
}
export const removeSaturationReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.saturation - action.payload.value

  state.vitals.saturation = newValue < 0 ? 0 : newValue
}
export const resetSaturationReducer = (state: BubbleState): void => {
  state.vitals.saturation = BubbleConfig.vitals.saturation.default
}

/* ---------- HAPPINESS ---------- */
export const setHappinessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.happiness = 0
  } else if (action.payload.value > BubbleConfig.vitals.happiness.max) {
    state.vitals.happiness = BubbleConfig.vitals.happiness.max
  } else {
    state.vitals.happiness = action.payload.value
  }
}
export const addHappinessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.happiness + action.payload.value

  state.vitals.happiness =
    newValue > BubbleConfig.vitals.happiness.max ? BubbleConfig.vitals.happiness.max : newValue
}
export const removeHappinessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.happiness - action.payload.value

  state.vitals.happiness = newValue < 0 ? 0 : newValue
}
export const resetHappinessReducer = (state: BubbleState): void => {
  state.vitals.happiness = BubbleConfig.vitals.happiness.default
}

/* ---------- TIREDNESS ---------- */
export const setTirednessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.tiredness = 0
  } else if (action.payload.value > BubbleConfig.vitals.tiredness.max) {
    state.vitals.tiredness = BubbleConfig.vitals.tiredness.max
  } else {
    state.vitals.tiredness = action.payload.value
  }
}
export const addTirednessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.tiredness + action.payload.value

  state.vitals.tiredness =
    newValue > BubbleConfig.vitals.tiredness.max ? BubbleConfig.vitals.tiredness.max : newValue
}
export const removeTirednessReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.tiredness - action.payload.value

  state.vitals.tiredness = newValue < 0 ? 0 : newValue
}
export const resetTirednessReducer = (state: BubbleState): void => {
  state.vitals.tiredness = BubbleConfig.vitals.tiredness.default
}

/* ---------- HEALTH ---------- */
export const setHealthReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.health = 0
  } else if (action.payload.value > BubbleConfig.vitals.health.max) {
    state.vitals.health = BubbleConfig.vitals.health.max
  } else {
    state.vitals.health = action.payload.value
  }
}
export const addHealthReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.health + action.payload.value

  state.vitals.health =
    newValue > BubbleConfig.vitals.health.max ? BubbleConfig.vitals.health.max : newValue
}
export const removeHealthReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.health - action.payload.value

  state.vitals.health = newValue < 0 ? 0 : newValue
}
export const resetHealthReducer = (state: BubbleState): void => {
  state.vitals.health = BubbleConfig.vitals.health.default
}

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
export const setEyesReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: Eyes }>
): void => {
  state.elements.eyes = action.payload.value
}
export const resetEyesReducer = (state: BubbleState): void => {
  state.elements.eyes = BubbleConfig.defaultElements.eyes
}

/* ---------- ENVIRONMENT ---------- */
export const setEnvironmentReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: Environments }>
): void => {
  state.elements.environment = action.payload.value
}
export const resetEnvironmentReducer = (state: BubbleState): void => {
  state.elements.environment = BubbleConfig.defaultElements.environment
}

/* ---------- CLOTHE ---------- */
export const setClotheReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: Clothes }>
): void => {
  state.elements.clothe = action.payload.value
}
export const resetClotheReducer = (state: BubbleState): void => {
  state.elements.clothe = BubbleConfig.defaultElements.clothe
}

/* ---------- HAT ---------- */
export const setHatReducer = (state: BubbleState, action: PayloadAction<{ value: Hats }>): void => {
  state.elements.hat = action.payload.value
}
export const resetHatReducer = (state: BubbleState): void => {
  state.elements.hat = BubbleConfig.defaultElements.hat
}

/* ---------- BODY ---------- */
export const setBodyReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: Bodies }>
): void => {
  state.elements.body = action.payload.value
}
export const resetBodyReducer = (state: BubbleState): void => {
  state.elements.body = BubbleConfig.defaultElements.body
}

/* ---------- ONOMATOPOEIA ---------- */
export const setOnomatopoeiaReducer = (
  state: BubbleState,
  action: PayloadAction<{ value: Onomatopoeia }>
): void => {
  state.elements.onomatopoeia = action.payload.value
}
export const resetOnomatopoeiaReducer = (state: BubbleState): void => {
  state.elements.onomatopoeia = BubbleConfig.defaultElements.onomatopoeia
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ animation: Animation }>
): void => {
  state.animationList = [...state.animationList, action.payload.animation]
}
export const removeAnimationInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.animationList = state.animationList.filter((item) => item.id !== action.payload.id)
}
export const sortAnimationReducer = (state: BubbleState): void => {
  state.animationList = state.animationList.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
