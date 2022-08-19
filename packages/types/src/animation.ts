import type { CSS } from '@bubble/styles';

export type Animation = 'default' | 'bounce' | 'shake';

export type AnimationConfig = {
  name: string;
  configs: {
    style: { [offset: string]: CSS };
    duration: number;
    easing: string;
  }[];
};
