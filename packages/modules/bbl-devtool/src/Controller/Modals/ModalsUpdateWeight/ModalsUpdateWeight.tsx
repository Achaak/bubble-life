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

export interface ModalsUpdateWeightProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalsUpdateWeight: React.FC<ModalsUpdateWeightProps> = ({
  onClose,
  visible,
}) => {
  const { weight } = useAppSelector(selectVitals);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      weight: weight,
    },
    onSubmit: (values) => {
      socket().emit('setWeight', { value: values.weight });
      onClose();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      closeClickOutside={true}
      hasCloseBtn
      header={<Title component="h2">Update weight</Title>}
      content={
        <Form onSubmit={handleSubmit}>
          <Textfield type="number" onChange={handleChange} id="weight" />
          <Button type="submit">Update</Button>
        </Form>
      }
      gap={{
        container: 'md',
      }}
    />
  );
};
