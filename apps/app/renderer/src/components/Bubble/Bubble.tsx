import { BubbleConfig } from '@bubble/configs';
import { GlobalConfig } from '@bubble/configs';
import { addPlayActionInWaitingList } from '@bubble/core/dist/actions/play';
import { getBubble, useAppSelector } from '@bubble/store';
import { selectVitals } from '@bubble/store';
import { AnimationList } from '@bubble/core';
import { keyframes, styled } from '@bubble/styles';
import React, { useEffect, useState } from 'react';

import { Bodies } from '../Bodies';
import { Clothes } from '../Clothes';
import { Eyes } from '../Eyes';
import { Hats } from '../Hats';
import { Onomatopoeias } from '../Onomatopoeias';
import { Message } from '../Message';
import { getMaxImportantItemInList } from '@bubble/common';
import type { AnimationConfig } from '@bubble/types';

const Container = styled('div', {
  position: 'fixed',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  cursor: GlobalConfig.clickable ? 'pointer' : 'default',
});

const Size = styled('div', {
  position: 'relative',
});

const Content = styled('div', {
  height: '100%',
  width: '100%',
  transformOrigin: 'bottom',
  position: 'relative',
});

const SCALE_MAX = 1.5;
const SCALE_MIN = 0.5;

export const Bubble: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [animationPart, setAnimationPart] = useState<string | undefined>(
    undefined
  );
  const animationPartInfosRef = React.useRef<{
    endAt: number;
    id: number;
  }>();
  const requestRef = React.useRef<number>();
  // const previousTimeRef = React.useRef<number>();
  const currentAnimationRef = React.useRef<AnimationConfig | undefined>();

  const { weight } = useAppSelector(selectVitals);

  useEffect(() => {
    const getSize = (): number => {
      const middle =
        BubbleConfig.vitals.weight.min +
        (BubbleConfig.vitals.weight.max - BubbleConfig.vitals.weight.min) / 2;

      if (weight > middle) {
        const min = middle;
        const max = BubbleConfig.vitals.weight.max;
        const input = weight;

        return 1 + ((SCALE_MAX - 1) * (input - min)) / (max - min);
      } else if (weight < middle) {
        const min = BubbleConfig.vitals.weight.min;
        const max = middle;
        const input = weight;

        return 1 + ((SCALE_MIN - 1) * (input - max)) / (min - max);
      } else {
        return 1;
      }
    };

    setScale(getSize());
  }, [weight]);

  const handleClickOnBubble = (): void => {
    if (!GlobalConfig.clickable) {
      return;
    }

    // TODO Check if bubble play is already in the list
    addPlayActionInWaitingList({
      duration: 10000,
      importance: 1,
      start: Date.now(),
      memory: {
        recoverValue: 0.1,
      },
    });
  };

  const getAnimation = (): void => {
    const {
      animation: {
        action: animationAction,
        default: animationDefault,
        list: animationList,
      },
    } = getBubble();

    let animationName: string | null = null;

    if (animationAction) {
      animationName = animationAction.name;
    } else if (animationList.length > 0) {
      animationName = getMaxImportantItemInList(animationList);
    } else if (animationDefault) {
      animationName = animationDefault;
    }

    const animationFind = AnimationList.find(
      (item) => item.name === animationName
    );

    currentAnimationRef.current = animationFind;
  };

  const applyAnimation = (timestamp: number): void => {
    if (!currentAnimationRef.current) {
      return;
    }

    const { configs } = currentAnimationRef.current;

    if (!animationPartInfosRef.current) {
      const config = configs[0];
      const k = keyframes(config.style);
      setAnimationPart(`${k} ${config.duration}ms ${config.easing} forwards`);
      animationPartInfosRef.current = {
        endAt: timestamp + config.duration,
        id: 0,
      };
      return;
    } else if (animationPartInfosRef.current.endAt < timestamp) {
      if (animationPartInfosRef.current.id >= configs.length - 1) {
        setAnimationPart(undefined);
        animationPartInfosRef.current = undefined;
        currentAnimationRef.current = undefined;
        return;
      }

      const { endAt, id } = animationPartInfosRef.current;
      if (timestamp >= endAt) {
        const config = configs[id + 1];
        const k = keyframes(config.style);
        setAnimationPart(`${k} ${config.duration}ms ${config.easing} forwards`);
        animationPartInfosRef.current = {
          endAt:
            timestamp + currentAnimationRef.current.configs[id + 1].duration,
          id: id + 1,
        };
      }
    }
  };

  const loop = (timestamp?: number): void => {
    if (!timestamp) {
      timestamp = 0;
    }

    applyAnimation(timestamp);

    if (!currentAnimationRef.current) {
      getAnimation();
    }

    requestRef.current = requestAnimationFrame(loop);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <Container onClick={handleClickOnBubble}>
      <Size
        css={{
          transform: `scale(${scale})`,
        }}
      >
        <Content
          css={{
            animation: animationPart,
          }}
        >
          <Bodies>
            <Eyes />
          </Bodies>
          <Hats />
          <Clothes />
          <Onomatopoeias />
          <Message />
        </Content>
      </Size>
    </Container>
  );
};
