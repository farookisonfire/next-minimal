import { combineReducers } from 'redux';
import showCanvas from './landingReducer';
import programs from './programsReducer';
import programFees from './programFeesReducer';
import pageProfiles from './pageProfilesReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs,
  programFees,
  pageProfiles,
});

export default rootReducer;
