import { styled } from '@bubble/styles';
import { Title } from '@bubble/ui';
import React from 'react';

const HeaderContainer = styled('div', {});

export const ModalActionsHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Title component="h1">Actions</Title>
    </HeaderContainer>
  );
};
