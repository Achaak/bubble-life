import type { CSS } from '@bubble/styles'
import { styled } from '@bubble/styles'
import React from 'react'

const ComponentStyle = styled('p', {
  color: '$WHITE',
  display: 'block',
  textDecoration: 'none',

  variants: {
    variant: {
      span: {
        fontSize: '$EM-MEDIUM',
      },
      a: {
        fontSize: '$EM-MEDIUM',
        color: '$PRIMARY',
        cursor: 'pointer',
      },
      p: {
        fontSize: '$EM-MEDIUM',
        textAlign: 'justify',
        margin: '16px 0',
      },
      ul: {
        margin: '16px 0',
        paddingLeft: '24px',
      },
      li: {
        fontSize: '$EM-MEDIUM',
        margin: '8px 0',
        listStyle: 'inside',
        display: 'list-item',
      },
      error: {
        color: '$ERROR',
        fontSize: '$EM-SMALL',
      },
      info: {
        fontSize: '$EM-SMALL',
        color: '$PRIMARY',
        fontStyle: 'italic',
      },
      label: {
        fontSize: '$EM-SMALL',
        fontWeight: '$MEDIUM',
      },
    },
  },
})

export const TextComponentType = {
  span: true,
  p: true,
  a: true,
  li: true,
  ul: true,
  label: true,
}
export const TextVariantType = {
  ...TextComponentType,
  error: true,
  info: true,
}

export interface TextProps {
  component: keyof typeof TextComponentType
  variant?: keyof typeof TextVariantType
  style?: CSS
  href?: string
  dangerouslySetInnerHTML?: {
    __html: string
  }
  children?: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  children,
  component,
  variant,
  style,
  href,
  dangerouslySetInnerHTML,
}) => {
  // A
  if (component === 'a') {
    return (
      <ComponentStyle
        as={component}
        variant={variant || component}
        css={{
          ...style,
        }}
        href={href}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
        {children}
      </ComponentStyle>
    )
  }

  // OTHER
  return (
    <ComponentStyle
      as={component}
      variant={variant || component}
      css={{
        ...style,
      }}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </ComponentStyle>
  )
}

Text.defaultProps = {
  component: 'span',
}
