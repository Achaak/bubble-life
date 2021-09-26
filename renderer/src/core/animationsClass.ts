import { AnimationList } from './animations'
import { Animation_Default } from './animations/default'
import { store } from '@src/redux/store'
import { AnimationConfig } from '@src/types/animation'
import anime from 'animejs'

export class Animations {
  currentAnimation: AnimationConfig | null

  constructor() {
    this.currentAnimation = null
  }

  update = (): void => {
    if (!this.currentAnimation && document.getElementById('bubble-content')) {
      this.onStartAnimation()
    }
  }

  onStartAnimation = (): void => {
    this.currentAnimation = Animation_Default

    const storeAnimation = store.getState().bubble.animation

    if (storeAnimation) {
      const animationFind = AnimationList.find((item) => item.name === storeAnimation.current)

      if (animationFind) {
        this.currentAnimation = animationFind
      }
    }

    this.onAnimation()
  }

  onEndAnimation = (): void => {
    this.currentAnimation = null
  }

  onAnimation = (): void => {
    const timeline = anime.timeline({
      autoplay: true,
    })

    for (let i = 0; i < this.currentAnimation.configs.length; i++) {
      const config = this.currentAnimation.configs[i]

      timeline.add({
        targets: '#bubble-content',
        ...config,
        complete:
          this.currentAnimation.configs.length - 1 === i ? () => this.onEndAnimation() : undefined,
      })
    }
  }
}
