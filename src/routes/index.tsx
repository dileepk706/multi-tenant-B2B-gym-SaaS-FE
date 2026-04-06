import { useState, useEffect, Suspense, ReactNode } from 'react';
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from 'react-router-dom';
import NotFoundPage from '@pages/404';
import { pathKeys } from '../shared/routes';
import { authJWT } from './modules/auth';
import { userRoutes } from './modules/user';

export function BootstrappedRouter() {
  const [router, setRouter] = useState<ReturnType<typeof browserRouter> | null>(null);

  useEffect(() => {
    setRouter(browserRouter());
  }, []);

  if (!router) {
    return <h1>Loading</h1>;
  }

  return <RouterProvider router={router} fallbackElement={<h1>Loading</h1>} />;
}

const browserRouter = () =>
  createBrowserRouter([
    {
      errorElement: <BubbleError />,
      children: [
        // auth
        authJWT,

        // user routes
        userRoutes,

        {
          path: '/404',
          element: <NotFoundPage />,
        },
        {
          path: '*',
          loader: async () => redirect(pathKeys.page404),
        },
      ],
    },
  ]);

function BubbleError(): null {
  const error = useRouteError();

  if (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(typeof error === 'string' ? error : JSON.stringify(error));
    }
  }
  return null;
}
