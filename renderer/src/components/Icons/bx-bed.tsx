import { ContainerIcon, Path, SVG } from './styles'
import type { SVGComponentIcon } from './types'

export const BxBed: React.FC<SVGComponentIcon> = ({
  color,
  colorName,
  size,
  styles,
  className,
  onClick,
}) => {
  return (
    <ContainerIcon className={className} onClick={onClick} css={{ ...styles?.container }}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        css={{
          fill: color || `$${colorName}`,
          ...styles?.svg,
        }}
      >
        <Path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
      </SVG>
    </ContainerIcon>
  )
}

/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path></svg>
*/
