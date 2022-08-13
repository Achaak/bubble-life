import { ControllerModule } from '@bubble/modules';
import { useRouter } from 'next/router';
import React from 'react';

export const ModuleContainer: React.FC = () => {
  const router = useRouter();

  if (router.query.moduleId) {
    return <ControllerModule name={router.query.moduleId as string} />;
  } else {
    return <></>;
  }
};
