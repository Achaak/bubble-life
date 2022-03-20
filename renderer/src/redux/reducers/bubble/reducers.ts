import {
  AnimationtListItem,
  BodyElementListItem,
  BubbleState,
  ClotheElementListItem,
  EnvironmentElementListItem,
  EyesElementListItem,
  HatElementListItem,
  initialBubbleState,
  InventoryItemType,
  OnomatopoeiaElementListItem,
} from './state'
import { BubbleConfig } from '@configs/bubble'
import { PayloadAction } from '@reduxjs/toolkit'

export const resetBubble = (state: BubbleState): void => {
  for (const key in state) {
    delete state[key]
  }

  state.vitals = initialBubbleState.vitals
  state.elements = initialBubbleState.elements
  state.name = initialBubbleState.name
  state.animation = initialBubbleState.animation
  state.inventory = initialBubbleState.inventory
}

export const setName = (state: BubbleState, action: PayloadAction<string>): void => {
  state.name = action.payload
}

/* -------------------- VITALS -------------------- */
/* ---------- WEIGHT ---------- */
export const setWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < BubbleConfig.vitals.weight.min) {
    state.vitals.weight = BubbleConfig.vitals.weight.min
  } else if (action.payload > BubbleConfig.vitals.weight.max) {
    state.vitals.weight = BubbleConfig.vitals.weight.max
  } else {
    state.vitals.weight = action.payload
  }
}
export const addWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight + action.payload

  state.vitals.weight =
    newValue > BubbleConfig.vitals.weight.max ? BubbleConfig.vitals.weight.max : newValue
}
export const removeWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight - action.payload

  state.vitals.weight =
    newValue < BubbleConfig.vitals.weight.min ? BubbleConfig.vitals.weight.min : newValue
}
export const resetWeight = (state: BubbleState): void => {
  state.vitals.weight = BubbleConfig.vitals.weight.start
}

/* ---------- SATURATION ---------- */
export const setSaturation = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.saturation = 0
  } else if (action.payload > BubbleConfig.vitals.saturation.max) {
    state.vitals.saturation = BubbleConfig.vitals.saturation.max
  } else {
    state.vitals.saturation = action.payload
  }
}
export const addSaturation = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.saturation + action.payload

  state.vitals.saturation =
    newValue > BubbleConfig.vitals.saturation.max ? BubbleConfig.vitals.saturation.max : newValue
}
export const removeSaturation = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.saturation - action.payload

  state.vitals.saturation = newValue < 0 ? 0 : newValue
}
export const resetSaturation = (state: BubbleState): void => {
  state.vitals.saturation = BubbleConfig.vitals.saturation.default
}

/* ---------- HAPPINESS ---------- */
export const setHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.happiness = 0
  } else if (action.payload > BubbleConfig.vitals.happiness.max) {
    state.vitals.happiness = BubbleConfig.vitals.happiness.max
  } else {
    state.vitals.happiness = action.payload
  }
}
export const addHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness + action.payload

  state.vitals.happiness =
    newValue > BubbleConfig.vitals.happiness.max ? BubbleConfig.vitals.happiness.max : newValue
}
export const removeHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness - action.payload

  state.vitals.happiness = newValue < 0 ? 0 : newValue
}
export const resetHappiness = (state: BubbleState): void => {
  state.vitals.happiness = BubbleConfig.vitals.happiness.default
}

/* ---------- TIREDNESS ---------- */
export const setTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.tiredness = 0
  } else if (action.payload > BubbleConfig.vitals.tiredness.max) {
    state.vitals.tiredness = BubbleConfig.vitals.tiredness.max
  } else {
    state.vitals.tiredness = action.payload
  }
}
export const addTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness + action.payload

  state.vitals.tiredness =
    newValue > BubbleConfig.vitals.tiredness.max ? BubbleConfig.vitals.tiredness.max : newValue
}
export const removeTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness - action.payload

  state.vitals.tiredness = newValue < 0 ? 0 : newValue
}
export const resetTiredness = (state: BubbleState): void => {
  state.vitals.tiredness = BubbleConfig.vitals.tiredness.default
}

