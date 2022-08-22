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

export interface ModalsUpdateHappinessProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalsUpdateHappiness: React.FC<ModalsUpdateHappinessProps> = ({
  onClose,
  visible,
}) => {
  const { happiness } = useAppSelector(selectVitals);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      happiness: happiness,
    },
    onSubmit: (values) => {
      socket().emit('setHappiness', { value: values.happiness });
      onClose();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      closeClickOutside={true}
      hasCloseBtn
      header={<Title component="h2">Update happiness</Title>}
      content={
        <Form onSubmit={handleSubmit}>
          <Textfield type="number" onChange={handleChange} id="happiness" />
          <Button type="submit">Update</Button>
        </Form>
      }
      gap={{
        container: 'md',
      }}
    />
  );
};
