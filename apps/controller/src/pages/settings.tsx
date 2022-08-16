// import { SocketContext } from '@/components/components/SocketProvider';
import { LayoutDefault } from '@/components/layouts/default';
import React from 'react';

import type { NextPageWithLayout } from './_app';

const Settings: NextPageWithLayout = () => {
  // const socket = useContext(SocketContext);

  return <></>;
};

Settings.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Settings;
