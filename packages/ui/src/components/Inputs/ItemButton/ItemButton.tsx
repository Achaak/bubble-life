import React from 'react';
import { styled } from '@pikas-ui/styles';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 'lg',
  height: 80,
  width: 80,
  margin: 8,
});

const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Text = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$EM-SMALL',
});

interface CustomProps {
  onClick?: () => void;
  text: string;
  icon: string;
}

export const ItemButton: React.FC<CustomProps> = ({ onClick, text, icon }) => {
  return (
    <Container
      onClick={onClick}
      css={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <IconContainer>
        <span className="material-icons-outlined size-32">{icon}</span>
      </IconContainer>
      <Text>{text}</Text>
    </Container>
  );
};
