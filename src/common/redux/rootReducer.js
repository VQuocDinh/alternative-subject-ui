import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import commonReducer from './reducer/common.reducer';

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authLogin', 'login'],
};

const rootReducer = combineReducers({
  common: commonReducer,
});

export { rootPersistConfig, rootReducer };
