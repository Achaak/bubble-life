import { AnimationConfig } from '@src/types/animation'

export const Animation_Default: AnimationConfig = {
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
