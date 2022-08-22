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

export interface ModalsUpdateTirednessProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalsUpdateTiredness: React.FC<ModalsUpdateTirednessProps> = ({
  onClose,
  visible,
}) => {
  const { tiredness } = useAppSelector(selectVitals);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      tiredness: tiredness,
    },
    onSubmit: (values) => {
      socket().emit('setTiredness', { value: values.tiredness });
      onClose();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      closeClickOutside={true}
      hasCloseBtn
      header={<Title component="h2">Update tiredness</Title>}
      content={
        <Form onSubmit={handleSubmit}>
          <Textfield type="number" onChange={handleChange} id="tiredness" />
          <Button type="submit">Update</Button>
        </Form>
      }
      gap={{
        container: 'md',
      }}
    />
  );
};
