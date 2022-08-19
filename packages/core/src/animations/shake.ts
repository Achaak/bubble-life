import type { AnimationConfig } from '@bubble/types';

export const AnimationShake: AnimationConfig = {
  name: 'shake',
  configs: [
    {
      style: {
        from: {},
        to: {
          transform: 'scaleX(0.98), scaleY(0.98)',
        },
      },
      duration: 50,
      easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
    },
    {
      style: {
        from: {
          transform: 'scaleX(0.98), scaleY(0.98)',
        },
        to: {
          transform: 'scaleX(1), scaleY(1)',
        },
      },
      duration: 1500,
      easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
    },
  ],
};
