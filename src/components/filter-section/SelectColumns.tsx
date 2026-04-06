import { Button } from '@mui/material';
import Iconify from '../iconify';

export default function SelectColumns() {
  return (
    <Button
      size="large"
      variant="soft"
      endIcon={<Iconify icon="material-symbols:table-sharp" />}
      // onClick={onOpenFilter.onToggle}
      // color={onOpenFilter.value ? 'secondary' : undefined}
    >
      Column
    </Button>
  );
}
