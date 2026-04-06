import { Box, Typography, BoxProps } from '@mui/material';

import { memo } from 'react';
import Iconify from '@components/iconify';

type Props = BoxProps & {
  startIcon?: string;
  endIcon?: string;
  buttonText: string;
};
function ButtonWithBox({ startIcon,endIcon, buttonText, ...other }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs:1,md:3},
        cursor: 'pointer',
        backgroundColor: '#e8edec',
        py: 1,
        px: 2,
        borderRadius: 1,
        '&:hover': { backgroundColor: '#e3e3e3' },
        '&:active': { transform: 'scale(0.95)' },
      }}
      {...other}
    >
      {startIcon && <Iconify icon={startIcon} />}

      <Typography sx={{typography:{xs:'body2',md:"subtitle2"}}} noWrap >
        {buttonText}
      </Typography>
      {endIcon && <Iconify icon={endIcon} />}

    </Box>
  );
}

export default memo(ButtonWithBox);
