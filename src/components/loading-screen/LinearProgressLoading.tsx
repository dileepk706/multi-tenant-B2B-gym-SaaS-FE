import { LinearProgress } from '@mui/material';
import { memo } from 'react';

type Props = {
  loading: boolean;
  color?: 'warning' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'inherit';
};
function LinearProgressLoading({ loading, color = 'primary' }: Props) {
  return loading && <LinearProgress  color={color} variant="indeterminate" />;
}

export default memo(LinearProgressLoading);
