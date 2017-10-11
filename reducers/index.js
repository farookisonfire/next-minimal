import { combineReducers } from 'redux';
import showCanvas from './landingReducer';
import programs from './programsReducer';
import programFees from './programFeesReducer';
import pageProfiles from './pageProfilesReducer';
import confirmApplicantData from './confirmReducer';
import errors from './errorsReducer';
import faqs from './faqReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs,
  programFees,
  pageProfiles,
  confirmApplicantData,
  errors,
  faqs,
});

export default rootReducer;
