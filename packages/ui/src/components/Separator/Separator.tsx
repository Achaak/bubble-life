import type { CSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import React from 'react';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$GRAY_LIGHTER',

  '&[data-orientation=horizontal]': {
    minHeight: 2,
    height: 2,
    width: '100%',
  },
  '&[data-orientation=vertical]': {
    height: '100%',
    minWidth: 2,
    width: 2,
  },
});

export interface SeparatorProps {
  orientation?: 'vertical' | 'horizontal';
  style?: CSS;
}

export const Separator: React.FC<SeparatorProps> = ({ orientation, style }) => {
  return (
    <StyledSeparator
      orientation={orientation}
      css={{
        ...style,
      }}
    />
  );
};

Separator.defaultProps = {
  orientation: 'horizontal',
};
