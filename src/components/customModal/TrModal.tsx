// TrModal.tsx
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box, { BoxProps } from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export type TrModalProps = {
  open: boolean;
  onClose: () => void;
  children: any;
};
// TrModal.tsx

export default function TrModal({ open, onClose, children }: TrModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
    >
      <Fade in={open} timeout={200}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            overflow: 'hidden', // 👈 important
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
