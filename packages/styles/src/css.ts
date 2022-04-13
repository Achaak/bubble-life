import type { CSS as CSSStitches } from '@stitches/react'
import { createStitches } from '@stitches/react'

import { borderRadius } from './borderRadius.js'
import { BorderStyles } from './borderStyles.js'
import { BorderWidths } from './borderWidths.js'
import { Colors } from './colors.js'
import { FontSizes } from './fontSizes.js'
import { FontWeights } from './fontWeights.js'
import { gap } from './gap.js'
import { LetterSpacings } from './letterSpacings.js'
import { LineHeights } from './lineHeights.js'
import { Radii } from './radii.js'
import { Shadows } from './shadows.js'
import { Sizes } from './sizes.js'
import { Space } from './space.js'
import { Transitions } from './transitions.js'
import { ZIndices } from './zIndices.js'

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

  '.material-icons, .material-icons-outlined, .material-icons-round, .material-icons-sharp, .material-icons-two-tone':
    {
      '&.size-8': { fontSize: 8 },
      '&.size-16': { fontSize: 16 },
      '&.size-24': { fontSize: 24 },
      '&.size-32': { fontSize: 32 },
      '&.size-40': { fontSize: 40 },
      '&.size-48': { fontSize: 48 },
      '&.size-56': { fontSize: 56 },
      '&.size-64': { fontSize: 64 },

      '&.size-xs-8': { '@xs': { fontSize: 8 } },
      '&.size-xs-16': { '@xs': { fontSize: 16 } },
      '&.size-xs-24': { '@xs': { fontSize: 24 } },
      '&.size-xs-32': { '@xs': { fontSize: 32 } },
      '&.size-xs-40': { '@xs': { fontSize: 40 } },
      '&.size-xs-48': { '@xs': { fontSize: 48 } },
      '&.size-xs-56': { '@xs': { fontSize: 56 } },
      '&.size-xs-64': { '@xs': { fontSize: 64 } },

      '&.size-sm-8': { '@sm': { fontSize: 8 } },
      '&.size-sm-16': { '@sm': { fontSize: 16 } },
      '&.size-sm-24': { '@sm': { fontSize: 24 } },
      '&.size-sm-32': { '@sm': { fontSize: 32 } },
      '&.size-sm-40': { '@sm': { fontSize: 40 } },
      '&.size-sm-48': { '@sm': { fontSize: 48 } },
      '&.size-sm-56': { '@sm': { fontSize: 56 } },
      '&.size-sm-64': { '@sm': { fontSize: 64 } },

      '&.size-md-8': { '@md': { fontSize: 8 } },
      '&.size-md-16': { '@md': { fontSize: 16 } },
      '&.size-md-24': { '@md': { fontSize: 24 } },
      '&.size-md-32': { '@md': { fontSize: 32 } },
      '&.size-md-40': { '@md': { fontSize: 40 } },
      '&.size-md-48': { '@md': { fontSize: 48 } },
      '&.size-md-56': { '@md': { fontSize: 56 } },
      '&.size-md-64': { '@md': { fontSize: 64 } },

      '&.size-lg-8': { '@lg': { fontSize: 8 } },
      '&.size-lg-16': { '@lg': { fontSize: 16 } },
      '&.size-lg-24': { '@lg': { fontSize: 24 } },
      '&.size-lg-32': { '@lg': { fontSize: 32 } },
      '&.size-lg-40': { '@lg': { fontSize: 40 } },
      '&.size-lg-48': { '@lg': { fontSize: 48 } },
      '&.size-lg-56': { '@lg': { fontSize: 56 } },
      '&.size-lg-64': { '@lg': { fontSize: 64 } },

      '&.size-xl-8': { '@xl': { fontSize: 8 } },
      '&.size-xl-16': { '@xl': { fontSize: 16 } },
      '&.size-xl-24': { '@xl': { fontSize: 24 } },
      '&.size-xl-32': { '@xl': { fontSize: 32 } },
      '&.size-xl-40': { '@xl': { fontSize: 40 } },
      '&.size-xl-48': { '@xl': { fontSize: 48 } },
      '&.size-xl-56': { '@xl': { fontSize: 56 } },
      '&.size-xl-64': { '@xl': { fontSize: 64 } },
    },
})
