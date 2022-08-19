import { GlobalConfig } from '@bubble/configs';
import { BubbleCore } from '@bubble/core';
import { styled } from '@bubble/styles';
import { useEffect } from 'react';

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  userSelect: 'none',
  backgroundColor: '$BACKGROUND',

  '*': {
    cursor: GlobalConfig.showCursor ? undefined : 'none !important',
  },
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
