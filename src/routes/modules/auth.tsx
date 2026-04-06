import { lazy, Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import CompactLayout from '@layouts/compact';
import AuthLayout from '@layouts/auth/classic';
import { SplashScreen } from '@components/loading-screen';
import { pathKeys } from 'shared/routes';
import { loginUserPageRoute } from '@pages/login/login-user.page.route';
import { registerUserPageRoute } from '@pages/register/register.page.route';

// ----------------------------------------------------------------------

// JWT

export const authJWT: RouteObject = {
  element: (
    <AuthLayout>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  ),
  children: [
    loginUserPageRoute,
    registerUserPageRoute,

    // staff
    {
      path: pathKeys.auth.staffLogin,
      element: (
        <AuthLayout>
          <h1>Login</h1>
        </AuthLayout>
      ),
    },

    // member
    {
      path: pathKeys.auth.memberLogin,
      element: (
        <AuthLayout>
          <h1>Login</h1>
        </AuthLayout>
      ),
    },

    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: 'verify', element: <h1>verify</h1> },
        { path: 'forgot-password', element: <h1>forgot-password</h1> },
      ],
    },
  ],
};
