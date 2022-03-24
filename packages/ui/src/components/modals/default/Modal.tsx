import type { CSS } from '@bubble/styles'
import { styled } from '@bubble/styles'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { BxX } from '../../../Icons/bx-x'

const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  backgroundColor: '$GRAY_LIGHT',
  opacity: 0,
  inset: 0,
  transition: 'all 500ms',
  zIndex: '$XX-HIGH',

  variants: {
    visible: {
      true: {
        opacity: 0.1,
      },
    },
  },
})

const Container = styled(Dialog.Content, {
  inset: 'initial',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  boxShadow: '$ELEVATION_BOTTOM_5',

  backgroundColor: '$BLACK',
  maxWidth: '100vw',
  maxHeight: '100vh',
  transition: 'all 500ms',
  transform: 'scale(0.8)',
  overflow: 'hidden',
  opacity: 0,
  zIndex: '$XX-HIGH',

  display: 'flex',
  flexDirection: 'column',

  '&:focus': { outline: 'none' },

  '@sm': {
    top: '50%',
    left: '50%',
    bottom: 'initial',
    right: 'initial',
    borderRadius: '8px',
    transformOrigin: '0% 0%',
    transform: 'scale(0.8) translate(-50%, -50%)',
  },

  variants: {
    visible: {
      true: {
        opacity: 1,
        transform: 'scale(1)',

        '@sm': {
          transform: 'scale(1) translate(-50%, -50%)',
        },
      },
    },
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '8px 16px',
        '@sm': {
          padding: '16px 24px',
        },
      },
      md: {
        padding: '16px 24px',
        '@sm': {
          padding: '24px 32px',
        },
      },
      lg: {
        padding: '24px 32px',
        '@sm': {
          padding: '32px 40px',
        },
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

const CloseBtn = styled('div', {
  cursor: 'pointer',
  position: 'absolute',
  right: '16px',
  top: '16px',
})

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  variants: {
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '16px 24px',
      },
      md: {
        padding: '24px 32px',
      },
      lg: {
        padding: '32px 40px',
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'auto',

  variants: {
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '16px 24px',
      },
      md: {
        padding: '24px 32px',
      },
      lg: {
        padding: '32px 40px',
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  variants: {
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '16px 24px',
      },
      md: {
        padding: '24px 32px',
      },
      lg: {
        padding: '32px 40px',
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

export interface ModalType {
  visible: boolean
  onClose: () => void
  hasCloseBtn?: boolean
  styles?: {
    container?: CSS
    header?: CSS
    content?: CSS
    footer?: CSS
  }
  closeClickOutside?: boolean
  onOpen?: () => void
  width?: string | number
  height?: string | number
  padding?: {
    container?: 'no-padding' | 'sm' | 'md' | 'lg'
    header?: 'no-padding' | 'sm' | 'md' | 'lg'
    content?: 'no-padding' | 'sm' | 'md' | 'lg'
    footer?: 'no-padding' | 'sm' | 'md' | 'lg'
  }
  gap?: {
    container?: 'no-gap' | 'sm' | 'md' | 'lg'
    header?: 'no-gap' | 'sm' | 'md' | 'lg'
    content?: 'no-gap' | 'sm' | 'md' | 'lg'
    footer?: 'no-gap' | 'sm' | 'md' | 'lg'
  }
  header?: React.ReactNode
  footer?: React.ReactNode
  content?: React.ReactNode
}

export const Modal = ({
  visible,
  hasCloseBtn,
  onClose,
  styles,
  closeClickOutside,
  onOpen,
  width,
  padding,
  height,
  header,
  footer,
  content,
  gap,
}: ModalType): JSX.Element => {
  const [visibleStyle, setVisibleStyle] = useState(false)
  const [visibleDOM, setVisibleDOM] = useState(false)

  useEffect(() => {
    if (visible) {
      setVisibleDOM(visible)

      setTimeout(() => {
        setVisibleStyle(visible)
      }, 100)
    } else {
      setVisibleStyle(visible)

      setTimeout(() => {
        setVisibleDOM(visible)
      }, 500)
    }
  }, [visible])

  const handleClose = (): void => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Dialog.Root
      open={visibleDOM}
      modal={true}
      onOpenChange={(value): void => {
        if (value) {
          onOpen?.()
        } else {
          onClose?.()
        }
      }}
    >
      <Overlay
        visible={visibleStyle}
        onClick={(): void => {
          if (closeClickOutside) {
            handleClose()
          }
        }}
        css={{
          pointerEvents: 'initial',
        }}
      />

      <Container
        visible={visibleStyle}
        padding={padding?.container}
        gap={gap?.container}
        css={{
          '@sm': {
            width: width,
            height: height,
          },

          ...styles?.container,
        }}
      >
        {hasCloseBtn && (
          <CloseBtn onClick={handleClose}>
            <BxX size={32} colorName="WHITE" />
          </CloseBtn>
        )}

        {header && (
          <Header
            css={{
              ...styles?.header,
            }}
            gap={gap?.header}
            padding={padding?.header}
          >
            {header}
          </Header>
        )}
        {content && (
          <Content
            css={{
              ...styles?.content,
            }}
            gap={gap?.content}
            padding={padding?.content}
          >
            {content}
          </Content>
        )}
        {footer && (
          <Footer
            css={{
              ...styles?.footer,
            }}
            gap={gap?.footer}
            padding={padding?.footer}
          >
            {footer}
          </Footer>
        )}
      </Container>
    </Dialog.Root>
  )
}

Modal.defaultProps = {
  width: 500,
  padding: {
    container: 'md',
    content: 'no-padding',
    footer: 'no-padding',
    header: 'no-padding',
  },
  gap: {
    container: 'sm',
    content: 'md',
    footer: 'md',
    header: 'md',
  },
  hasCloseBtn: true,
}
