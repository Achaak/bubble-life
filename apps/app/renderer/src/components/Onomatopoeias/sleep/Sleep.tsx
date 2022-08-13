import { keyframes, styled } from '@bubble/ui';
import React from 'react';

const scale = keyframes({
  '0%, 100%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1)' },
});

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const LetterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  animation: `${scale} 3000ms infinite`,
  transitionTimingFunction: 'easeInOutCirc',
});

const Sleep = styled('img', {});

export const OnomatopoeiaSleep: React.FC = () => {
  return (
    <Container>
      <LetterContainer
        css={{
          left: '-55%',
          top: '-40%',
          animationDelay: '800ms',
          width: '25%',
        }}
      >
        <Sleep src="/svg/onomatopoeias/sleep.svg" width="100%" />
      </LetterContainer>
      <LetterContainer
        css={{
          left: '-20%',
          top: '-15%',
          animationDelay: '400ms',
          width: '12%',
        }}
      >
        <Sleep src="/svg/onomatopoeias/sleep.svg" width="100%" />
      </LetterContainer>
      <LetterContainer
        css={{
          left: '0%',
          top: '0%',
          animationDelay: '0ms',
          width: '5%',
        }}
      >
        <Sleep src="/svg/onomatopoeias/sleep.svg" width="100%" />
      </LetterContainer>
    </Container>
  );
};
