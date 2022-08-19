import type { AnimationConfig } from '@bubble/types';

export const AnimationBounce: AnimationConfig = {
  name: 'bounce',
  configs: [
    {
      style: {
        from: {},
        to: {
          transform: 'translateY(-30vh) scaleX(0.8)',
        },
      },
      duration: 1000,
      easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
    },
    {
      style: {
        from: {
          transform: 'translateY(-30vh) scaleX(0.8)',
        },
        to: {
          transform: 'translateY(0) scaleX(1)',
        },
      },
      duration: 900,
      easing: 'cubic-bezier(0.11, 0, 0.5, 0)',
    },
    {
      style: {
        from: {},
        to: {
          transform: 'scaleX(1.1) scaleY(0.8)',
        },
      },
      duration: 100,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
    },
    {
      style: {
        from: {
          transform: 'scaleX(1.1) scaleY(0.8)',
        },
        to: {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
      duration: 500,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  ],
};
