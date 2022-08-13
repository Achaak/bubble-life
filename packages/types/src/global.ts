export interface GlobalConfigType {
  lang: string;
  clickable: boolean;

  development: {
    showFPS: boolean;
    devTools: boolean;
    kiosk: boolean;
    menuBar: boolean;
  };
}
