import type { CSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as LabelPrimitive from '@radix-ui/react-label';
import React, { useRef, useState } from 'react';
import { Text } from '../../Text/index.js';

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

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
});

const InputContainer = styled('div', {
  flex: 1,
  overflow: 'hidden',
  br: 'lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$WHITE',
  borderColor: '$GRAY_LIGHT',
  borderWidth: 1,
  borderStyle: 'solid',

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
        br: 'sm',
      },
      2: {
        br: 'md',
      },
      3: {
        br: 'lg',
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
    borderRadius: 'round',
  },
});

const Input = styled('input', {
  width: '100%',
  outline: 'none',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$TRANSPARENT',

  '&::placeholder': {
    color: '$GRAY',
  },
});

const Label = styled(LabelPrimitive.Root, {
  fontSize: '$EM-LARGE',
  fontWeight: '$BOLD',
  marginBottom: 8,
  cursor: 'pointer',
  display: 'block',
});

const LeftContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
});

const RightContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 8,
});

export interface TextfieldProps {
  placeholder?: string;
  type?: string;
  id?: string;
  label?: string;
  name?: string;
  borderRadius?: 1 | 2 | 3 | 'round';
  padding?: 'sm' | 'md' | 'lg';
  fontSize?: 'sm' | 'md' | 'lg';
  borderSize?: 'sm' | 'md' | 'lg';
  textError?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue?: (id: string, res: string) => void;
  styles?: {
    container?: CSS;
    inputContainer?: CSS;
    input?: CSS;
  };
  defaultValue?: string | number;
  autoComplete?: string;
  min?: number;
  max?: number;
  right?: React.ReactNode;
  left?: React.ReactNode;
  description?: string;
}

export const Textfield: React.FC<TextfieldProps> = ({
  setFieldValue,
  id = '',
  name,
  type,
  onChange,
  placeholder,
  borderRadius,
  padding,
  fontSize,
  textError,
  label,
  styles,
  borderSize,
  defaultValue,
  autoComplete,
  min,
  max,
  right,
  left,
  description,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (type === 'number' && ref.current) {
      const value = parseInt(e.target.value);

      if (max !== undefined && value > max) {
        ref.current.value = `${max}`;
      } else if (min !== undefined && value < min) {
        ref.current.value = `${min}`;
      }
    }

    if (setFieldValue && id) {
      setFieldValue(id, e.target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container
      fontSize={fontSize}
      onFocus={(): void => setIsFocus(true)}
      onBlur={(): void => setIsFocus(false)}
      css={{
        ...styles?.container,
      }}
    >
      {label ? <Label htmlFor={id}>{label}</Label> : null}

      {description ? (
        <Text component="p" style={{ margin: 0, marginBottom: 8 }}>
          {description}
        </Text>
      ) : null}

      <InputContainer
        borderRadius={borderRadius}
        borderColor={isFocus ? 'primary' : undefined}
        borderSize={borderSize}
        padding={padding}
        css={{
          ...styles?.inputContainer,
        }}
      >
        {left && <LeftContainer htmlFor={id}>{left}</LeftContainer>}
        <Input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChangeInput}
          name={name}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          min={min}
          max={max}
          css={{
            ...styles?.input,
          }}
        />
        {right && <RightContainer htmlFor={id}>{right}</RightContainer>}
      </InputContainer>

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  );
};

Textfield.defaultProps = {
  padding: 'md',
};
