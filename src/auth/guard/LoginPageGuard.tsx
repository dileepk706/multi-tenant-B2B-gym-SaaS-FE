import { useEffect, useState } from 'react';
import { useRouter } from '@routes/hook';
import { pathKeys } from 'shared/routes';
import { useAuthContext } from '../hooks';

type Props = {
  children: React.ReactNode;
};

export default function LoginPageGuard({ children }: Props) {
  const router = useRouter();
  const { authenticated, loading } = useAuthContext();
  const [checked, setChecked] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const returnTo = searchParams.get('returnTo');

  useEffect(() => {
    if (authenticated && !loading) {
      router.replace(returnTo || pathKeys.dashboard.root);
    } else {
      setChecked(true);
    }
  }, [authenticated, loading, router, returnTo]);


  if (loading || !checked) {
    return <h1>Checking authentication...</h1>;
  }

  return <>{children}</>;
}
