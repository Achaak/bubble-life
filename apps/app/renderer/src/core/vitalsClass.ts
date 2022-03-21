import { VitalsList } from './vitals'
import type { Vital } from './vitals/vital'

export class Vitals {
  vitals: {
    name: string
    class: Vital
  }[]

  constructor() {
    this.vitals = []

    this.initVitalsList()
  }

  initVitalsList = (): void => {
    for (const V of VitalsList) {
      const v = new V()

      this.vitals.push({
        name: v.name,
        class: v,
      })
    }
  }

  update = (timestamp: number): void => {
    for (const vital of this.vitals) {
      vital.class.update(timestamp)
    }
  }
}
