import { Button, Box, Typography } from '@mui/material';
import { fNumber } from '@utils/format-number';
import Iconify from '../iconify';

interface DownloadButtonProps {
  progress?: number; // 0 to 100
  onClick?: () => void;
  label?: string;
}

export default function DownloadButton({ progress = 0, onClick, label }: DownloadButtonProps) {
  const isDownloading = progress > 0 && progress < 100;
  const isComplete = progress === 100;

  return (
    <Button
      fullWidth
      size="large"
      onClick={onClick}
      disabled={isDownloading}
      endIcon={!isDownloading && <Iconify icon="streamline-color:download-file-flat" />}
      variant="contained"
      sx={{
        textTransform: 'none',
        fontSize: 14,
        px: 2,
        py: 0.75,
        borderRadius: 1, // more rounded corners
        backgroundColor: 'background.paper',

        boxShadow: 2, // subtle shadow
        '&:hover': {
          backgroundColor: 'action.hover',
          boxShadow: 2,
        },
        // typography: 'caption',
        position: 'relative',
        overflow: 'hidden',
        color: isDownloading ? 'white' : 'text.primary',
        minWidth: isDownloading ? 200 : undefined,
      }}
    >
      {isDownloading ? (
        <Typography variant="button" sx={{ zIndex: 2, position: 'relative' }}>
          {`${fNumber(progress)}%`}
        </Typography>
      ) : isComplete ? (
        'Downloaded'
      ) : (
        <Typography variant="caption" sx={{ fontWeight: 800 }}>
          {label || 'Download'}
        </Typography>
      )}
    </Button>
  );
}

