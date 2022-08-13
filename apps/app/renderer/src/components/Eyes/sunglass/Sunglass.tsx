import { styled } from '@bubble/ui';
import React from 'react';

const Eyes = styled('img', {
  transform: 'scale(1.2)',
});

export const EyesSunglass: React.FC = () => {
  return <Eyes src="/svg/eyes/sunglass.svg" width="100%" height="100%" />;
};
