import type { SwitchProps } from '@pikas-ui/switch';
import { Switch as SwitchPikasUI } from '@pikas-ui/switch';

export type { SwitchProps, SwitchCSS } from '@pikas-ui/switch';

export const Switch: React.FC<SwitchProps> = (props) => {
  return <SwitchPikasUI {...props} />;
};
