import type { AnimationConfig } from '@bubble/types/src/animation'

export const AnimationShake: AnimationConfig = {
  name: 'shake',
  configs: [
    {
      scaleX: 0.98,
      scaleY: 0.98,
      duration: 50,
      easing: 'easeOutQuad',
    },
    {
      scaleX: 1,
      scaleY: 1,
      duration: 50,
      easing: 'easeOutQuad',
    },
  ],
}
