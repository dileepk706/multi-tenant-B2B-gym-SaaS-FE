import { useEffect, useCallback, useMemo, useState } from 'react';
// auth utils
import { getUserProfile, loginUser, logoutUser, registerUser } from 'shared/api/api.services';
import { LoginUserDto, RegisterUserDto } from 'shared/api/api.types';
// redux
import { useDispatch, useAppSelector } from '@redux/store';
import { User } from 'entities/user/user.entity';
import {
  login as loginAction,
  logout as logoutAction,
  setLoading,
  setSessionExpired,
} from '@redux/slices/auth';
import { AuthContext } from './AuthContext';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);

  const { accessToken, sessionExpired, loading } = useAppSelector((state) => state.auth);

  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await getUserProfile();
      const { user: refreshedUser } = response.data.data;
      setUser(refreshedUser);
    } catch (error) {
      console.log('profile fetching error', error);
    }
  }, []);

  const initialize = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      if (accessToken) {
        await fetchUserProfile();
      } else {
        dispatch(logoutAction());
      }
    } finally {
      dispatch(setLoading(false));
    }
  }, [accessToken, dispatch, fetchUserProfile]);

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(
    async (loginUserDto: LoginUserDto) => {
      const response = await loginUser(loginUserDto);
      const { accessToken: token, user: loggedInUser } = response.data.data;

      dispatch(loginAction({ accessToken: token }));
      dispatch(setSessionExpired(false));
      setUser(loggedInUser);
      return response.data;
    },
    [dispatch]
  );


  const register = useCallback(async (registerUserDto: RegisterUserDto) => {
    const response = await registerUser(registerUserDto);
    return response.data;
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    dispatch(logoutAction());
    dispatch(setSessionExpired(false));
  }, [dispatch]);

  const checkAuthenticated = accessToken && user ? 'authenticated' : 'unauthenticated';

  const status = loading || (accessToken && !user) ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      logout,
      register,
      refreshProfile: fetchUserProfile,
    }),
    [status, user, login, logout, register, fetchUserProfile]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
