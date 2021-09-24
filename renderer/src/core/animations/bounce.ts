import { AnimationConfig } from '@src/types/animation'

export const Animation_Bounce: AnimationConfig = {
  name: 'bounce',
  configs: [
    {
      translateY: -200,
      duration: 1500,
      easing: 'easeInOutQuad',
    },
    {
      translateY: 0,
      duration: 1500,
      easing: 'easeInOutQuad',
    },
  ],
}
