import type { AnimationConfig } from '@bubble/types/src/animation'

export const AnimationDefault: AnimationConfig = {
  name: 'default',
  configs: [
    {
      scaleY: 1.1,
      duration: 1500,
      easing: 'easeInOutQuad',
    },
    {
      scaleY: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    },
  ],
}
