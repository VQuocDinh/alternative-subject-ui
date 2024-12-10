import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import commonReducer from './reducer/common.reducer';
import treatmentReducer from '../../treatment/common/treatment.slice';

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authLogin', 'login'],
};

const rootReducer = combineReducers({
  common: commonReducer,
  treatment: treatmentReducer,
});

export { rootPersistConfig, rootReducer };
