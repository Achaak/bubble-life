import { createCss, StitchesCss } from '@stitches/react'
import { Colors } from './colors'
import { Shadows } from './shadows'

export const stitchesConfig = createCss({
  prefix: '',
  theme: {
    colors: Colors,
    fonts: {
      roboto: 'Roboto',
    },
    shadows: Shadows,
    fontSizes: {},
    space: {},
    sizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    customGap: () => (value: number) => ({
      '@supports not (gap: 10px)': {
        '& > *': {
          margin: value / 2,
        },
      },
      '@supports (gap: 10px)': {
        gap: value,
      },
    }),
    customColumnGap: () => (value: number) => ({
      '@supports not (gap: 10px)': {
        '& > *': {
          marginLeft: value / 2,
          marginRight: value / 2,
        },
      },
      '@supports (gap: 10px)': {
        columnGap: `${value}px`,
      },
    }),
    customRowGap: () => (value: number) => ({
      '@supports not (gap: 10px)': {
        '& > *': {
          marginTop: value / 2,
          marginBottom: value / 2,
        },
      },
      '@supports (gap: 10px)': {
        gap: value,
      },
    }),
    br: () => (value: 1 | 2 | 3 | 4 | 'round') => {
      switch (value) {
        case 1:
          return {
            borderRadius: 4,
          }
        case 2:
          return {
            borderRadius: 8,
          }
        case 3:
          return {
            borderRadius: 16,
          }
        case 4:
          return {
            borderRadius: 32,
          }
        case 'round':
          return {
            borderRadius: 5000,
          }
      }
    },
    m: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value: number | string) => ({
      marginTop: value,
    }),
    mr: () => (value: number | string) => ({
      marginRight: value,
    }),
    mb: () => (value: number | string) => ({
      marginBottom: value,
    }),
    ml: () => (value: number | string) => ({
      marginLeft: value,
    }),
    mx: () => (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    linearGradient: () => (value: number | string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    gridCols: () => (value: number | string) => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
      width: '100%',
      height: 'auto',
    }),
    col: () => (value: number | string) => {
      if (!value) return {}

      const split = value.toString().split(' ')

      return {
        gridColumn: `${split[1] || 'auto'} / span ${split[0]}`,
      }
    },
  },
})

export const { styled, css, global, keyframes, getCssString, config, theme } = stitchesConfig

export type CSS = StitchesCss<typeof stitchesConfig>

export const globalStyles = global({
  h1: { margin: 0 },
  'html, body, #__next': {
    color: '$BLACK',
    fontFamily: '$roboto',
    minWidth: 300,
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
