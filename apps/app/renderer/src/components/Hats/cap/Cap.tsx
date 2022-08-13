import { styled } from '@bubble/ui';
import React from 'react';

const Hat = styled('img', {});

export const HatCap: React.FC = () => {
  return <Hat src="/svg/hats/cap.svg" width="80%" height="100%" />;
};
