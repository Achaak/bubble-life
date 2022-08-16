export interface GlobalConfigType {
  lang: string;
  clickable: boolean;
  showCursor: boolean;

  development: {
    showFPS: boolean;
    devTools: boolean;
    kiosk: boolean;
    menuBar: boolean;
    fullscreen: boolean;
  };
}
