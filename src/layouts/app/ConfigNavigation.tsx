import { useMemo } from 'react';
import { useLocales } from '@locales';
import { pathKeys } from 'shared/routes';
import { ICONS } from '@components/iconify/icons';

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      {
        subheader: '',
        items: [
          {
            title: t('dashboard'),
            path: pathKeys.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: t('members'),
            path: pathKeys.members.root,
            icon: ICONS.users,
          },
          {
            title: t('gym'),
            path: pathKeys.gym.root,
            icon: ICONS.gym,
          },
          {
            title: t('account'),
            path: pathKeys.account.root,
            icon: ICONS.account,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
