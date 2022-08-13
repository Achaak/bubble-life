import { App } from './App/index.js';
import { Controller } from './Controller/index.js';
import type { ModuleConfig } from '@bubble/types';

const config: ModuleConfig = {
  name: 'example',
  icon: 'cruelty_free',
  App,
  Controller,
};

export default config;
