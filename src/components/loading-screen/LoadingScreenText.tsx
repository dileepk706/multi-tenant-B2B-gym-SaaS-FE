import { Dialog, Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CustomModal from '../customModal/CustomModal';
import LinearProgressLoading from './LinearProgressLoading';
import SplashScreen from './SplashScreen';

// ----------------------------------------------------------------------

export default function LoadingScreenWithText({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '85vh',
      }}
    >
      <SplashScreen />
      <Typography variant="overline" gutterBottom>
        Logging... Please wait
      </Typography>
    </Box>
  );
}

export const FullPageCoveringLoading = ({ title }: any) => (
    <CustomModal
      maxWidth={false}
      onClose={() => {}}
      open
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Typography variant="overline">
        {title}
        <LinearProgressLoading loading />
      </Typography>
    </CustomModal>
  );
