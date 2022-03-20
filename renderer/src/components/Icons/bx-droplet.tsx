import { ContainerIcon, Path, SVG } from './styles'
import type { SVGComponentIcon } from './types'

export const BxDroplet: React.FC<SVGComponentIcon> = ({
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
        <Path d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75 4 18.53 7.364 22 12 22zm-.001-17.74C13.604 5.55 18 9.474 18 13.754 18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49z" />
      </SVG>
    </ContainerIcon>
  )
}

/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75 4 18.53 7.364 22 12 22zm-.001-17.74C13.604 5.55 18 9.474 18 13.754 18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49z"></path></svg>
*/
