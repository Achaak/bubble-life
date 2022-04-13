import type { CSS } from '@bubble/styles'
import { styled } from '@bubble/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import { useState } from 'react'
import { Text } from '../../Text'
import React from 'react'

const Container = styled('div', {
  variants: {
    fontSize: {
      sm: {
        fontSize: '$EM-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      lg: {
        fontSize: '$EM-LARGE',
      },
    },
  },
})

const TextareaComponent = styled('textarea', {
  border: 'none',
  width: '100%',
  outline: 'none',
  fontFamily: '$roboto',
  color: '$GRAY_DARKER',
  borderStyle: 'solid',
  borderColor: `$GRAY_LIGHT`,
  borderRadius: 5,
  resize: 'none',
  height: 150,
  fontSize: '$EM-MEDIUM',
  padding: '10px 15px',

  '&::placeholder': {
    color: '$GRAY',
  },

  variants: {
    borderColor: {
      primary: {
        borderColor: '$PRIMARY',
      },
    },
    borderSize: {
      sm: {
        borderWidth: 1,
      },
      md: {
        borderWidth: 2,
      },
      lg: {
        borderWidth: 3,
      },
    },
    borderRadius: {
      1: {
        br: 1,
      },
      2: {
        br: 2,
      },
      3: {
        br: 3,
      },
      round: {
        br: 'round',
      },
    },
    padding: {
      sm: {
        padding: '4px 12px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 24px',
      },
    },
  },

  defaultVariants: {
    borderSize: 'md',
    borderRadius: 3,
  },
})

const Label = styled(LabelPrimitive.Root, {
  fontSize: '$EM-LARGE',
  fontWeight: '$BOLD',
  marginBottom: 8,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
})

export interface TextareaProps {
  placeholder?: string
  fullWidth?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  setFieldValue?: (id: string, res: string) => void
  id?: string
  textError?: string
  label?: string
  defaultValue?: string
  fontSize?: 'sm' | 'md' | 'lg'
  description?: string
  borderSize?: 'sm' | 'md' | 'lg'
  padding?: 'sm' | 'md' | 'lg'
  borderRadius?: 1 | 2 | 3 | 'round'
  styles?: {
    container?: CSS
  }
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  fullWidth,
  onChange,
  setFieldValue,
  id,
  label,
  textError,
  defaultValue,
  fontSize,
  description,
  borderSize,
  padding,
  borderRadius,
  styles,
}) => {
  const [isFocus, setIsFocus] = useState(false)

  const onChangeTextarea: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (setFieldValue && id) {
      setFieldValue(id, e.target.value)
    }

    onChange?.(e)
  }

  return (
    <Container
      css={{
        width: fullWidth ? '100%' : 'auto',
        ...styles?.container,
      }}
      onFocus={(): void => setIsFocus(true)}
      onBlur={(): void => setIsFocus(false)}
      fontSize={fontSize}
    >
      {label ? <Label htmlFor={id}>{label}</Label> : null}

      {description ? (
        <Text component="p" style={{ margin: 0, marginBottom: 8 }}>
          {description}
        </Text>
      ) : null}

      <TextareaComponent
        placeholder={placeholder}
        onChange={onChangeTextarea}
        id={id}
        borderColor={isFocus ? 'primary' : undefined}
        defaultValue={defaultValue}
        borderSize={borderSize}
        padding={padding}
        borderRadius={borderRadius}
      />

      {textError ? (
        <Text style={{ marginTop: 5 }} component="span" variant="error">
          {textError}
        </Text>
      ) : null}
    </Container>
  )
}
