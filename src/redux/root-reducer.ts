import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import authReducer from './slices/auth';

// ----------------------------------------------------------------------

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const rootConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [], // Don't persist other things by default
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const rootReducer = persistReducer(rootConfig, combinedReducer);
