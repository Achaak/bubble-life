import { BubbleCore } from '@bubble/core';
import { styled } from '@bubble/ui';
import { useEffect } from 'react';

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  cursor: process.env.NODE_ENV === 'development' ? 'default' : 'none',
  userSelect: 'none',
});

interface CustomProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<CustomProps> = ({ children }) => {
  useEffect(() => {
    new BubbleCore();
  }, []);

  return <Container>{children}</Container>;
};
