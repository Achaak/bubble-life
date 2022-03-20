import { ColorsType, CSS } from '@src/styles'

export type SVGComponentIcon = {
  className?: string
  size?: number | string
  styles?: {
    container?: CSS
    svg?: CSS
  }
  color?: string
  colorName?: ColorsType
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
