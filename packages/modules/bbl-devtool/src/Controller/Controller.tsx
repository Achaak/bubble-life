import { InputContainer } from '@bubble/ui';
import { Button } from '@bubble/ui';
import { socket } from '@bubble/common';
import React from 'react';

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

  const handleReloadPage = (): void => {
    console.log('[Reload page]');
    socket().emit('reloadPage');
  };

  return (
    <>
      <InputContainer
        label="Reset bubble"
        description="Reset the bubble to its initial state"
        input={<Button onClick={handleResetBubble}>Reset Bubble</Button>}
      />
      <InputContainer
        label="Reset actions"
        description="Reset the actions to their initial state"
        input={<Button onClick={handleResetActions}>Reset Actions</Button>}
      />
      <InputContainer
        label="Reload page"
        description="Reload the page of the Bubble"
        input={<Button onClick={handleReloadPage}>Reload Page</Button>}
      />
    </>
  );
};
