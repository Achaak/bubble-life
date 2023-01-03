import type { CheckboxProps } from '@pikas-ui/checkbox';
import { Checkbox as CheckboxPikasUI } from '@pikas-ui/checkbox';

export { checkboxSide } from '@pikas-ui/checkbox';
export type { CheckboxProps, CheckboxSide } from '@pikas-ui/checkbox';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxPikasUI {...props} />;
};
