import { VitalsList } from './vitals'
import { Vital } from './vitals/vital'

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
    for (const _Vital of VitalsList) {
      const _vital = new _Vital()

      this.vitals.push({
        name: _vital.name,
        class: _vital,
      })
    }
  }

  update = (timestamp: number): void => {
    for (const vital of this.vitals) {
      vital.class.update(timestamp)
    }
  }
}
