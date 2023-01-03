import type { SelectProps } from '@pikas-ui/select';
import { Select as SelectPikasUI } from '@pikas-ui/select';

export { selectDirections, selectPadding } from '@pikas-ui/select';
export type {
  SelectDirections,
  SelectItem,
  SelectPadding,
  SelectProps,
  SelectCSS,
  SelectRef,
} from '@pikas-ui/select';

export const Select: React.FC<SelectProps> = ({ css, ...props }) => {
  return (
    <SelectPikasUI
      css={{
        ...css,
        label: {
          color: '$WHITE',
          ...css?.label,
        },
      }}
      {...props}
    />
  );
};
