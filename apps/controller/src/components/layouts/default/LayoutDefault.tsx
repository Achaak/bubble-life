import { IconByName, styled } from '@bubble/ui';
import { useRouter } from 'next/router';
import React from 'react';
import { NameModal } from './NameModal';

const Container = styled('div', {
  padding: 16,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$BLACK',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Top = styled('div', {
  display: 'flex',
});

const Title = styled('h1', {});

interface CustomProps {
  children: React.ReactNode;
}

export const LayoutDefault: React.FC<CustomProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <NameModal />

      <Container>
        {router.pathname !== '/' && (
          <Top>
            <IconByName
              name="bxs:arrow-left"
              onClick={(): void => router.back()}
              size={20}
            />
            <Title>{router.pathname.replace('/', '')}</Title>
          </Top>
        )}
        <Content>{children}</Content>
      </Container>
    </>
  );
};
