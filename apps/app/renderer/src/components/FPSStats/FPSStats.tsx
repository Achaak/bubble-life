import React, { useEffect, useReducer, useRef } from 'react';

type FPSStatsProps = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  graphHeight?: number;
  graphWidth?: number;
};

export const FPSStats: React.FC<FPSStatsProps> = ({
  top = 0,
  right = 'auto',
  bottom = 'auto',
  left = 0,
  graphHeight = 30,
  graphWidth = 70,
}) => {
  const [state, dispatch] = useReducer(
    (state: {
      len: number;
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
          len: Math.min(state.len + 1, graphWidth),
          fps: [...state.fps, nextFPS].slice(-graphWidth),
          frames: 1,
          prevTime: currentTime,
        };
      } else {
        return { ...state, frames: state.frames + 1 };
      }
    },
    {
      len: 0,
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

  const { fps, max, len } = state;

  return (
    <div
      style={{
        zIndex: 999999,
        position: 'fixed',
        height: 46,
        width: graphWidth + 6,
        padding: 3,
        backgroundColor: '#000',
        color: '#00ffff',
        fontSize: '9px',
        lineHeight: '10px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        boxSizing: 'border-box',
        pointerEvents: 'none',
        top,
        right,
        bottom,
        left,
      }}
    >
      <span>{fps[len - 1]} FPS</span>
      <div
        style={{
          position: 'absolute',
          left: 3,
          right: 3,
          bottom: 3,
          height: graphHeight,
          background: '#282844',
          boxSizing: 'border-box',
        }}
      >
        {fps.map((frame, i) => (
          <div
            key={`fps-${i}`}
            style={{
              position: 'absolute',
              bottom: 0,
              right: `${len - 1 - i}px`,
              height: `${(graphHeight * frame) / max}px`,
              width: 1,
              background: '#00ffff',
              boxSizing: 'border-box',
            }}
          />
        ))}
      </div>
    </div>
  );
};
