import { styled } from '@bubble/styles';
import React, { useEffect, useReducer, useRef } from 'react';

const Container = styled('div', {
  zIndex: '$XXX-HIGH',
  position: 'fixed',
  width: 100,
  padding: 4,
  fontWeight: 'bold',
  pointerEvents: 'none',
});

const Span = styled('span', {
  fontSize: '$EM-SMALL',
  color: '$PRIMARY',
});

const BarContainer = styled('div', {
  position: 'relative',
  background: '$GRAY_DARKER',
  height: 40,
  br: 'xs',
  overflow: 'hidden',
});

const Bar = styled('div', {
  position: 'absolute',
  bottom: 0,
  width: '1%',
  background: '$PRIMARY',
});

type FPSStatsProps = {
  graphHeight?: number;
  graphWidth?: number;
};

export const FPSStats: React.FC<FPSStatsProps> = () => {
  const [state, dispatch] = useReducer(
    (state: {
      length: number;
      max: number;
      frames: number;
      prevTime: number;
      fps: number[];
    }) => {
      const currentTime = Date.now();
      if (currentTime > state.prevTime + 1000) {
        const nextFPS = Math.round(
          (state.frames * 1000) / (currentTime - state.prevTime)
        );
        return {
          max: Math.max(state.max, nextFPS),
          length: Math.min(state.length + 1, 100),
          fps: [...state.fps, nextFPS].slice(-100),
          frames: 1,
          prevTime: currentTime,
        };
      } else {
        return { ...state, frames: state.frames + 1 };
      }
    },
    {
      length: 0,
      max: 0,
      frames: 0,
      prevTime: Date.now(),
      fps: [],
    }
  );

  const requestRef = useRef<number>();
  const tick = (): void => {
    dispatch();
    requestRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(tick);
    return (): void => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const { fps, max, length } = state;

  return (
    <Container>
      <Span>{fps[length - 1]} FPS</Span>
      <BarContainer>
        {fps.map((frame, i) => (
          <Bar
            key={`fps-${i}`}
            css={{
              right: `${length - 1 - i}%`,
              height: `${(100 * frame) / max}%`,
            }}
          />
        ))}
      </BarContainer>
    </Container>
  );
};
