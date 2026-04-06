import { logout } from './slices/auth';
import { persistor, useDispatch } from './store';

export const useReduxPersisterManage = () => {
  const dispatch = useDispatch();

  const clearPersistedState = () => {
    persistor.purge();
    dispatch(logout());
  };

  return { clearPersistedState };
};
