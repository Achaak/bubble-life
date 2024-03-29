import type { GlobalConfigType } from '@bubble/types';

export const GlobalConfig: GlobalConfigType = {
  lang: 'fr',
  clickable: true,
  showCursor: false,

  development: {
    devTools: false,
    kiosk: true,
    menuBar: false,
    fullscreen: true,
  },
};
