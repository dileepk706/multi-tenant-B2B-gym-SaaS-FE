import { useState, useCallback } from 'react';
// @mui
import { m } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// components
import Iconify from '@components/iconify';
import { varHover } from '@components/animate';
import CustomPopover, { usePopover } from '@components/custom-popover';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    id: 'g1',
    name: 'Elite Fitness Center',
    address: 'Delhi, India',
    logo: 'solar:dumbbell-outline',
  },
  {
    id: 'g2',
    name: 'Power Gym - Mumbai',
    address: 'Mumbai, India',
    logo: 'solar:kick-boxing-outline',
  },
  {
    id: 'g3',
    name: 'Fit Pro Studio',
    address: 'Bangalore, India',
    logo: 'solar:users-group-rounded-outline',
  },
];

type Props = {
  mini?: boolean;
};

export default function GymSelect({ mini }: Props) {
  const [selectedGym, setSelectedGym] = useState(OPTIONS[0]);

  const popover = usePopover();

  const handleSelectGym = useCallback(
    (gymId: string) => {
      const gym = OPTIONS.find((g) => g.id === gymId);
      if (gym) {
        setSelectedGym(gym);
      }
      popover.onClose();
    },
    [popover]
  );

  const renderContent = mini ? (
    <ButtonBase
      onClick={popover.onOpen}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 1,
        border: (theme) => `solid 1px ${alpha(theme.palette.secondary.main, 0.1)}`,
        bgcolor: alpha('#ffffff', 0.05),
        ...(popover.open && {
           bgcolor: alpha('#ffffff', 0.12),
        }),
      }}
    >
      <Avatar
        src={selectedGym.logo.includes(':') ? '' : selectedGym.logo}
        alt={selectedGym.name}
        sx={{
          width: 32,
          height: 32,
          bgcolor: 'transparent',
          color: 'secondary.main',
        }}
      >
        <Iconify icon={selectedGym.logo} width={24} />
      </Avatar>
    </ButtonBase>
  ) : (
    <ButtonBase
      component={m.button}
      whileTap="tap"
      whileHover="hover"
      variants={varHover(0.98)}
      onClick={popover.onOpen}
      sx={{
        px: 1.5,
        py: 1,
        width: '100%',
        borderRadius: 1,
        textAlign: 'left',
        justifyContent: 'flex-start',
        border: (theme) => `solid 1px ${alpha(theme.palette.divider, 0.1)}`,
        bgcolor: alpha('#ffffff', 0.03),
        ...(popover.open && {
           bgcolor: alpha('#ffffff', 0.08),
        }),
      }}
    >
      <Avatar
        src={selectedGym.logo.includes(':') ? '' : selectedGym.logo}
        alt={selectedGym.name}
        sx={{
          width: 36,
          height: 36,
          bgcolor: alpha('#ffffff', 0.08),
          color: 'secondary.main',
          border: (theme) => `solid 1px ${alpha(theme.palette.secondary.main, 0.2)}`,
        }}
      >
        <Iconify icon={selectedGym.logo} width={24} />
      </Avatar>

      <Stack sx={{ ml: 1.5, flexGrow: 1, overflow: 'hidden' }}>
        <Typography variant="subtitle2" noWrap sx={{ color: 'common.white', fontWeight: 700 }}>
          {selectedGym.name}
        </Typography>
        <Typography variant="caption" noWrap sx={{ color: 'grey.500' }}>
          {selectedGym.address}
        </Typography>
      </Stack>

      <Iconify
        icon={popover.open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
        width={16}
        sx={{ color: 'grey.600', ml: 1 }}
      />
    </ButtonBase>
  );

  return (
    <>
      {renderContent}

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 220, p: 0 }}>
        <Box sx={{ p: 1 }}>
          <Typography variant="overline" sx={{ px: 1, py: 0.5, color: 'text.disabled', display: 'block' }}>
            Switch Branch
          </Typography>
          {OPTIONS.map((option) => (
            <MenuItem
              key={option.id}
              selected={option.id === selectedGym.id}
              onClick={() => handleSelectGym(option.id)}
              sx={{ borderRadius: 0.75, my: 0.5 }}
            >
              <Avatar
                 src={option.logo.includes(':') ? '' : option.logo}
                 sx={{ width: 28, height: 28, mr: 1.5, bgcolor: 'action.hover', color: 'primary.main' }}
              >
                <Iconify icon={option.logo} width={18} />
              </Avatar>
              <Stack>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{option.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{option.address}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Box>
      </CustomPopover>
    </>
  );
}
