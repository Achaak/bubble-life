import { GlobalConfig } from '@bubble/configs';
import type { BrowserWindowConstructorOptions } from 'electron';
import { BrowserWindow, screen } from 'electron';
import Store from 'electron-store';

const window = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store({ name });
  const defaultSize = {
    width: options.width || 500,
    height: options.height || 500,
  };
  let state = {};
  let win: BrowserWindow | undefined = undefined;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = (): {
    x: number;
    y: number;
    width: number;
    height: number;
  } => {
    if (!win) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    }

    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const windowWithinBounds = (windowState, bounds): boolean => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = (): {
    width: number;
    height: number;
    x: number;
    y: number;
  } => {
    const bounds = screen.getPrimaryDisplay().bounds;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const saveState = (): void => {
    if (win && !win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const browserOptions: BrowserWindowConstructorOptions = {
    ...options,
    ...state,
    kiosk: GlobalConfig.development.kiosk,
    fullscreen: GlobalConfig.development.fullscreen,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: GlobalConfig.development.devTools,
      ...options.webPreferences,
    },
  };
  win = new BrowserWindow(browserOptions);
  win.setMenuBarVisibility(GlobalConfig.development.menuBar);

  win.on('close', saveState);

  return win;
};

export default window;
