import { Button, Typography } from '@mui/material';

type Props = {
  onClick?: () => void;
  label: string;
  size?: 'large' | 'medium' | 'small';
};

export default function FilterButtonV2({ onClick, label, size }: Props) {
  return (
    <Button
      onClick={onClick}
      size={size || 'medium'}
      variant="contained"
      sx={{
        textTransform: 'none',
        fontSize: 14,
        px: 2,
        py: 0.75,
        borderRadius: 1, // more rounded corners
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 2, // subtle shadow
        '&:hover': {
          backgroundColor: 'action.hover',
          boxShadow: 2,
        },
        // typography: 'caption',
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 800 }}>
        {label}
      </Typography>
    </Button>
  );
}
