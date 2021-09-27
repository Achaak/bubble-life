import {
  AnimationtListItem,
  BodyElementListItem,
  BubbleState,
  ClotheElementListItem,
  EnvironmentElementListItem,
  EyesElementListItem,
  HatElementListItem,
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
export const removeEyesInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.eyes.list = state.elements.eyes.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortEyesInListReducer = (state: BubbleState): void => {
  state.elements.eyes.list = state.elements.eyes.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetEyesReducer = (state: BubbleState): void => {
  state.elements.eyes = initialBubbleState.elements.eyes
}
export const setCurrentEyesReducer = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
): void => {
  state.elements.eyes.current = action.payload
}
export const resetCurrentEyesReducer = (state: BubbleState): void => {
  state.elements.eyes.current = initialBubbleState.elements.eyes.default
}
export const transferEyesInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.eyes.list.length) return

  const newCurrent = state.elements.eyes.list[0]

  state.elements.eyes = {
    ...state.elements.eyes,
    current: newCurrent,
    list: state.elements.eyes.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInListReducer = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.list = [...state.elements.environment.list, action.payload]
}
export const removeEnvironmentInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.environment.list = state.elements.environment.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortEnvironmentsInListReducer = (state: BubbleState): void => {
  state.elements.environment.list = state.elements.environment.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetEnvironmentReducer = (state: BubbleState): void => {
  state.elements.environment = initialBubbleState.elements.environment
}
export const setCurrentEnvironmentReducer = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.current = action.payload
}
export const resetCurrentEnvironmentReducer = (state: BubbleState): void => {
  state.elements.environment.current = initialBubbleState.elements.environment.default
}
export const transferEnvironmentInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.environment.list.length) return

  const newCurrent = state.elements.environment.list[0]

  state.elements.environment = {
    ...state.elements.environment,
    current: newCurrent,
    list: state.elements.environment.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- CLOTHE ---------- */
export const addClotheInListReducer = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.list = [...state.elements.clothe.list, action.payload]
}
export const removeClotheInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.clothe.list = state.elements.clothe.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortClothesInListReducer = (state: BubbleState): void => {
  state.elements.clothe.list = state.elements.clothe.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetClotheReducer = (state: BubbleState): void => {
  state.elements.clothe = initialBubbleState.elements.clothe
}
export const setCurrentClotheReducer = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.current = action.payload
}
export const resetCurrentClotheReducer = (state: BubbleState): void => {
  state.elements.clothe.current = initialBubbleState.elements.clothe.default
}
export const transferClotheInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.clothe.list.length) return

  const newCurrent = state.elements.clothe.list[0]

  state.elements.clothe = {
    ...state.elements.clothe,
    current: newCurrent,
    list: state.elements.clothe.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- HAT ---------- */
export const addHatInListReducer = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.list = [...state.elements.hat.list, action.payload]
}
export const removeHatInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.hat.list = state.elements.hat.list.filter((item) => item.id !== action.payload.id)
}
export const sortHatsInListReducer = (state: BubbleState): void => {
  state.elements.hat.list = state.elements.hat.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetHatReducer = (state: BubbleState): void => {
  state.elements.hat = initialBubbleState.elements.hat
}
export const setCurrentHatReducer = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.current = action.payload
}
export const resetCurrentHatReducer = (state: BubbleState): void => {
  state.elements.hat.current = initialBubbleState.elements.hat.default
}
export const transferHatInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.hat.list.length) return

  const newCurrent = state.elements.hat.list[0]

  state.elements.hat = {
    ...state.elements.hat,
    current: newCurrent,
    list: state.elements.hat.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- BODY ---------- */
export const addBodyInListReducer = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.list = [...state.elements.body.list, action.payload]
}
export const removeBodyInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.body.list = state.elements.body.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortBodiesInListReducer = (state: BubbleState): void => {
  state.elements.body.list = state.elements.body.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetBodyReducer = (state: BubbleState): void => {
  state.elements.body = initialBubbleState.elements.body
}
export const setCurrentBodyReducer = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.current = action.payload
}
export const resetCurrentBodyReducer = (state: BubbleState): void => {
  state.elements.body.current = initialBubbleState.elements.body.default
}
export const transferBodyInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.body.list.length) return

  const newCurrent = state.elements.body.list[0]

  state.elements.body = {
    ...state.elements.body,
    current: newCurrent,
    list: state.elements.body.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInListReducer = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.list = [...state.elements.onomatopoeia.list, action.payload]
}
export const removeOnomatopoeiaInListReducer = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.onomatopoeia.list = state.elements.onomatopoeia.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortOnomatopoeiasInListReducer = (state: BubbleState): void => {
  state.elements.onomatopoeia.list = state.elements.onomatopoeia.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}
export const resetOnomatopoeiaReducer = (state: BubbleState): void => {
  state.elements.onomatopoeia = initialBubbleState.elements.onomatopoeia
}
export const setCurrentOnomatopoeiaReducer = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.current = action.payload
}
export const resetCurrentOnomatopoeiaReducer = (state: BubbleState): void => {
  state.elements.onomatopoeia.current = initialBubbleState.elements.onomatopoeia.default
}
export const transferOnomatopoeiaInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.onomatopoeia.list.length) return

  const newCurrent = state.elements.onomatopoeia.list[0]

  state.elements.onomatopoeia = {
    ...state.elements.onomatopoeia,
    current: newCurrent,
    list: state.elements.onomatopoeia.list.filter((item) => item.id !== newCurrent.id),
  }
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
export const sortAnimationsInListReducer = (state: BubbleState): void => {
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
export const setCurrentAnimationReducer = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.current = action.payload
}
export const resetCurrentAnimationReducer = (state: BubbleState): void => {
  state.animation.current = initialBubbleState.animation.default
}
export const transferAnimationInListToCurrentReducer = (state: BubbleState): void => {
  if (!state.elements.eyes.list.length) return

  const newCurrent = state.elements.eyes.list[0]

  state.elements.eyes = {
    ...state.elements.eyes,
    current: newCurrent,
    list: state.elements.eyes.list.filter((item) => item.id !== newCurrent.id),
  }
}
