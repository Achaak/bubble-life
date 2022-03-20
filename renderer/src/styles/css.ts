import { borderRadius } from './borderRadius'
import { BorderStyles } from './borderStyles'
import { BorderWidths } from './borderWidths'
import { Colors } from './colors'
import { FontSizes } from './fontSizes'
import { FontWeights } from './fontWeights'
import { gap } from './gap'
import { LetterSpacings } from './letterSpacings'
import { LineHeights } from './lineHeights'
import { Radii } from './radii'
import { Shadows } from './shadows'
import { Sizes } from './sizes'
import { Space } from './space'
import { Transitions } from './transitions'
import { ZIndices } from './zIndices'
import type { CSS as CSSStitches } from '@stitches/react'
import { createStitches } from '@stitches/react'

export const stitchesConfig = createStitches({
  prefix: '',
  theme: {
    colors: Colors,
    fonts: {
      roboto: 'Roboto',
    },
    shadows: Shadows,
    fontSizes: FontSizes,
    space: Space,
    sizes: Sizes,
    fontWeights: FontWeights,
    lineHeights: LineHeights,
    letterSpacings: LetterSpacings,
    borderWidths: BorderWidths,
    borderStyles: BorderStyles,
    radii: Radii,
    zIndices: ZIndices,
    transitions: Transitions,
  },
  media: {
    xs: '(min-width: 480px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    ...gap,
    ...borderRadius,
    m: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    linearGradient: (value: number | string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    gridCols: (value: number | string) => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
      width: '100%',
      height: 'auto',
    }),
    col: (value: number | string) => {
      if (!value) {
        return {}
      }

      const split = value.toString().split(' ')

      return {
        gridColumn: `${split[1] || 'auto'} / span ${split[0]}`,
      }
    },
  },
})

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
  createTheme,
  prefix,
  reset,
  theme,
} = stitchesConfig

export type CSS = CSSStitches<typeof stitchesConfig>

export const globalStyles = globalCss({
  h1: { margin: 0 },
  'html, body, #__next': {
    color: '$WHITE',
    backgroundColor: '$BLACK',
    fontFamily: '$roboto',
    minWidth: 300,
    scrollBehavior: 'smooth',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },

  '::-webkit-scrollbar': {
    width: '7px',
    height: '7px',
    borderRadius: '10px',
  },
  '::-webkit-scrollbar-track': {
    borderRadius: '10px',
    backgroundColor: '$WHITE',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$GRAY',
    borderRadius: '10px',
  },
})
