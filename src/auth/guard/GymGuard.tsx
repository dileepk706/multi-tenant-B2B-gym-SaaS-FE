import { useEffect, useState } from 'react';
import { useRouter } from '@routes/hook';
import { pathKeys } from 'shared/routes';
import { SplashScreen } from '@components/loading-screen';
import { useAuthContext } from '../hooks';

type Props = {
  children: React.ReactNode;
};

export default function GymGuard({ children }: Props) {
  const router = useRouter();
  const { authenticated, user, loading } = useAuthContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (authenticated) {
      const isGymCreatePage = window.location.pathname.includes(pathKeys.onboarding);

      if (!user?.tenant_id && !isGymCreatePage) {
        router.replace(pathKeys.onboarding);
      } else if (user?.tenant_id && isGymCreatePage) {
        router.replace(pathKeys.dashboard.root);
      } else {
        setChecked(true);
      }
    }
  }, [authenticated, user, loading, router]);

  if (loading || !checked) {
    return <SplashScreen />;
  }


  return <>{children}</>;
}
