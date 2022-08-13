import { theme } from '@pikas-ui/styles'
import { create } from '@storybook/theming'

export default create({
  base: 'light',

  // colorPrimary: theme.colors.PRIMARY.value,
  // colorSecondary: theme.colors.SECONDARY.value,

  // UI
  // appBg: theme.colors.PRIMARY_LIGHTEST_1.value,
  appContentBg: theme.colors.WHITE.value,
  appBorderColor: theme.colors.GRAY.value,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.GRAY_DARKER.value,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: theme.colors.GRAY.value,
  // barSelectedColor: theme.colors.PRIMARY_DARKER.value,
  barBg: theme.colors.WHITE.value,

  // Form colors
  inputBg: theme.colors.WHITE.value,
  inputBorder: theme.colors.GRAY.value,
  inputTextColor: theme.colors.BLACK.value,
  inputBorderRadius: 4,

  brandTitle: 'Bubble Storybook',
  // brandUrl: 'https://bubble.com',
  // brandImage: 'https://bubble.me/bubble-logo/bubble_Logo_Long.png',
})
