import type { AnimationConfig } from '@bubble/types/src/animation'
import { store } from '@src/redux/store'
import anime from 'animejs'
import { AnimationList } from './animations'
import { AnimationDefault } from './animations/default'

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
    const storeAnimation = store.getState().bubble.animation
    const animationFind = AnimationList.find((item) => item.name === storeAnimation.current?.name)

    if (animationFind) {
      this.currentAnimation = animationFind
    } else {
      this.currentAnimation = AnimationDefault
    }

    this.onAnimation()
  }

  onEndAnimation = (): void => {
    this.currentAnimation = null
  }

  onAnimation = (): void => {
    if (!this.currentAnimation) {
      return
    }

    const timeline = anime.timeline({
      autoplay: true,
    })

    for (let i = 0; i < this.currentAnimation.configs.length; i++) {
      const config = this.currentAnimation.configs[i]

      timeline.add({
        targets: '#bubble-content',
        ...config,
        complete:
          this.currentAnimation.configs.length - 1 === i
            ? (): void => this.onEndAnimation()
            : undefined,
      })
    }
  }
}
