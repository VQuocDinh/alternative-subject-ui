import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import commonReducer from './reducer/common.reducer';
import treatmentReducer from '../../treatment/common/treatment.slice';
import calendarReducer from '../../appointment/calendar/calendarSlice';

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
  calendar: calendarReducer,
});

export { rootPersistConfig, rootReducer };
