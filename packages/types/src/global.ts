export interface GlobalConfigType {
  lang: string;
  clickable: boolean;
  showCursor: boolean;

  development: {
    devTools: boolean;
    kiosk: boolean;
    menuBar: boolean;
    fullscreen: boolean;
  };
}
