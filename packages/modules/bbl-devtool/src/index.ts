import { App } from './App/index.js';
import { Controller } from './Controller/index.js';
import type { ModuleConfig } from '@bubble/types';

const config: ModuleConfig = {
  name: 'devtool',
  icon: 'fluent:window-dev-tools-16-filled',
  App,
  Controller,
};

export default config;
