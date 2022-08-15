import type { TextfieldProps } from '@pikas-ui/textfield';
import { Textfield as TextfieldPikasUI } from '@pikas-ui/textfield';
import { forwardRef } from 'react';

export {
  TextfieldGap,
  TextfieldPadding,
  TextfieldType,
} from '@pikas-ui/textfield';
export type {
  TextfieldGapType,
  TextfieldPaddingType,
  TextfieldProps,
  TextfieldStylesType,
  TextfieldTypeType,
} from '@pikas-ui/textfield';

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ styles, ...props }, ref) => {
    return (
      <TextfieldPikasUI
        ref={ref}
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
  }
);
