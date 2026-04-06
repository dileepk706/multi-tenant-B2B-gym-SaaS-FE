// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// theme
import { bgBlur } from '@theme/css';
// routes
import { paths } from 'shared/routes';
// hooks
import { useOffSetTop } from '@hooks/useOffSetTop';
// components
import { LogoText } from '@components/logo';
import { RouterLink } from '@routes/components';
//
import { HEADER } from '../configLayout';
import HeaderShadow from './HeaderShadow';
import SettingsButton from './SettingsButton';

// ----------------------------------------------------------------------

export default function HeaderSimple() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <LogoText />
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
