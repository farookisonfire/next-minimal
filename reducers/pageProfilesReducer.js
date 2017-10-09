import { pageProfiles } from './initialState';
import {
  ENROLL_PAYMENT_PLAN_FAIL,
  ENROLL_PAYMENT_PLAN_SUCCESS,
} from '../actions/confirmActions';

export default function pageProfilesReducer(state = pageProfiles, { type }) {
  switch (type) {
    case ENROLL_PAYMENT_PLAN_FAIL:
      const updatedProgramFeePageFail = Object.assign({}, state.programFeePage, { paymentPlanFail: true, paymentPlanSuccess: false });
      return Object.assign({}, state, { programFeePage: updatedProgramFeePageFail });
    case ENROLL_PAYMENT_PLAN_SUCCESS:
      const updatedProgramFeePageSuccess = Object.assign({}, state.programFeePage, { paymentPlanFail: false, paymentPlanSuccess: true });
      return Object.assign({}, state, { programFeePage: updatedProgramFeePageSuccess });
    default:
      return state;
  }
}
