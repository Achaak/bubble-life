import { AppModules } from '@bubble/modules';
import { styled } from '@bubble/styles';
import { Bubble } from '@/components/Bubble';
import { Stats } from '@/components/Stats';
import { DefaultLayout } from '@/components/layouts/default';
import React from 'react';

import type { NextPageWithLayout } from './_app';
import { selectShowFPS, useAppSelector } from '@bubble/store';
import { FPSStats } from '@/components/FPSStats';

const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
});

const Home: NextPageWithLayout = () => {
  const showFPS = useAppSelector(selectShowFPS);

  return (
    <>
      {showFPS ? <FPSStats /> : null}

      <Overlay>
        <AppModules />
        <Bubble />
        <Stats />
      </Overlay>
    </>
  );
};

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
