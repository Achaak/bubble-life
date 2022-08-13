import type { ModulesType } from '@bubble/types';
import BBLCalendar from 'bbl-calendar';
import BBLMenu from 'bbl-menu';

export const ModulesConfig: ModulesType[] = [
  {
    module: BBLCalendar,
    position: 'top-left',
    config: {
      dateFormat: 'dddd, D MMMM, YYYY', // https://day.js.org/docs/en/display/format
      lang: 'fr',
    },
  },
  {
    module: BBLMenu,
    position: 'bottom-right',
  },
];
