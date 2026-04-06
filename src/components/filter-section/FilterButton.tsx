import { Button } from '@mui/material';
import Iconify from '../iconify';

export default function FilterButton({ onOpenFilter }: { onOpenFilter: any }) {
  return (
    <Button
      size="large"
      variant="soft"
      endIcon={<Iconify icon="mdi:filter" />}
      onClick={onOpenFilter.onToggle}
      color={onOpenFilter.value ? 'secondary' : undefined}
    >
      Filter
    </Button>
  );
}
