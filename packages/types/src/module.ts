export type ModulePosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'center-left'
  | 'center-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';

export type ModuleConfig = {
  name: string;
  icon: string;
  App?: React.FC<any>;
  Controller?: React.FC<any>;
};

export interface ModulesType {
  module: ModuleConfig;
  position?: ModulePosition;
  config?: Record<string, unknown>;
}
