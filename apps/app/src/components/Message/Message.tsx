import { selectMessage, useAppSelector } from '@bubble/store';
import { styled } from '@bubble/styles';
import React from 'react';

const Text = styled('p', {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(100%, -100%)',
  fontSize: '$EM-XXX-LARGE',
  lineHeight: '$EM-X-LARGE',
  color: '$WHITE',
  display: 'block',
  textDecoration: 'none',
  whiteSpace: 'pre-line',
  fontFamily: 'Indie Flower',
});

export const Message: React.FC = () => {
  const { current } = useAppSelector(selectMessage);

  if (!current) {
    return <></>;
  }

  return <Text>{current.content}</Text>;
};
