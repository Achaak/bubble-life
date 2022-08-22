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

export interface ModalsUpdateSaturationProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalsUpdateSaturation: React.FC<ModalsUpdateSaturationProps> = ({
  onClose,
  visible,
}) => {
  const { saturation } = useAppSelector(selectVitals);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      saturation: saturation,
    },
    onSubmit: (values) => {
      socket().emit('setSaturation', { value: values.saturation });
      onClose();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      closeClickOutside={true}
      hasCloseBtn
      header={<Title component="h2">Update saturation</Title>}
      content={
        <Form onSubmit={handleSubmit}>
          <Textfield type="number" onChange={handleChange} id="saturation" />
          <Button type="submit">Update</Button>
        </Form>
      }
      gap={{
        container: 'md',
      }}
    />
  );
};
