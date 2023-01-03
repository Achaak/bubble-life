import type { TextfieldProps } from '@pikas-ui/textfield';
import { Textfield as TextfieldPikasUI } from '@pikas-ui/textfield';
import { forwardRef } from 'react';

export {
  textfieldGap,
  textfieldPadding,
  textfieldType,
} from '@pikas-ui/textfield';
export type {
  TextfieldGap,
  TextfieldPadding,
  TextfieldProps,
  TextfieldCSS,
  TextfieldType,
} from '@pikas-ui/textfield';

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ css, ...props }, ref) => {
    return (
      <TextfieldPikasUI
        ref={ref}
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
  }
);
