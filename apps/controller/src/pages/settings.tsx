import { LayoutDefault } from '@/components/layouts/default';
import React from 'react';
import { InputContainer, Switch } from '@bubble/ui';

import type { NextPageWithLayout } from './_app';
import { selectShowFPS, useAppSelector } from '@bubble/store';
import { socket } from '@bubble/common';

const Settings: NextPageWithLayout = () => {
  const showFps = useAppSelector(selectShowFPS);

  const handleShowFpsChange = (bool: boolean): void => {
    socket().emit('setShowFPS', bool);
  };

  console.log(showFps);

  return (
    <>
      <InputContainer
        label="Show FPS"
        description="Show the FPS in the top left corner"
        input={
          <Switch
            key={`show-fps-${showFps}`}
            id="showFps"
            defaultChecked={showFps}
            onChange={handleShowFpsChange}
          />
        }
        id="showFps"
      />
    </>
  );
};

Settings.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Settings;
