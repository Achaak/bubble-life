import { styled } from '@bubble/styles';
import { Button } from '@bubble/ui';
import { socket } from '@bubble/common';
import React from 'react';

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 16,
});

export interface ControllerProps {}

export const Controller: React.FC<ControllerProps> = () => {
  const handleResetBubble = (): void => {
    console.log('[Reset bubble]');
    socket().emit('resetBubble');
  };

  const handleResetActions = (): void => {
    console.log('[Reset actions]');
    socket().emit('resetActions');
  };

  return (
    <ContainerDOM>
      <Button onClick={handleResetBubble}>Reset Bubble</Button>
      <Button onClick={handleResetActions}>Reset Actions</Button>
    </ContainerDOM>
  );
};
