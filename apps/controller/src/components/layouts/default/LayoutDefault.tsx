import { IconByName } from '@bubble/ui';
import { styled } from '@bubble/styles';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { NameModal } from './NameModal';
import { socket } from '@bubble/common';
import { setActions, setBubble, setSettings } from '@bubble/store';

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
  marginTop: 16,
  width: 1200,
  maxWidth: '100%',
  margin: '0 auto',
});

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
});

const Title = styled('h1', {
  textTransform: 'capitalize',
  fontSize: '$EM-XX-LARGE',
});

interface CustomProps {
  children: React.ReactNode;
}

export const LayoutDefault: React.FC<CustomProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const s = socket();

    s.on('actionsStore', setActions);
    s.on('bubbleStore', setBubble);
    s.on('settingsStore', setSettings);
  }, []);

  return (
    <>
      <NameModal />

      <Container>
        {router.asPath !== '/' && (
          <Top>
            <IconByName
              name="bxs:chevron-left"
              onClick={(): void => router.back()}
              size={32}
            />
            <Title>{router.asPath.replace('/', '')}</Title>
          </Top>
        )}
        <Content>{children}</Content>
      </Container>
    </>
  );
};
