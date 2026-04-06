import { pathKeys } from 'shared/routes';
import { RouteObject } from 'react-router-dom';

export const registerUserPageRoute: RouteObject = {
  path: pathKeys.register,
  lazy: async () => {
    const [Component] = await Promise.all([
      import('./register-user.page.ui').then((module) => module.default),
    ]);
    return { Component };
  },
};
