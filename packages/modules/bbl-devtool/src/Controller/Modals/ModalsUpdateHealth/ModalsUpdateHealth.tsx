import { selectVitals, useAppSelector } from '@bubble/store';
import { styled } from '@bubble/styles';
import { Button, Modal, Textfield, Title } from '@bubble/ui';
import React from 'react';
import { useFormik } from 'formik';
import { socket } from '@bubble/common';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 8,
});

export interface ModalsUpdateHealthProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalsUpdateHealth: React.FC<ModalsUpdateHealthProps> = ({
  onClose,
  visible,
}) => {
  const { health } = useAppSelector(selectVitals);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      health: health,
    },
    onSubmit: (values) => {
      socket().emit('setHealth', { value: values.health });
      onClose();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      closeClickOutside={true}
      hasCloseBtn
      header={<Title component="h2">Update health</Title>}
      content={
        <Form onSubmit={handleSubmit}>
          <Textfield type="number" onChange={handleChange} id="health" />
          <Button type="submit">Update</Button>
        </Form>
      }
      gap={{
        container: 'md',
      }}
    />
  );
};
