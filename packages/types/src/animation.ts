import type anime from 'animejs';

export type Animation = 'default' | 'bounce' | 'shake';

export type AnimationConfig = {
  name: string;
  configs: anime.AnimeAnimParams[];
};
