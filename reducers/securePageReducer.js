import { SECURE_SELECT_ENROLL, SECURE_SELECT_WAITLIST } from '../actions/secureActions';

export default (state = { programSelected: false, selectedProgramId: '', openWaitlistPortal: false }, action) => {
  switch (action.type) {
    case SECURE_SELECT_ENROLL:
      return Object.assign(
        {},
        state,
        { programSelected: action.programSelected, selectedProgramId: action.selectedProgramId });
    case SECURE_SELECT_WAITLIST:
      return Object.assign(
        {},
        state,
        { openWaitlistPortal: action.openWaitlistPortal, selectedProgramId: action.selectedProgramId });
    default:
      return state;
  }
};
