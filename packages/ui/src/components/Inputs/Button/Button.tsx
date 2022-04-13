import { styled } from '@bubble/styles'
import React from 'react'

const ButtonDOM = styled('button', {
  all: 'unset',
  backgroundColor: '$TRANSPARENT',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '$WHITE',
  br: 'round',
  color: '$WHITE',
  cursor: 'pointer',
  padding: '8px 24px',
  fontSize: '$MEDIUM',
  fontWeight: '$MEDIUM',
  userSelect: 'none',

  variants: {
    state: {
      disabled: {
        cursor: 'initial',
        opacity: 0.5,
      },
    },
    effect: {
      scale: {
        transition: 'transform 250ms ease',

        '&:hover': {
          transform: 'scale(1.025)',
          transition: 'transform 250ms ease',
        },
        '&:active': {
          transform: 'scale(0.99)',
          transition: 'transform 250ms ease',
        },
      },
      opacity: {
        transition: 'opacity 500ms',

        '&:hover': {
          opacity: 0.8,
        },

        '&:active': {
          opacity: 1,
          transition: 'opacity 0s',
        },
      },
      reverse: {
        transition: 'all 500ms ease',

        '&:hover': {
          backgroundColor: '$WHITE',
          color: '$BLACK',
        },
        '&:active': {
          backgroundColor: '$TRANSPARENT',
          borderColor: '$WHITE',
          color: '$WHITE',
        },
      },
    },
  },
})

export interface ButtonProps {
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  effect?: 'scale' | 'opacity' | 'reverse'
  children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({ children, onClick, type, disabled, effect }) => {
  return (
    <ButtonDOM
      type={type}
      onClick={onClick}
      state={disabled ? 'disabled' : undefined}
      effect={disabled ? undefined : effect}
      disabled={disabled}
    >
      {children}
    </ButtonDOM>
  )
}

Button.defaultProps = {
  type: 'button',
  effect: 'reverse',
}
