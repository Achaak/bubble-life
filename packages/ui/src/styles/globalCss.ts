import { globalCss } from '@pikas-ui/styles';
import { GlobalConfig } from '@bubble/configs';

export const customGlobalCss = globalCss({
  'html, body, #__next': {
    color: '$WHITE',
    backgroundColor: '$BACKGROUND',
    fontFamily: '$roboto',
    scrollBehavior: 'smooth',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    cursor: GlobalConfig.showCursor ? 'default' : 'none !important',
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
