import React, { useState } from 'react';
import type { IconProps } from '@bubble/ui';
import { ButtonIcon, IconByName } from '@bubble/ui';
import { styled } from '@bubble/styles';
import { ModalInventory } from '../components/Modals/Inventory/index.js';
import { ModalStats } from '../components/Modals/Stats/index.js';
import { ModalActions } from '../components/Modals/Actions/index.js';

const Content = styled('div', {
  display: 'flex',
  customColumnGap: 16,
});

const SportsSoccerIcon: React.FC<IconProps> = (props) => {
  return <IconByName name="material-symbols:sports-soccer" {...props} />;
};

const BackpackIcon: React.FC<IconProps> = (props) => {
  return <IconByName name="material-symbols:backpack" {...props} />;
};

// const BarChartIcon: React.FC<IconProps> = (props) => {
//   return <IconByName name="material-symbols:bar-chart" {...props} />;
// };

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  return (
    <>
      <ModalInventory
        visible={isInventoryOpen}
        onClose={(): void => setIsInventoryOpen(false)}
      />
      <ModalStats
        visible={isStatsOpen}
        onClose={(): void => setIsStatsOpen(false)}
      />
      <ModalActions
        visible={isActionsOpen}
        onClose={(): void => setIsActionsOpen(false)}
      />

      <Content>
        <ButtonIcon
          Icon={SportsSoccerIcon}
          onClick={(): void => setIsActionsOpen(true)}
        />
        <ButtonIcon
          Icon={BackpackIcon}
          onClick={(): void => setIsInventoryOpen(true)}
        />
        {/* <ButtonIcon
          Icon={BarChartIcon}
          onClick={(): void => setIsStatsOpen(true)}
        /> */}
      </Content>
    </>
  );
};
