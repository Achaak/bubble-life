import type { AnimationConfig } from '@bubble/types';

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
};
