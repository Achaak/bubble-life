import { BubbleConfig } from '@bubble/configs';
import { useAppSelector } from '@bubble/store';
import { selectName, selectVitals } from '@bubble/store';
import { styled } from '@bubble/styles';
import React from 'react';

import { Bar } from './Bar';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  paddingTop: 8,
  customColumnGap: 32,
});

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  customColumnGap: 16,

  '@md': {
    customColumnGap: 24,
  },
});

const Center = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const Name = styled('span', {
  fontSize: '1.5em',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  customColumnGap: 16,

  '@md': {
    customColumnGap: 24,
  },
});

export const Stats: React.FC = () => {
  const { saturation, happiness, health, tiredness } =
    useAppSelector(selectVitals);
  const name = useAppSelector(selectName);

  return (
    <Container>
      <Left>
        <Bar
          percentage={(100 / BubbleConfig.vitals.saturation.max) * saturation}
          icon="restaurant"
        />
        <Bar
          percentage={(100 / BubbleConfig.vitals.happiness.max) * happiness}
          icon="celebration"
        />
      </Left>
      <Center>
        <Name>{name}</Name>
      </Center>
      <Right>
        <Bar
          percentage={(100 / BubbleConfig.vitals.tiredness.max) * tiredness}
          icon="bed"
        />
        <Bar
          percentage={(100 / BubbleConfig.vitals.health.max) * health}
          icon="favorite_border"
        />
      </Right>
    </Container>
  );
};
