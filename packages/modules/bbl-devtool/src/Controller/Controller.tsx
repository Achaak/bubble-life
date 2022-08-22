import { InputContainer, Separator } from '@bubble/ui';
import { Button } from '@bubble/ui';
import { socket } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import React from 'react';
import { selectVitals, useAppSelector } from '@bubble/store';

export interface ControllerProps {}

export const Controller: React.FC<ControllerProps> = () => {
  const { happiness, health, saturation, tiredness, weight } =
    useAppSelector(selectVitals);

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
        label="Happiness"
        input={
          <span>
            {Math.round(happiness)}/{BubbleConfig.vitals.happiness.max}
          </span>
        }
      />
      <InputContainer
        label="Health"
        input={
          <span>
            {Math.round(health)}/{BubbleConfig.vitals.health.max}
          </span>
        }
      />
      <InputContainer
        label="Saturation"
        input={
          <span>
            {Math.round(saturation)}/{BubbleConfig.vitals.saturation.max}
          </span>
        }
      />
      <InputContainer
        label="Tiredness"
        input={
          <span>
            {Math.round(tiredness)}/{BubbleConfig.vitals.tiredness.max}
          </span>
        }
      />
      <InputContainer
        label="Weight"
        input={
          <span>
            min: {BubbleConfig.vitals.weight.min} / actual: {Math.round(weight)}{' '}
            / max: {BubbleConfig.vitals.weight.max}
          </span>
        }
      />
      <Separator
        style={{
          margin: '8px 0',
        }}
      />
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
