import { BubbleConfigType } from "@bubble/types/src/bubble";

export const BubbleConfig: BubbleConfigType = {
  vitals: {
    weight: {
      start: 20,
      min: 5,
      max: 50,
    },
    saturation: {
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
    happiness: {
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
    tiredness: {
      default: 86400,
      max: 86400,
      decrease: 1, // Every 1s
    },
    health: {
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
  },
  actions: {
    sleep: {
      startAt: "00:00", // HH:mm
      duration: 540, // Minutes
      durationMargin: 30, // Minutes
    },
    nap: {
      duration: 20, // Minutes
      durationMargin: 5, // Minutes
      recover: 0.2, // Between 0 and 1
      recoverMargin: 0.05, // Between 0 and 1
    },
    eat: {
      duration: 20, // Minutes
      durationMargin: 5, // Minutes
      minWeightToAdd: 1, // kilogram
      maxWeightToadd: 2, // kilogram
    },
    shopping: {
      duration: 20, // minutes
      durationMargin: 5, // minutes
    },
    play: {
      duration: 10, // minutes
      durationMargin: 5, // minutes
      recover: 0.5, // Between 0 and 1
      recoverMargin: 0.1, // Between 0 and 1
    },
  },
  defaultElements: {
    eyes: "enjoy",
    clothe: null,
    environment: "home",
    hat: null,
    body: "default",
    onomatopoeia: null,
  },
  defaultInventory: [
    {
      type: "food",
      stock: 1,
    },
  ],
};
