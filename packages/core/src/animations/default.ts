import type { AnimationConfig } from '@bubble/types';

export const AnimationDefault: AnimationConfig = {
  name: 'default',
  configs: [
    {
      style: {
        from: {},
        to: {
          transform: 'scaleY(1.1)',
        },
      },
      duration: 1500,
      easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
    },
    {
      style: {
        from: {
          transform: 'scaleY(1.1)',
        },
        to: {
          transform: 'scaleY(1)',
        },
      },
      duration: 1500,
      easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
    },
  ],
};
