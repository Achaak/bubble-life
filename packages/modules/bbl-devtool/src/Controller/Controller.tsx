import type { IconProps } from '@bubble/ui';
import { ButtonIcon } from '@bubble/ui';
import { IconByName, InputContainer, Separator } from '@bubble/ui';
import { Button } from '@bubble/ui';
import { socket } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import React, { useState } from 'react';
import { selectVitals, useAppSelector } from '@bubble/store';
import { styled } from '@bubble/styles';
import { ModalsUpdateHappiness } from './Modals/ModalsUpdateHappiness/index.js';
import { ModalsUpdateHealth } from './Modals/ModalsUpdateHealth/ModalsUpdateHealth.js';
import { ModalsUpdateSaturation } from './Modals/ModalsUpdateSaturation/ModalsUpdateSaturation.js';
import { ModalsUpdateTiredness } from './Modals/ModalsUpdateTiredness/ModalsUpdateTiredness.js';
import { ModalsUpdateWeight } from './Modals/ModalsUpdateWeight/ModalsUpdateWeight.js';

const VitalsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  customColumnGap: 8,
});

export interface ControllerProps {}

const BxEdit: React.FC<IconProps> = (props) => {
  return <IconByName name="bx:edit" {...props} />;
};

export const Controller: React.FC<ControllerProps> = () => {
  const [modalHappinessIsOpen, setModalHappinessIsOpen] = useState(false);
  const [modalHealthIsOpen, setModalHealthIsOpen] = useState(false);
  const [modalSaturationIsOpen, setModalSaturationIsOpen] = useState(false);
  const [modalTirednessIsOpen, setModalTirednessIsOpen] = useState(false);
  const [modalWeightIsOpen, setModalWeightIsOpen] = useState(false);

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
      <ModalsUpdateHappiness
        visible={modalHappinessIsOpen}
        onClose={(): void => setModalHappinessIsOpen(false)}
      />

      <ModalsUpdateHealth
        visible={modalHealthIsOpen}
        onClose={(): void => setModalHealthIsOpen(false)}
      />

      <ModalsUpdateSaturation
        visible={modalSaturationIsOpen}
        onClose={(): void => setModalSaturationIsOpen(false)}
      />

      <ModalsUpdateTiredness
        visible={modalTirednessIsOpen}
        onClose={(): void => setModalTirednessIsOpen(false)}
      />

      <ModalsUpdateWeight
        visible={modalWeightIsOpen}
        onClose={(): void => setModalWeightIsOpen(false)}
      />

      <InputContainer
        label="Happiness"
        input={
          <VitalsContainer>
            <span>
              {Math.round(happiness)}/{BubbleConfig.vitals.happiness.max}
            </span>
            <ButtonIcon
              Icon={BxEdit}
              size={5}
              padding="sm"
              onClick={(): void => setModalHappinessIsOpen(true)}
            />
          </VitalsContainer>
        }
      />
      <InputContainer
        label="Health"
        input={
          <VitalsContainer>
            <span>
              {Math.round(health)}/{BubbleConfig.vitals.health.max}
            </span>
            <ButtonIcon
              Icon={BxEdit}
              size={5}
              padding="sm"
              onClick={(): void => setModalHealthIsOpen(true)}
            />
          </VitalsContainer>
        }
      />
      <InputContainer
        label="Saturation"
        input={
          <VitalsContainer>
            <span>
              {Math.round(saturation)}/{BubbleConfig.vitals.saturation.max}
            </span>
            <ButtonIcon
              Icon={BxEdit}
              size={5}
              padding="sm"
              onClick={(): void => setModalSaturationIsOpen(true)}
            />
          </VitalsContainer>
        }
      />
      <InputContainer
        label="Tiredness"
        input={
          <VitalsContainer>
            <span>
              {Math.round(tiredness)}/{BubbleConfig.vitals.tiredness.max}
            </span>
            <ButtonIcon
              Icon={BxEdit}
              size={5}
              padding="sm"
              onClick={(): void => setModalTirednessIsOpen(true)}
            />
          </VitalsContainer>
        }
      />
      <InputContainer
        label="Weight"
        input={
          <VitalsContainer>
            <span>
              min: {BubbleConfig.vitals.weight.min} / actual:{' '}
              {Math.round(weight)} / max: {BubbleConfig.vitals.weight.max}
            </span>
            <ButtonIcon
              Icon={BxEdit}
              size={5}
              padding="sm"
              onClick={(): void => setModalWeightIsOpen(true)}
            />
          </VitalsContainer>
        }
      />
      <Separator
        css={{
          margin: '8px 0',
        }}
      />
      <InputContainer
        label="Reset Bubble"
        description="Reset the Bubble to its initial state"
        input={
          <Button onClick={handleResetBubble} padding="sm" fontSize="EM-SMALL">
            Reset
          </Button>
        }
      />
      <InputContainer
        label="Reset actions"
        description="Reset the actions to their initial state"
        input={
          <Button onClick={handleResetActions} padding="sm" fontSize="EM-SMALL">
            Reset
          </Button>
        }
      />
      <InputContainer
        label="Reload page"
        description="Reload the page of the Bubble"
        input={
          <Button onClick={handleReloadPage} padding="sm" fontSize="EM-SMALL">
            Reload
          </Button>
        }
      />
    </>
  );
};
