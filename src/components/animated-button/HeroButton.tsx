import { Button } from '@mui/material';
import React from 'react';

type Props={
    label:string
}
function HeroButton({label}:Props) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
      }}
    >
      <Button
        variant="contained"
        color="inherit"
        sx={{
          position: 'fixed',
          borderRadius: '50%',
          height: 70,
          width: 70,
          boxShadow: '0 0 30px skyblue, 0 0 30px skyblue, 0 0 30px skyblue',
          fontSize: 12,
          transition: 'transform 0.4s ease',
          zIndex: 9,
          animation: 'scaleInOut 2s infinite',
          '@keyframes scaleInOut': {
            '0%': {
              transform: 'scale(1)',
            },
            '50%': {
              transform: 'scale(1.1)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
          '&:hover': {
            transform: 'scale(1.1)',
            animation: 'none',
          },
        }}
      >
        {label}
      </Button>
    </div>
  );
}

export default HeroButton;
