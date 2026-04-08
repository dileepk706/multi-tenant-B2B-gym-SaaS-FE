const memberRoot = `/members`;
const gymRoot = `/gym`;
const accountRoot = `/account`;

export const pathKeys = {
  root: '/',
  login: '/login/',
  register: '/register/',
  page404: '/404/',
  onboarding: '/onboarding/',
  // dashboard
  dashboard: {
    root: '/',
  },

  // gym
  gym: {
    root: gymRoot,
    schedule: `${gymRoot}/schedule/`,
    staffs: {
      root: `${gymRoot}/staffs/`,
      byStaffId: (id: string) => `${gymRoot}/staffs/${id}/`,
    },
  },

  // members
  members: {
    root: memberRoot,
    checkIn: `${memberRoot}/check-in/`,
    byMemberId: (id: string) => `${memberRoot}/${id}/`,
  },

  // account
  account: {
    root: accountRoot,
    setting: `${accountRoot}/setting/`,
  },

  // auth
  auth: {
    memberLogin: '/:gymId/member/login/',
    staffLogin: '/:gymId/staff/login/',
    userLogin: '/login/',
    userRegister: '/register/',
  },
} as const;
