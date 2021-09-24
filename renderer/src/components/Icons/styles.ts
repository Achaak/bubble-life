import { styled } from '@stitches/react'

export const ContainerIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SVG = styled('svg', {})

export const Path = styled('path', {
  variants: {
    colorFill: {
      'primary-darker': {
        fill: '$PRIMARY_DARKER',
      },
      'primary-dark': {
        fill: '$PRIMARY_DARK',
      },
      primary: {
        fill: '$PRIMARY',
      },
      'primary-light': {
        fill: '$PRIMARY_LIGHT',
      },
      'primary-lighter': {
        fill: '$PRIMARY_LIGHTER',
      },
      'primary-lightest-2': {
        fill: '$PRIMARY_LIGHTEST_2',
      },
      'primary-lightest-1': {
        fill: '$PRIMARY_LIGHTEST_1',
      },

      'secondary-darker': {
        fill: '$SECONDARY_DARKER',
      },
      'secondary-dark': {
        fill: '$SECONDARY_DARK',
      },
      secondary: {
        fill: '$SECONDARY',
      },
      'secondary-light': {
        fill: '$SECONDARY_LIGHT',
      },
      'secondary-lighter': {
        fill: '$SECONDARY_LIGHTER',
      },
      'secondary-lightest-2': {
        fill: '$SECONDARY_LIGHTEST_2',
      },
      'secondary-lightest-1': {
        fill: '$SECONDARY_LIGHTEST_1',
      },

      black: {
        fill: '$BLACK',
      },
      'black-light': {
        fill: '$BLACK_LIGHT',
      },
      'black-lighter': {
        fill: '$BLACK_LIGHTER',
      },
      'black-lightest-2': {
        fill: '$BLACK_LIGHTEST_2',
      },
      'black-lightest-1': {
        fill: '$BLACK_LIGHTEST_1',
      },

      white: {
        fill: '$WHITE',
      },
      'white-light': {
        fill: '$WHITE_LIGHT',
      },
      'white-lighter': {
        fill: '$WHITE_LIGHTER',
      },
      'white-lightest-2': {
        fill: '$WHITE_LIGHTEST_2',
      },
      'white-lightest-1': {
        fill: '$WHITE_LIGHTEST_1',
      },

      'gray-darker': {
        fill: '$GRAY_DARKER',
      },
      'gray-dark': {
        fill: '$GRAY_DARK',
      },
      gray: {
        fill: '$GRAY',
      },
      'gray-light': {
        fill: '$GRAY_LIGHT',
      },
      'gray-lighter': {
        fill: '$GRAY_LIGHTER',
      },
      'gray-lightest-2': {
        fill: '$GRAY_LIGHTEST_2',
      },
      'gray-lightest-1': {
        fill: '$GRAY_LIGHTEST_1',
      },

      'success-darker': {
        fill: '$SUCCESS_DARKER',
      },
      'success-dark': {
        fill: '$SUCCESS_DARK',
      },
      success: {
        fill: '$SUCCESS',
      },
      'success-light': {
        fill: '$SUCCESS_LIGHT',
      },
      'success-lighter': {
        fill: '$SUCCESS_LIGHTER',
      },
      'success-lightest-2': {
        fill: '$SUCCESS_LIGHTEST_2',
      },
      'success-lightest-1': {
        fill: '$SUCCESS_LIGHTEST_1',
      },

      'warning-darker': {
        fill: '$WARNING_DARKER',
      },
      'warning-dark': {
        fill: '$WARNING_DARK',
      },
      warning: {
        fill: '$WARNING',
      },
      'warning-light': {
        fill: '$WARNING_LIGHT',
      },
      'warning-lighter': {
        fill: '$WARNING_LIGHTER',
      },
      'warning-lightest-2': {
        fill: '$WARNING_LIGHTEST_2',
      },
      'warning-lightest-1': {
        fill: '$WARNING_LIGHTEST_1',
      },

      'error-darker': {
        fill: '$ERROR_DARKER',
      },
      'error-dark': {
        fill: '$ERROR_DARK',
      },
      error: {
        fill: '$ERROR',
      },
      'error-light': {
        fill: '$ERROR_LIGHT',
      },
      'error-lighter': {
        fill: '$ERROR_LIGHTER',
      },
      'error-lightest-2': {
        fill: '$ERROR_LIGHTEST_2',
      },
      'error-lightest-1': {
        fill: '$ERROR_LIGHTEST_1',
      },

      folder: {
        fill: '$FOLDER',
      },
      facebook: {
        fill: '$FACEBOOK',
      },
      linkedin: {
        fill: '$LINKEDIN',
      },
      link: {
        fill: '$LINK',
      },
    },
    colorStroke: {
      'primary-darker': {
        stroke: '$PRIMARY_DARKER',
      },
      'primary-dark': {
        stroke: '$PRIMARY_DARK',
      },
      primary: {
        stroke: '$PRIMARY',
      },
      'primary-light': {
        stroke: '$PRIMARY_LIGHT',
      },
      'primary-lighter': {
        stroke: '$PRIMARY_LIGHTER',
      },
      'primary-lightest-2': {
        stroke: '$PRIMARY_LIGHTEST_2',
      },
      'primary-lightest-1': {
        stroke: '$PRIMARY_LIGHTEST_1',
      },

      'secondary-darker': {
        stroke: '$SECONDARY_DARKER',
      },
      'secondary-dark': {
        stroke: '$SECONDARY_DARK',
      },
      secondary: {
        stroke: '$SECONDARY',
      },
      'secondary-light': {
        stroke: '$SECONDARY_LIGHT',
      },
      'secondary-lighter': {
        stroke: '$SECONDARY_LIGHTER',
      },
      'secondary-lightest-2': {
        stroke: '$SECONDARY_LIGHTEST_2',
      },
      'secondary-lightest-1': {
        stroke: '$SECONDARY_LIGHTEST_1',
      },

      black: {
        stroke: '$BLACK',
      },
      'black-light': {
        stroke: '$BLACK_LIGHT',
      },
      'black-lighter': {
        stroke: '$BLACK_LIGHTER',
      },
      'black-lightest-2': {
        stroke: '$BLACK_LIGHTEST_2',
      },
      'black-lightest-1': {
        stroke: '$BLACK_LIGHTEST_1',
      },

      white: {
        stroke: '$WHITE',
      },
      'white-light': {
        stroke: '$WHITE_LIGHT',
      },
      'white-lighter': {
        stroke: '$WHITE_LIGHTER',
      },
      'white-lightest-2': {
        stroke: '$WHITE_LIGHTEST_2',
      },
      'white-lightest-1': {
        stroke: '$WHITE_LIGHTEST_1',
      },

      'gray-darker': {
        stroke: '$GRAY_DARKER',
      },
      'gray-dark': {
        stroke: '$GRAY_DARK',
      },
      gray: {
        stroke: '$GRAY',
      },
      'gray-light': {
        stroke: '$GRAY_LIGHT',
      },
      'gray-lighter': {
        stroke: '$GRAY_LIGHTER',
      },
      'gray-lightest-2': {
        stroke: '$GRAY_LIGHTEST_2',
      },
      'gray-lightest-1': {
        stroke: '$GRAY_LIGHTEST_1',
      },

      'success-darker': {
        stroke: '$SUCCESS_DARKER',
      },
      'success-dark': {
        stroke: '$SUCCESS_DARK',
      },
      success: {
        stroke: '$SUCCESS',
      },
      'success-light': {
        stroke: '$SUCCESS_LIGHT',
      },
      'success-lighter': {
        stroke: '$SUCCESS_LIGHTER',
      },
      'success-lightest-2': {
        stroke: '$SUCCESS_LIGHTEST_2',
      },
      'success-lightest-1': {
        stroke: '$SUCCESS_LIGHTEST_1',
      },

      'warning-darker': {
        stroke: '$WARNING_DARKER',
      },
      'warning-dark': {
        stroke: '$WARNING_DARK',
      },
      warning: {
        stroke: '$WARNING',
      },
      'warning-light': {
        stroke: '$WARNING_LIGHT',
      },
      'warning-lighter': {
        stroke: '$WARNING_LIGHTER',
      },
      'warning-lightest-2': {
        stroke: '$WARNING_LIGHTEST_2',
      },
      'warning-lightest-1': {
        stroke: '$WARNING_LIGHTEST_1',
      },

      'error-darker': {
        stroke: '$ERROR_DARKER',
      },
      'error-dark': {
        stroke: '$ERROR_DARK',
      },
      error: {
        stroke: '$ERROR',
      },
      'error-light': {
        stroke: '$ERROR_LIGHT',
      },
      'error-lighter': {
        stroke: '$ERROR_LIGHTER',
      },
      'error-lightest-2': {
        stroke: '$ERROR_LIGHTEST_2',
      },
      'error-lightest-1': {
        stroke: '$ERROR_LIGHTEST_1',
      },

      folder: {
        stroke: '$FOLDER',
      },
      facebook: {
        stroke: '$FACEBOOK',
      },
      linkedin: {
        stroke: '$LINKEDIN',
      },
      link: {
        stroke: '$LINK',
      },
    },
  },
})
