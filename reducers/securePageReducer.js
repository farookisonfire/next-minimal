import { SECURE_SELECT_ENROLL } from '../actions/secureActions';

export default (state = { programSelected: false, selectedProgramId: '' }, action) => {
  switch (action.type) {
    case SECURE_SELECT_ENROLL:
      return Object.assign(
        {},
        state,
        { programSelected: action.programSelected, selectedProgramId: action.selectedProgramId });
    default:
      return state;
  }
};
