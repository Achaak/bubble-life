import type { PikasCSS } from '@bubble/styles';

export type Animation = 'default' | 'bounce' | 'shake';

export type AnimationConfig = {
  name: string;
  configs: {
    style: { [offset: string]: PikasCSS };
    duration: number;
    easing: string;
  }[];
};
