import { styled } from '@pikas-ui/styles';
import React from 'react';
import { Description } from '../Description/index.js';
import { Label } from '../Label/Label.js';

const Container = styled('div', {
  display: 'flex',
});

const Left = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export interface InputContainerProps {
  label: string;
  description?: string;
  input: React.ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = ({
  label,
  description,
  input,
}) => {
  return (
    <Container>
      <Left>
        <Label>{label}</Label>
        {description && <Description>{description}</Description>}
      </Left>
      <Right>{input}</Right>
    </Container>
  );
};
