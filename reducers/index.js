import { combineReducers } from 'redux';
import showCanvas from './landingReducer';
import programs from './programsReducer';
import programFees from './programFeesReducer';
import pageProfiles from './pageProfilesReducer';
import confirmApplicantData from './confirmReducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs,
  programFees,
  pageProfiles,
  confirmApplicantData,
  errors,
});

export default rootReducer;
