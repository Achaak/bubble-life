import {
  AnimationtListItem,
  BodiesElementListItem,
  BubbleState,
  ClothesElementListItem,
  EnvironmentsElementListItem,
  EyesElementListItem,
  HatsElementListItem,
  initialBubbleState,
  OnomatopoeiaElementListItem,
} from './state'
import { BubbleConfig } from '@configs/bubble'
import { PayloadAction } from '@reduxjs/toolkit'

export const resetBubbleReducer = (state: BubbleState): void => {
  for (const key in state) {
    delete state[key]
  }

  state.vitals = initialBubbleState.vitals
  state.elements = initialBubbleState.elements
  state.name = initialBubbleState.name
  state.animation = initialBubbleState.animation
}

export const setNameReducer = (state: BubbleState, action: PayloadAction<string>): void => {
  state.name = action.payload
}

/* -------------------- VITALS -------------------- */
/* ---------- WEIGHT ---------- */
export const setWeightReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.weight = 0
  } else if (action.payload > BubbleConfig.vitals.weight.max) {
    state.vitals.weight = BubbleConfig.vitals.weight.max
  } else {
    state.vitals.weight = action.payload
  }
}
export const addWeightReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight + action.payload

  state.vitals.weight =
    newValue > BubbleConfig.vitals.weight.max ? BubbleConfig.vitals.weight.max : newValue
}
export const removeWeightReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight - action.payload

  state.vitals.weight =
    newValue < BubbleConfig.vitals.weight.min ? BubbleConfig.vitals.weight.min : newValue
}
export const resetWeightReducer = (state: BubbleState): void => {
  state.vitals.weight = BubbleConfig.vitals.weight.start
}

/* ---------- SATURATION ---------- */
export const setSaturationReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.saturation = 0
  } else if (action.payload > BubbleConfig.vitals.saturation.max) {
    state.vitals.saturation = BubbleConfig.vitals.saturation.max
  } else {
    state.vitals.saturation = action.payload
  }
}
export const addSaturationReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.saturation + action.payload

  state.vitals.saturation =
    newValue > BubbleConfig.vitals.saturation.max ? BubbleConfig.vitals.saturation.max : newValue
}
export const removeSaturationReducer = (
  state: BubbleState,
  action: PayloadAction<number>
): void => {
  const newValue = state.vitals.saturation - action.payload

  state.vitals.saturation = newValue < 0 ? 0 : newValue
}
export const resetSaturationReducer = (state: BubbleState): void => {
  state.vitals.saturation = BubbleConfig.vitals.saturation.default
}

/* ---------- HAPPINESS ---------- */
export const setHappinessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.happiness = 0
  } else if (action.payload > BubbleConfig.vitals.happiness.max) {
    state.vitals.happiness = BubbleConfig.vitals.happiness.max
  } else {
    state.vitals.happiness = action.payload
  }
}
export const addHappinessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness + action.payload

  state.vitals.happiness =
    newValue > BubbleConfig.vitals.happiness.max ? BubbleConfig.vitals.happiness.max : newValue
}
export const removeHappinessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness - action.payload

  state.vitals.happiness = newValue < 0 ? 0 : newValue
}
export const resetHappinessReducer = (state: BubbleState): void => {
  state.vitals.happiness = BubbleConfig.vitals.happiness.default
}

/* ---------- TIREDNESS ---------- */
export const setTirednessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.tiredness = 0
  } else if (action.payload > BubbleConfig.vitals.tiredness.max) {
    state.vitals.tiredness = BubbleConfig.vitals.tiredness.max
  } else {
    state.vitals.tiredness = action.payload
  }
}
export const addTirednessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness + action.payload

  state.vitals.tiredness =
    newValue > BubbleConfig.vitals.tiredness.max ? BubbleConfig.vitals.tiredness.max : newValue
}
export const removeTirednessReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness - action.payload

  state.vitals.tiredness = newValue < 0 ? 0 : newValue
}
export const resetTirednessReducer = (state: BubbleState): void => {
  state.vitals.tiredness = BubbleConfig.vitals.tiredness.default
}

/* ---------- HEALTH ---------- */
export const setHealthReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.health = 0
  } else if (action.payload > BubbleConfig.vitals.health.max) {
    state.vitals.health = BubbleConfig.vitals.health.max
  } else {
    state.vitals.health = action.payload
  }
}
export const addHealthReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health + action.payload

  state.vitals.health =
    newValue > BubbleConfig.vitals.health.max ? BubbleConfig.vitals.health.max : newValue
}
export const removeHealthReducer = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health - action.payload

  state.vitals.health = newValue < 0 ? 0 : newValue
}
export const resetHealthReducer = (state: BubbleState): void => {
  state.vitals.health = BubbleConfig.vitals.health.default
}

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
export const addEyesInListReducer = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
): void => {
  state.elements.eyes.list = [...state.elements.eyes.list, action.payload]
}
export const resetEyesReducer = (state: BubbleState): void => {
  state.elements.eyes = initialBubbleState.elements.eyes
}

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInListReducer = (
  state: BubbleState,
  action: PayloadAction<EnvironmentsElementListItem>
): void => {
  state.elements.environment.list = [...state.elements.environment.list, action.payload]
}
export const resetEnvironmentReducer = (state: BubbleState): void => {
  state.elements.environment = initialBubbleState.elements.environment
}

/* ---------- CLOTHE ---------- */
export const addClotheInListReducer = (
  state: BubbleState,
  action: PayloadAction<ClothesElementListItem>
): void => {
  state.elements.clothe.list = [...state.elements.clothe.list, action.payload]
}
export const resetClotheReducer = (state: BubbleState): void => {
  state.elements.clothe = initialBubbleState.elements.clothe
}

/* ---------- HAT ---------- */
export const addHatInListReducer = (
  state: BubbleState,
  action: PayloadAction<HatsElementListItem>
): void => {
  state.elements.hat.list = [...state.elements.hat.list, action.payload]
}
export const resetHatReducer = (state: BubbleState): void => {
  state.elements.hat = initialBubbleState.elements.hat
}

/* ---------- BODY ---------- */
export const addBodyInListReducer = (
  state: BubbleState,
  action: PayloadAction<BodiesElementListItem>
): void => {
  state.elements.body.list = [...state.elements.body.list, action.payload]
}
export const resetBodyReducer = (state: BubbleState): void => {
  state.elements.body = initialBubbleState.elements.body
}

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInListReducer = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.list = [...state.elements.onomatopoeia.list, action.payload]
}
export const resetOnomatopoeiaReducer = (state: BubbleState): void => {
  state.elements.onomatopoeia = initialBubbleState.elements.onomatopoeia
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInListReducer = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.list = [...state.animation.list, action.payload]
}
export const removeAnimationInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.animation.list = state.animation.list.filter((item) => item.id !== action.payload.id)
}
export const sortAnimationReducer = (state: BubbleState): void => {
  state.animation.list = state.animation.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetAnimationReducer = (state: BubbleState): void => {
  state.animation = initialBubbleState.animation
}
