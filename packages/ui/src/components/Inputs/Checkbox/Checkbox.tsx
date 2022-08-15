import type { CheckboxProps } from '@pikas-ui/checkbox';
import { Checkbox as CheckboxPikasUI } from '@pikas-ui/checkbox';

export { CheckboxSide } from '@pikas-ui/checkbox';
export type { CheckboxProps, CheckboxSideType } from '@pikas-ui/checkbox';
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxPikasUI {...props} />;
};
