import anime from 'animejs'

export interface Animation {
  id: string
  name: 'default' | 'bounce' | 'shake'
  importance: 1 | 2 | 3
}

export type AnimationConfig = {
  name: string
  configs: anime.AnimeAnimParams[]
}
