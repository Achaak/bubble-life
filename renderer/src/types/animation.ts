import anime from 'animejs'

export interface Animation {
  id: string
  name: 'default' | 'bounce'
  importance: 1 | 2 | 3
}

export type AnimationConfig = {
  name: string
  configs: anime.AnimeAnimParams[]
}
