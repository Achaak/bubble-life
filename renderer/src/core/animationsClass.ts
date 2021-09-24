import { AnimationList } from './animations'
import { Animation_Default } from './animations/default'
import { store } from '@src/redux/store'
import { AnimationConfig } from '@src/types/animation'
import anime from 'animejs'

export class Animations {
  actualAnimation: AnimationConfig | null

  constructor() {
    this.actualAnimation = null
  }

  update = (): void => {
    if (!this.actualAnimation && document.getElementById('bubble-content')) {
      this.onStartAnimation()
    }
  }

  onStartAnimation = (): void => {
    this.actualAnimation = Animation_Default

    const storeAnimation = store.getState().bubble.animationList?.[0]

    if (storeAnimation) {
      const animationFind = AnimationList.find((item) => item.name === storeAnimation.name)

      if (animationFind) {
        this.actualAnimation = animationFind
      }
    }

    this.onAnimation()
  }

  onEndAnimation = (): void => {
    this.actualAnimation = null
  }

  onAnimation = (): void => {
    const timeline = anime.timeline({
      autoplay: true,
    })

    for (let i = 0; i < this.actualAnimation.configs.length; i++) {
      const config = this.actualAnimation.configs[i]

      timeline.add({
        targets: '#bubble-content',
        ...config,
        complete:
          this.actualAnimation.configs.length - 1 === i ? () => this.onEndAnimation() : undefined,
      })
    }
  }
}
