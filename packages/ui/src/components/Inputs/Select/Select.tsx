import type { SelectProps } from '@pikas-ui/select';
import { Select as SelectPikasUI } from '@pikas-ui/select';

export { SelectDirections, SelectPadding } from '@pikas-ui/select';
export type {
  SelectDirectionsType,
  SelectItemType,
  SelectPaddingType,
  SelectProps,
  SelectStylesType,
} from '@pikas-ui/select';

export const Select: React.FC<SelectProps> = ({ styles, ...props }) => {
  return (
    <SelectPikasUI
      styles={{
        ...styles,
        label: {
          color: '$WHITE',
          ...styles?.label,
        },
      }}
      {...props}
    />
  );
};
