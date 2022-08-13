import type { CSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import React from 'react';

const TitleStyle = styled('h1', {
  color: '$WHITE',
  whiteSpace: 'pre-line',
  textTransform: 'capitalize',

  variants: {
    variant: {
      h1: {
        fontSize: '$EM-XXX-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$X-LARGE',
      },
      h2: {
        fontSize: '$EM-XX-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$X-LARGE',
      },
      h3: {
        fontSize: '$EM-X-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$LARGE',
      },
      h4: {
        fontSize: '$EM-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$LARGE',
      },
      h5: {
        fontSize: '$EM-MEDIUM',
        fontWeight: '$BOLD',
        letterSpacing: '$MEDIUM',
      },
    },
  },
});

export const TitleComponentType = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
};
export const TitleVariantType = TitleComponentType;

export const WhiteSpaceType = {
  nowrap: true,
  normal: true,
  pre: true,
  preLine: true,
  preWrap: true,
};

export interface TitleProps {
  component: keyof typeof TitleComponentType;
  variant?: keyof typeof TitleVariantType;
  whiteSpace?: keyof typeof WhiteSpaceType;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  style?: CSS;
  id?: string;
  children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  children,
  id,
  component,
  variant,
  whiteSpace,
  dangerouslySetInnerHTML,
  style,
}) => {
  return (
    <TitleStyle
      id={id}
      as={component}
      variant={variant || component}
      css={{
        whiteSpace: whiteSpace,

        ...style,
      }}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </TitleStyle>
  );
};
