 
import { Dialog,DialogProps } from '@mui/material';
import { memo } from 'react';

type Props = DialogProps&{
  open: boolean;
  onClose: VoidFunction;
  children?: React.ReactNode;
  width?:string|number
};

function CustomModal({ open, onClose ,children,...other}: Props) {


  return (
    <Dialog
      // fullWidth
      sx={{width:'100%'}}
      maxWidth={false}
      PaperProps={{
        sx: { maxWidth: 'full',p:2 },
      }}
      onClose={onClose}
      open={open}
      {...other}
      
    >
      {children}
    </Dialog>
  );
}

export default memo(CustomModal) 
