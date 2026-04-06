import { useEffect } from 'react';
import NProgress from 'nprogress';
import StyledProgressBar from './styles';

export default function ProgressBar() {
  NProgress.configure({ showSpinner: false });

  NProgress.start();

  useEffect(() => {
    NProgress.done();
  }, []);

  return <StyledProgressBar />;
}
