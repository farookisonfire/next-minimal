import { combineReducers } from 'redux';
import showCanvas from './landingReducer';
import programs from './programsReducer';
import programFees from './programFeesReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs,
  programFees,
});

export default rootReducer;
