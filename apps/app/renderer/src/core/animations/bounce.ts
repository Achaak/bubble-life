import type { AnimationConfig } from '@bubble/types/src/animation'

export const AnimationBounce: AnimationConfig = {
  name: 'bounce',
  configs: [
    {
      translateY: '-30vh',
      scaleX: 0.8,
      duration: 1000,
      easing: 'easeOutQuad',
    },
    {
      translateY: 0,
      scaleX: 1,
      duration: 900,
      easing: 'easeInQuad',
    },
    {
      scaleX: 1.1,
      scaleY: 0.8,
      duration: 100,
      easing: 'easeInOutSine',
    },
    {
      scaleX: 1,
      scaleY: 1,
      duration: 500,
      easing: 'easeOutQuart',
    },
  ],
}
