import { useAppSelector } from '@bubble/store';
import { selectElements } from '@bubble/store';
import { styled } from '@bubble/ui';
import React, { useEffect, useState } from 'react';
import type { Clothes as ClothesType } from '@bubble/types';
import { getMaxImportantItemInList } from '@bubble/common';

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

interface CustomProps {
  children: React.ReactNode;
}

export const Clothes: React.FC<CustomProps> = ({ children }) => {
  const [clotheDOM, setClotheDOM] = useState<React.ReactNode>(null);

  const { clothe } = useAppSelector(selectElements);

  useEffect(() => {
    const getClothe = async (): Promise<void> => {
      let clotheName: ClothesType | null = null;

      if (clothe.action) {
        clotheName = clothe.action.name;
      } else if (clothe.list.length > 0) {
        clotheName = getMaxImportantItemInList<ClothesType>(clothe.list);
      } else if (clothe.default) {
        clotheName = clothe.default;
      }

      if (clotheName) {
        const { default: Clothe } = await require(`./${clotheName}/index`);

        setClotheDOM(<Clothe />);
      } else {
        setClotheDOM(null);
      }
    };

    getClothe();
  }, [clothe]);

  return (
    <Container>
      {clotheDOM}
      {children}
    </Container>
  );
};