/* ---------- HEALTH ---------- */
export const setHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.health = 0
  } else if (action.payload > BubbleConfig.vitals.health.max) {
    state.vitals.health = BubbleConfig.vitals.health.max
  } else {
    state.vitals.health = action.payload
  }
}
export const addHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health + action.payload

  state.vitals.health =
    newValue > BubbleConfig.vitals.health.max ? BubbleConfig.vitals.health.max : newValue
}
export const removeHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health - action.payload

  state.vitals.health = newValue < 0 ? 0 : newValue
}
export const resetHealth = (state: BubbleState): void => {
  state.vitals.health = BubbleConfig.vitals.health.default
}

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
export const addEyesInList = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
): void => {
  state.elements.eyes.list = [...state.elements.eyes.list, action.payload]
}
export const removeEyesInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.eyes.list = state.elements.eyes.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortEyesInList = (state: BubbleState): void => {
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
export const resetEyes = (state: BubbleState): void => {
  state.elements.eyes = initialBubbleState.elements.eyes
}
export const setCurrentEyes = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
): void => {
  state.elements.eyes.current = action.payload
}
export const resetCurrentEyes = (state: BubbleState): void => {
  state.elements.eyes.current = initialBubbleState.elements.eyes.default
}
export const transferEyesInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.eyes.list.length) return

  const newCurrent = state.elements.eyes.list[0]

  state.elements.eyes = {
    ...state.elements.eyes,
    current: newCurrent,
    list: state.elements.eyes.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInList = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.list = [...state.elements.environment.list, action.payload]
}
export const removeEnvironmentInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.environment.list = state.elements.environment.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortEnvironmentsInList = (state: BubbleState): void => {
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
export const resetEnvironment = (state: BubbleState): void => {
  state.elements.environment = initialBubbleState.elements.environment
}
export const setCurrentEnvironment = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.current = action.payload
}
export const resetCurrentEnvironment = (state: BubbleState): void => {
  state.elements.environment.current = initialBubbleState.elements.environment.default
}
export const transferEnvironmentInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.environment.list.length) return

  const newCurrent = state.elements.environment.list[0]

  state.elements.environment = {
    ...state.elements.environment,
    current: newCurrent,
    list: state.elements.environment.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- CLOTHE ---------- */
export const addClotheInList = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.list = [...state.elements.clothe.list, action.payload]
}
export const removeClotheInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.clothe.list = state.elements.clothe.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortClothesInList = (state: BubbleState): void => {
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
export const resetClothe = (state: BubbleState): void => {
  state.elements.clothe = initialBubbleState.elements.clothe
}
export const setCurrentClothe = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.current = action.payload
}
export const resetCurrentClothe = (state: BubbleState): void => {
  state.elements.clothe.current = initialBubbleState.elements.clothe.default
}
export const transferClotheInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.clothe.list.length) return

  const newCurrent = state.elements.clothe.list[0]

  state.elements.clothe = {
    ...state.elements.clothe,
    current: newCurrent,
    list: state.elements.clothe.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- HAT ---------- */
export const addHatInList = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.list = [...state.elements.hat.list, action.payload]
}
export const removeHatInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.hat.list = state.elements.hat.list.filter((item) => item.id !== action.payload.id)
}
export const sortHatsInList = (state: BubbleState): void => {
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
export const resetHat = (state: BubbleState): void => {
  state.elements.hat = initialBubbleState.elements.hat
}
export const setCurrentHat = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.current = action.payload
}
export const resetCurrentHat = (state: BubbleState): void => {
  state.elements.hat.current = initialBubbleState.elements.hat.default
}
export const transferHatInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.hat.list.length) return

  const newCurrent = state.elements.hat.list[0]

  state.elements.hat = {
    ...state.elements.hat,
    current: newCurrent,
    list: state.elements.hat.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- BODY ---------- */
export const addBodyInList = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.list = [...state.elements.body.list, action.payload]
}
export const removeBodyInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.body.list = state.elements.body.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortBodiesInList = (state: BubbleState): void => {
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
export const resetBody = (state: BubbleState): void => {
  state.elements.body = initialBubbleState.elements.body
}
export const setCurrentBody = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.current = action.payload
}
export const resetCurrentBody = (state: BubbleState): void => {
  state.elements.body.current = initialBubbleState.elements.body.default
}
export const transferBodyInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.body.list.length) return

  const newCurrent = state.elements.body.list[0]

  state.elements.body = {
    ...state.elements.body,
    current: newCurrent,
    list: state.elements.body.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInList = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.list = [...state.elements.onomatopoeia.list, action.payload]
}
export const removeOnomatopoeiaInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.onomatopoeia.list = state.elements.onomatopoeia.list.filter(
    (item) => item.id !== action.payload.id
  )
}
export const sortOnomatopoeiasInList = (state: BubbleState): void => {
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
export const resetOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia = initialBubbleState.elements.onomatopoeia
}
export const setCurrentOnomatopoeia = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.current = action.payload
}
export const resetCurrentOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia.current = initialBubbleState.elements.onomatopoeia.default
}
export const transferOnomatopoeiaInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.onomatopoeia.list.length) return

  const newCurrent = state.elements.onomatopoeia.list[0]

  state.elements.onomatopoeia = {
    ...state.elements.onomatopoeia,
    current: newCurrent,
    list: state.elements.onomatopoeia.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInList = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.list = [...state.animation.list, action.payload]
}
export const removeAnimationInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.animation.list = state.animation.list.filter((item) => item.id !== action.payload.id)
}
export const sortAnimationsInList = (state: BubbleState): void => {
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
export const resetAnimation = (state: BubbleState): void => {
  state.animation = initialBubbleState.animation
}
export const setCurrentAnimation = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.current = action.payload
}
export const resetCurrentAnimation = (state: BubbleState): void => {
  state.animation.current = initialBubbleState.animation.default
}
export const transferAnimationInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.eyes.list.length) return

  const newCurrent = state.elements.eyes.list[0]

  state.elements.eyes = {
    ...state.elements.eyes,
    current: newCurrent,
    list: state.elements.eyes.list.filter((item) => item.id !== newCurrent.id),
  }
}

/* -------------------- INVENTORY -------------------- */
export const addInventoryItem = (
  state: BubbleState,
  action: PayloadAction<{
    type: InventoryItemType
    number: number
  }>
): void => {
  // If inventory item exist
  if (state.inventory.some((item) => item.type === action.payload.type)) {
    state.inventory = state.inventory.map((item) => {
      if (item.type === action.payload.type) {
        return {
          ...item,
          stock: item.stock + action.payload.number,
        }
      }

      return item
    })
  } else {
    // If inventory item not exist
    state.inventory = [
      ...state.inventory,
      {
        stock: action.payload.number,
        type: action.payload.type,
      },
    ]
  }
}
export const removeInventoryItem = (
  state: BubbleState,
  action: PayloadAction<{
    type: InventoryItemType
    number: number
  }>
): void => {
  // Remove stock
  state.inventory = state.inventory.map((item) => {
    if (item.type === action.payload.type) {
      return {
        ...item,
        stock: item.stock - action.payload.number,
      }
    }

    return item
  })

  // Remove stock under 0
  state.inventory = state.inventory.filter((item) => {
    return item.stock > 0
  })
}
