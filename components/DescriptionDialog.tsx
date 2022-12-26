import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../stitches.config';
import { keyframes } from '@stitches/react';

export const DescriptionDialog = ({open, image}: {open: boolean,image: string}) => {
  
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          {/* Hellooooo
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close /> */}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const overlayShow = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  }
})

const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .7)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

const Content = styled(Dialog.Content, {
  backgroundColor: 'black',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 2
})