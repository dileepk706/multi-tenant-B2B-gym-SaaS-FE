import { pathKeys } from 'shared/routes';
import { RouteObject } from 'react-router-dom';

export const onboardingUserPageRoute: RouteObject = {
  path: pathKeys.onboarding,
  lazy: async () => {
    const [Component] = await Promise.all([
      import('./onboarding-user.page.ui').then((module) => module.default),
    ]);
    return { Component };
  },
};
