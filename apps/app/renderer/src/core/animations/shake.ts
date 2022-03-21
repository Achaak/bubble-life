import { AnimationConfig } from '@src/types/animation'

export const Animation_Shake: AnimationConfig = {
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
