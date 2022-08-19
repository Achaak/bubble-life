import { SocketContext } from '@/components/components/SocketProvider';
import { setCurrentUser, useAppSelector } from '@bubble/store';
import { selectCurrentUser } from '@bubble/store';
import { styled } from '@bubble/styles';
import { Button, Textfield } from '@bubble/ui';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$BLACK',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
});

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  customRowGap: 8,
  marginTop: 24,
});

export const NameModal: React.FC = () => {
  const socket = useContext(SocketContext);
  const currentUser = useAppSelector(selectCurrentUser);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
    }),
    onSubmit: ({ name }) => {
      if (!name) {
        return;
      }

      socket?.emit('newUser', { name: name });

      // Set in store
      setCurrentUser({
        name: name,
      });
    },
  });

  return (
    <Container visible={!currentUser}>
      <h1>Bubble Life</h1>
      <Form onSubmit={handleSubmit}>
        <Textfield
          onChange={handleChange}
          id="name"
          label="Your name"
          placeholder="Bubble friend's"
        />

        <Button type="submit" disabled={!values.name} borderRadius="round">
          Validate
        </Button>
      </Form>
    </Container>
  );
};
