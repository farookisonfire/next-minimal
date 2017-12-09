import { combineReducers } from 'redux';
import showCanvas from './landingReducer';
import programs from './programsReducer';
import programFees from './programFeesReducer';
import pageProfiles from './pageProfilesReducer';
import confirmApplicantData from './confirmReducer';
import errors from './errorsReducer';
import faqs from './faqReducer';
import securePage from './securePageReducer';
import applicantData from './applicantReducer';

const rootReducer = combineReducers({
  showCanvas,
  programs,
  programFees,
  pageProfiles,
  confirmApplicantData,
  errors,
  faqs,
  securePage,
  applicantData,
});

export default rootReducer;
