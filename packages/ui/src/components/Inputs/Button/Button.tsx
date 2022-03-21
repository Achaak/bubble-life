import { styled } from '@bubble/styles'

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

  '&:hover': {
    backgroundColor: '$WHITE',
    color: '$BLACK',
    transition: 'all 0.2s ease-in-out',
  },

  '&:active': {
    backgroundColor: '$TRANSPARENT',
    color: '$WHITE',
    transition: 'all 0s',
  },
})

interface CustomProps {
  onClick: () => void
  type?: 'button' | 'submit'
}

export const Button: React.FC<CustomProps> = ({ children, onClick, type }) => {
  return (
    <ButtonDOM type={type} onClick={onClick}>
      {children}
    </ButtonDOM>
  )
}
