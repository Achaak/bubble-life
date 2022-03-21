export type ModulePosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'center-left'
  | 'center-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'

export interface ModulesConfigType {
  name: string
  position?: ModulePosition
  config?: Record<string, unknown>
}
