import { globalCss } from '@pikas-ui/styles';

export const customGlobalCss = globalCss({
  'html, body, #__next': {
    color: '$BLACK',
    fontFamily: '$roboto',
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
    br: 'lg',
  },
  '::-webkit-scrollbar-track': {
    br: 'lg',
    backgroundColor: '$WHITE',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$GRAY',
    br: 'lg',
  },
});
