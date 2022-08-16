import React from 'react';
import { styled } from '@pikas-ui/styles';
import { IconByName } from '@pikas-ui/icons';

const Container = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 'lg',
  height: 120,
  width: 120,
  margin: 12,
});

const Text = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$EM-SMALL',
  textTransform: 'capitalize',
});

interface CustomProps {
  onClick?: () => void;
  text: string;
  icon: string;
}

export const ItemButton: React.FC<CustomProps> = ({ onClick, text, icon }) => {
  return (
    <Container onClick={onClick}>
      <IconByName name={icon} size={48} />
      <Text>{text}</Text>
    </Container>
  );
};
