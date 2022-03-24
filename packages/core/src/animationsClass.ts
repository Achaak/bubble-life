import { getBubble } from '@bubble/store'
import type { Animation, AnimationConfig } from '@bubble/types'
import anime from 'animejs'
import { getMaxImportantItemInList } from '@bubble/common'

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
    const {
      animation: { action: animationAction, default: animationDefault, list: animationList },
    } = getBubble()

    let animationName: Animation | null = null

    if (animationAction) {
      animationName = animationAction.name
    } else if (animationList.length > 0) {
      animationName = getMaxImportantItemInList(animationList)
    } else if (animationDefault) {
      animationName = animationDefault
    }

    const animationFind = AnimationList.find((item) => item.name === animationName)

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
