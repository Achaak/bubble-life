import { getMaxImportantItemInList } from '@bubble/common';
import { useAppSelector } from '@bubble/store';
import { selectElements } from '@bubble/store';
import { styled } from '@bubble/styles';
import React, { useEffect, useState } from 'react';
import type { Onomatopoeias as OnomatopoeiasType } from '@bubble/types';

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const Onomatopoeias: React.FC = () => {
  const [onomatopoeiaDOM, setOnomatopoeiaDOM] = useState<React.ReactNode>(null);

  const { onomatopoeia } = useAppSelector(selectElements);

  useEffect(() => {
    const getOnomatopoeia = async (): Promise<void> => {
      let onomatopoeiaName: OnomatopoeiasType | null = null;

      if (onomatopoeia.action) {
        onomatopoeiaName = onomatopoeia.action.name;
      } else if (onomatopoeia.list.length > 0) {
        onomatopoeiaName = getMaxImportantItemInList<OnomatopoeiasType>(
          onomatopoeia.list
        );
      } else if (onomatopoeia.default) {
        onomatopoeiaName = onomatopoeia.default;
      }

      if (onomatopoeiaName) {
        const { default: Onomatopoeia } =
          await require(`./${onomatopoeiaName}/index`);

        setOnomatopoeiaDOM(<Onomatopoeia />);
      } else {
        setOnomatopoeiaDOM(null);
      }
    };

    getOnomatopoeia();
  }, [onomatopoeia]);

  return <Container>{onomatopoeiaDOM}</Container>;
};
