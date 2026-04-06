import { ReactNode, Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { LoadingScreen } from '@components/loading-screen';
import AuthGuard from '@auth/guard/AuthGuard';
import AppLayout from '@layouts/app/AppLayout';
import { pathKeys } from 'shared/routes';
import { useAuthContext } from '@auth/hooks';
import Button from '@mui/material/Button';
import { api } from 'shared/api/api.instance';
// ----------------------------------------------------------------------

export const userRoutes: RouteObject = {
  path: '/',
  element: (
    <AuthGuard>
      <AppLayout>
        {/* <PaymentGuard> */}
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
        {/* </PaymentGuard> */}
      </AppLayout>
    </AuthGuard>
  ),

  children: [
    // gym
    {
      path: pathKeys.gym.root,
      element: (
        // <GymLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
        // </GymLayout>
      ),
      children: [
        {
          path: pathKeys.gym.schedule,
          element: <h1>Schedule</h1>,
        },
        {
          path: pathKeys.gym.staffs.root,
          element: <h1>Staffs</h1>,
        },
        {
          path: pathKeys.gym.staffs.byStaffId(':id'),
          element: <h1>Staff</h1>,
        },
      ],
    },

    // members
    {
      path: pathKeys.members.root,
      element: (
        // <MemberLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
        // </MemberLayout>
      ),
      children: [
        {
          path: pathKeys.members.root,
          element: <Test />,
        },
        {
          path: pathKeys.members.checkIn,
          element: <h1>Check In</h1>,
        },
        {
          path: pathKeys.members.byMemberId(':id'),
          element: <h1>Member</h1>,
        },
      ],
    },

    // dashboard
    {
      path: pathKeys.dashboard.root,
      element: (
        // <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
        // </DashboardLayout>
      ),
      children: [
        {
          path: pathKeys.dashboard.root,
          element: <h1>Dashboard</h1>,
        },
      ],
    },

    // account
    {
      path: pathKeys.account.root,
      element: (
        // <AccountLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
        // </AccountLayout>
      ),
      children: [
        {
          path: pathKeys.account.setting,
          element: <h1>Account Setting</h1>,
        },
      ],
    },
  ],
};

function Test() {
  const { user } = useAuthContext();

  const handleRefresh = async () => {
    try {
      console.log('Manual refresh triggered...');
      const response = await api.post('/refresh-token/refresh');
      console.log('Refresh successful:', response.data);
      alert('Token Refresh Success! Check Console.');
    } catch (error: any) {
      console.error('Refresh failed:', error.response?.data || error);
      alert('Token Refresh Failed! Check Console.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Members</h1>
      <div
        style={{
          marginBottom: 20,
          padding: 15,
          background: '#f4f4f4',
          borderRadius: 8,
          color: 'black',
        }}
      >
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>ID:</strong> {user?.id}
        </p>
      </div>

      <Button variant="contained" color="secondary" onClick={handleRefresh}>
        Debug: Manual Refresh Token
      </Button>
    </div>
  );
}
