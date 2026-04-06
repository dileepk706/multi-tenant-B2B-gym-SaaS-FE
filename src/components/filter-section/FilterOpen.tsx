import { Box, Collapse, Stack } from '@mui/material';
import Iconify from '@components/iconify';
import Label from '@components/label';

export default function FilterOpen({ open, close, children }: any) {
  return (
    <Collapse in={open || true} timeout={300}>
      {/* <Divider orientation="horizontal" /> */}

      <Stack direction="row" alignItems="center" pr={1}>
        <Stack
          spacing={2}
          alignItems={{ xs: 'flex-end', md: 'center' }}
          direction={{
            xs: 'column',
            md: 'row',
          }}
          sx={{
            p: 2.5,
            pr: { xs: 2.5, md: 1 },
          }}
          flexWrap="wrap"
        >
          {children}
          {/* <Label ml={5} variant="filled" onClick={close}>
            <Iconify icon={'material-symbols:close'} />
          </Label> */}
        </Stack>
        <Box flexGrow={1} />
      </Stack>
      {/*  */}
    </Collapse>
  );
}
